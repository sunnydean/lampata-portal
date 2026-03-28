import { cn } from "./ui/utils";

interface SectionIntroProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  eyebrowAlign?: "inherit" | "left" | "center" | "right";
  className?: string;
}

export function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left",
  eyebrowAlign = "inherit",
  className,
}: SectionIntroProps) {
  const centered = align === "center";
  const rightAligned = align === "right";
  const eyebrowLeftAligned = eyebrowAlign === "left";
  const eyebrowCentered = eyebrowAlign === "center";
  const eyebrowRightAligned = eyebrowAlign === "right";

  return (
    <div
      className={cn(
        "mb-14 flex max-w-3xl flex-col gap-4",
        centered && "mx-auto items-center text-center",
        rightAligned && "lg:ml-auto",
        className,
      )}
    >
      <span
        className={cn(
          "section-eyebrow",
          eyebrowLeftAligned && "self-start",
          eyebrowCentered && "self-center",
          eyebrowRightAligned && "self-end",
        )}
      >
        {eyebrow}
      </span>
      <h2 className="section-title max-w-4xl text-balance">{title}</h2>
      {description ? <p className="section-copy">{description}</p> : null}
    </div>
  );
}
