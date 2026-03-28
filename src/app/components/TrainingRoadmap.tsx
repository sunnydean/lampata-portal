import { hierarchy, tree } from "d3-hierarchy";
import type { TrainingRoadmapCourse } from "../content/siteContent";
import roadmap from "../content/trainingRoadmap.json";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

type Side = "left" | "right";
type NodeKind = "question" | "subtopic" | "technology";

interface TrainingRoadmapProps {
  course: TrainingRoadmapCourse;
}

interface RoadmapTechnology {
  id: string;
  label: string;
  summary: string;
  origin: "sds" | "extension";
  source?: string;
}

interface RoadmapSubtopic {
  id: string;
  label: string;
  technologyIds: string[];
}

interface RoadmapQuestion {
  id: string;
  label: string;
  summary: string;
  subtopics: RoadmapSubtopic[];
}

interface RoadmapData {
  center: { label: string; summary: string };
  questions: RoadmapQuestion[];
  technologies: RoadmapTechnology[];
}

interface BranchNode {
  id: string;
  label: string;
  kind: NodeKind;
  summary?: string;
  technology?: RoadmapTechnology;
  children?: BranchNode[];
}

interface PositionedNode {
  x: number;
  y: number;
  node: BranchNode;
}

interface PositionedLink {
  source?: PositionedNode;
  target?: PositionedNode;
}

const data = roadmap as RoadmapData;
const technologyById = new Map(data.technologies.map((item) => [item.id, item]));

const THEME = {
  blue: "#00458b",
  gold: "#f5d704",
  questionBg: "#eef6ff",
  questionBorder: "rgba(0,69,139,0.16)",
  subtopicBg: "#f7fbff",
  subtopicBorder: "rgba(0,69,139,0.1)",
  leafBg: "rgba(0,69,139,0.055)",
  leafBorder: "rgba(0,69,139,0.16)",
  extensionBg: "#fff7cf",
  extensionBorder: "rgba(245,215,4,0.45)",
  extensionText: "#7a6200",
  dotBorder: "rgba(0,69,139,0.18)",
  dotHalo: "0 0 0 4px rgba(0,69,139,0.05)",
};

const DOTTED = {
  horizontal:
    "repeating-linear-gradient(90deg, rgba(0,69,139,0.82) 0 2px, transparent 2px 6px)",
  vertical:
    "repeating-linear-gradient(180deg, rgba(0,69,139,0.82) 0 2px, transparent 2px 6px)",
};

const DESKTOP = {
  padding: 8,
  rowStep: 64,
  leafStep: 34,
  clusterGap: 10,
  width: {
    question: 188,
    subtopic: 180,
    technology: 168,
  } as Record<NodeKind, number>,
  height: {
    question: 96,
    subtopic: 42,
    technology: 36,
  } as Record<NodeKind, number>,
  laneOffset: {
    question: 102,
    subtopic: 308,
    technology: 500,
  } as Record<NodeKind, number>,
};

const TEXT = {
  root: "text-[1.6rem]",
  questionTitle: "text-[1.3rem]",
  questionSummary: "text-[1rem]",
  subtopic: "text-[0.98rem]",
  technology: "text-[0.84rem]",
  popoverEyebrow: "text-[0.78rem]",
};

const QUESTIONS = dedupeQuestionTechnologies(data.questions);

function dedupeQuestionTechnologies(questions: RoadmapQuestion[]) {
  const seen = new Set<string>();

  return questions.map((question) => ({
    ...question,
    subtopics: question.subtopics.map((subtopic) => ({
      ...subtopic,
      technologyIds: subtopic.technologyIds.filter((id) => {
        if (seen.has(id)) return false;
        seen.add(id);
        return true;
      }),
    })),
  }));
}

function sourceLabel(source?: string) {
  if (!source) return "";

  try {
    return new URL(source).hostname.replace(/^www\./, "");
  } catch {
    return source.replace(/^sds\//, "");
  }
}

function getTechnologies(ids: string[]) {
  return Array.from(new Set(ids))
    .map((id) => technologyById.get(id))
    .filter((item): item is RoadmapTechnology => Boolean(item));
}

function buildBranch(question: RoadmapQuestion): BranchNode {
  return {
    id: question.id,
    label: question.label,
    kind: "question",
    summary: question.summary,
    children: question.subtopics.map((subtopic) => ({
      id: subtopic.id,
      label: subtopic.label,
      kind: "subtopic",
      children: getTechnologies(subtopic.technologyIds).map((technology) => ({
        id: `${subtopic.id}-${technology.id}`,
        label: technology.label,
        kind: "technology",
        technology,
      })),
    })),
  };
}

function canvasWidth() {
  const baseX = DESKTOP.width.question / 2 + DESKTOP.padding;
  const furthestLane = Math.max(
    ...(["question", "subtopic", "technology"] as NodeKind[]).map(
      (kind) => DESKTOP.laneOffset[kind] + DESKTOP.width[kind] / 2,
    ),
  );

  return baseX + furthestLane + DESKTOP.padding;
}

function pointX(side: Side, width: number, kind: NodeKind) {
  const baseX = DESKTOP.width.question / 2 + DESKTOP.padding;
  const lane = baseX + DESKTOP.laneOffset[kind];

  return side === "right" ? lane : width - lane;
}

function edgeX(point: PositionedNode, side: Side, end: "source" | "target") {
  const offset = DESKTOP.width[point.node.kind] / 2 + 1;

  if (end === "source") {
    return point.x + (side === "right" ? offset : -offset);
  }

  return point.x + (side === "right" ? -offset : offset);
}

function branchStep(branch: BranchNode) {
  const maxLeafCount = Math.max(
    1,
    ...(branch.children ?? []).map((subtopic) => subtopic.children?.length ?? 0),
  );

  return Math.max(
    DESKTOP.rowStep,
    (maxLeafCount - 1) * DESKTOP.leafStep + DESKTOP.height.technology + DESKTOP.clusterGap,
  );
}

function maxLeafSpread(branch: BranchNode) {
  return Math.max(
    0,
    ...(branch.children ?? []).map(
      (subtopic) => ((subtopic.children?.length ?? 1) - 1) * DESKTOP.leafStep * 0.5,
    ),
  );
}

function buildLayout(question: RoadmapQuestion, side: Side) {
  const branch = buildBranch(question);
  const width = canvasWidth();
  const baseY = DESKTOP.padding + maxLeafSpread(branch);
  const structure = tree<BranchNode>().nodeSize([branchStep(branch), 1])(
    hierarchy({
      ...branch,
      children: (branch.children ?? []).map((subtopic) => ({
        ...subtopic,
        children: [],
      })),
    }),
  );
  const descendants = structure.descendants();
  const minY = Math.min(...descendants.map((node) => node.x));
  const points = new Map(
    descendants.map((node) => {
      const point = {
        x: pointX(side, width, node.data.kind),
        y: node.x - minY + baseY,
        node: node.data,
      };

      return [node.data.id, point];
    }),
  );
  const nodes = Array.from(points.values());
  const links: PositionedLink[] = structure.links().map((link) => ({
    source: points.get(link.source.data.id),
    target: points.get(link.target.data.id),
  }));

  (branch.children ?? []).forEach((subtopic) => {
    const subtopicPoint = points.get(subtopic.id);
    if (!subtopicPoint) return;

    (subtopic.children ?? []).forEach((technology, index, technologies) => {
      nodes.push({
        x: pointX(side, width, "technology"),
        y:
          subtopicPoint.y +
          (index - (technologies.length - 1) / 2) * DESKTOP.leafStep,
        node: technology,
      });
      links.push({ source: subtopicPoint, target: nodes[nodes.length - 1] });
    });
  });

  const height =
    Math.max(
      ...nodes.map(({ y, node }) => y + DESKTOP.height[node.kind] / 2),
    ) + DESKTOP.padding;

  return {
    width,
    height,
    rootY: points.get(question.id)?.y ?? 0,
    rootX: points.get(question.id)?.x ?? 0,
    nodes,
    links,
  };
}

function TechnologyButton({
  technology,
  className,
  style,
}: {
  technology: RoadmapTechnology;
  className: string;
  style?: React.CSSProperties;
}) {
  const isExtension = technology.origin === "extension";

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          className={className}
          style={
            isExtension
              ? {
                  ...style,
                  backgroundColor: THEME.extensionBg,
                  borderColor: THEME.extensionBorder,
                  color: THEME.extensionText,
                }
              : {
                  ...style,
                  backgroundColor: THEME.leafBg,
                  borderColor: THEME.leafBorder,
                  color: THEME.blue,
                }
          }
        >
          {technology.label}
        </button>
      </PopoverTrigger>

      <PopoverContent
        align="start"
        side="bottom"
        className="w-[min(20rem,calc(100vw-2rem))] rounded-[0.95rem] border-[#00458b]/12 bg-white p-4 shadow-[0_18px_50px_rgba(0,69,139,0.12)]"
      >
        <p
          className={
            isExtension
              ? `${TEXT.popoverEyebrow} font-medium uppercase tracking-[0.14em] text-[#8b6c00]/76`
              : `${TEXT.popoverEyebrow} font-medium uppercase tracking-[0.14em] text-[#00458b]/46`
          }
        >
          {isExtension ? "Lampata extension" : "SDS core"}
        </p>
        <h4 className="mt-2 font-display text-[1rem] leading-tight tracking-[-0.04em] text-[#00458b]">
          {technology.label}
        </h4>
        <p className="mt-2 text-sm leading-6 text-[#00458b]/74">
          {technology.summary}
        </p>
        {technology.source ? (
          <a
            href={technology.source}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex text-[0.72rem] font-medium uppercase tracking-[0.16em] text-[#00458b]/58 underline decoration-[#00458b]/28 underline-offset-4 transition-colors hover:text-[#00458b] hover:decoration-[#00458b]/58"
          >
            Docs: {sourceLabel(technology.source)}
          </a>
        ) : null}
      </PopoverContent>
    </Popover>
  );
}

function DesktopBranch({
  question,
  side,
}: {
  question: RoadmapQuestion;
  side: Side;
}) {
  const layout = buildLayout(question, side);

  return (
    <div className="relative" style={{ height: layout.height, width: layout.width }}>
      <svg
        className="pointer-events-none absolute inset-0 overflow-visible"
        viewBox={`0 0 ${layout.width} ${layout.height}`}
      >
        {layout.links.map(({ source, target }) => {
          if (!source || !target) return null;
          const sourceX = edgeX(source, side, "source");
          const targetX = edgeX(target, side, "target");
          const midX = sourceX + (targetX - sourceX) / 2;

          return (
            <path
              key={`${source.node.id}-${target.node.id}`}
              d={`M ${sourceX} ${source.y} C ${midX} ${source.y} ${midX} ${target.y} ${targetX} ${target.y}`}
              fill="none"
              stroke={THEME.blue}
              strokeOpacity="0.82"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="1 7"
            />
          );
        })}
      </svg>

      {layout.nodes.map(({ node, x, y }) => {
        if (node.kind === "technology" && node.technology) {
          return (
            <TechnologyButton
              key={node.id}
              technology={node.technology}
              className={`${TEXT.technology} absolute z-10 -translate-x-1/2 -translate-y-1/2 rounded-full border px-2.5 py-1 text-center font-medium uppercase leading-tight tracking-[0.05em]`}
              style={{ left: x, top: y, width: DESKTOP.width.technology }}
            />
          );
        }

        if (node.kind === "question") {
          return (
            <div
              key={node.id}
              className="absolute z-10 -translate-x-1/2 -translate-y-1/2 rounded-[0.78rem] border px-3 py-2 shadow-[0_8px_20px_rgba(0,69,139,0.05)]"
              style={{
                left: x,
                top: y,
                width: DESKTOP.width.question,
                minHeight: DESKTOP.height.question,
                backgroundColor: THEME.questionBg,
                borderColor: THEME.questionBorder,
                color: THEME.blue,
              }}
            >
              <h3 className={`${TEXT.questionTitle} font-display leading-tight tracking-[-0.04em]`}>
                {node.label}
              </h3>
              <p className={`${TEXT.questionSummary} mt-1 leading-6 opacity-75`}>
                {node.summary}
              </p>
            </div>
          );
        }

        return (
          <div
            key={node.id}
            className={`${TEXT.subtopic} absolute z-10 -translate-x-1/2 -translate-y-1/2 rounded-[0.68rem] border px-2.5 py-1.5 font-medium leading-5`}
            style={{
              left: x,
              top: y,
              width: DESKTOP.width.subtopic,
              minHeight: DESKTOP.height.subtopic,
              backgroundColor: THEME.subtopicBg,
              borderColor: THEME.subtopicBorder,
              color: THEME.blue,
            }}
          >
            {node.label}
          </div>
        );
      })}
    </div>
  );
}

function MobileQuestionBranch({ question }: { question: RoadmapQuestion }) {
  return (
    <div className="relative pl-5">
      <span
        className="absolute left-0 top-4 h-3.5 w-3.5 -translate-x-1/2 rounded-full border"
        style={{
          backgroundColor: THEME.gold,
          borderColor: THEME.dotBorder,
          boxShadow: THEME.dotHalo,
        }}
      />
      <span
        className="absolute left-0 top-[1.375rem] h-[2px] w-3"
        style={{ backgroundImage: DOTTED.horizontal }}
      />

      <div
        className="rounded-[0.78rem] border px-3 py-2"
        style={{
          backgroundColor: THEME.questionBg,
          borderColor: THEME.questionBorder,
          color: THEME.blue,
        }}
      >
        <h3 className={`${TEXT.questionTitle} font-display leading-tight tracking-[-0.04em]`}>
          {question.label}
        </h3>
        <p className={`${TEXT.questionSummary} mt-1 leading-6 opacity-75`}>
          {question.summary}
        </p>
      </div>

      <ul
        className="relative mt-2 space-y-2 pl-3"
        style={{
          backgroundImage: DOTTED.vertical,
          backgroundPosition: "0 0",
          backgroundRepeat: "repeat-y",
          backgroundSize: "2px 8px",
        }}
      >
        {question.subtopics.map((subtopic) => {
          const technologies = getTechnologies(subtopic.technologyIds);

          return (
            <li key={subtopic.id} className="relative pl-2.5">
              <span
                className="absolute left-0 top-3.5 h-[2px] w-2.5"
                style={{ backgroundImage: DOTTED.horizontal }}
              />
              <div
                className={`${TEXT.subtopic} rounded-[0.68rem] border px-2.5 py-1.5 font-medium leading-5`}
                style={{
                  backgroundColor: THEME.subtopicBg,
                  borderColor: THEME.subtopicBorder,
                  color: THEME.blue,
                }}
              >
                {subtopic.label}
              </div>

              {technologies.length ? (
                <ul
                  className="relative mt-1.5 flex flex-wrap gap-1.5 pl-3"
                  style={{
                    backgroundImage: DOTTED.vertical,
                    backgroundPosition: "0 0",
                    backgroundRepeat: "repeat-y",
                    backgroundSize: "2px 8px",
                  }}
                >
                  {technologies.map((technology) => (
                    <li
                      key={`${subtopic.id}-${technology.id}`}
                      className="relative pl-2.5"
                    >
                      <span
                        className="absolute left-0 top-3.5 h-[2px] w-2.5"
                        style={{ backgroundImage: DOTTED.horizontal }}
                      />
                      <TechnologyButton
                        technology={technology}
                        className={`${TEXT.technology} rounded-full border px-2.5 py-1 text-center font-medium uppercase leading-tight tracking-[0.05em]`}
                      />
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function QuestionBranch({
  question,
  index,
}: {
  question: RoadmapQuestion;
  index: number;
}) {
  const side: Side = index % 2 === 0 ? "right" : "left";
  const layout = buildLayout(question, side);
  const stubWidth =
    side === "right"
      ? layout.rootX - DESKTOP.width.question / 2
      : layout.width - layout.rootX - DESKTOP.width.question / 2;

  return (
    <li className="relative py-2 xl:py-1.5">
      <div className="xl:hidden">
        <MobileQuestionBranch question={question} />
      </div>

      <div className="hidden xl:block">
        <div
          className="relative mx-auto max-w-[1440px]"
          style={{ height: layout.height }}
        >
          <span
            className="absolute left-1/2 h-3.5 w-3.5 -translate-x-1/2 rounded-full border"
            style={{
              top: layout.rootY - 7,
              backgroundColor: THEME.gold,
              borderColor: THEME.dotBorder,
              boxShadow: THEME.dotHalo,
            }}
          />
          <span
            className="absolute h-[2px]"
            style={{
              top: layout.rootY,
              width: Math.max(0, stubWidth),
              backgroundImage: DOTTED.horizontal,
              ...(side === "right" ? { left: "50%" } : { right: "50%" }),
            }}
          />

          <div
            className="absolute top-0"
            style={
              side === "right"
                ? { left: "50%" }
                : { left: "50%", transform: "translateX(-100%)" }
            }
          >
            <DesktopBranch question={question} side={side} />
          </div>
        </div>
      </div>
    </li>
  );
}

export function TrainingRoadmap({ course }: TrainingRoadmapProps) {
  return (
    <article aria-label={course.title} className="pt-2">
      <div className="mx-auto max-w-xl text-center">
        <div className={`${TEXT.root} inline-flex rounded-[0.82rem] border border-[#00458b]/14 bg-white px-4 py-2 font-display font-semibold tracking-[-0.03em] text-[#00458b] shadow-[0_8px_20px_rgba(0,69,139,0.05)]`}>
          {data.center.label}
        </div>
      </div>

      <div className="mx-auto mt-4 h-10 w-[2px]" style={{ backgroundColor: THEME.blue }} />

      <ol className="relative mx-auto mt-4 max-w-[1344px] pt-8 before:absolute before:bottom-0 before:left-0 before:top-0 before:w-[2px] before:bg-[#00458b] before:content-[''] xl:before:left-1/2 xl:before:-translate-x-1/2">
        {QUESTIONS.map((question, index) => (
          <QuestionBranch key={question.id} question={question} index={index} />
        ))}
      </ol>
    </article>
  );
}
