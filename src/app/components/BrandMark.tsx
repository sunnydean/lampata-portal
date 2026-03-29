import lampataLogo from "../../../Lampata.svg";
import lampataLogoSource from "../../../Lampata.svg?raw";
import { useEffect, useId, useRef, type PointerEvent as ReactPointerEvent } from "react";
import { useIdleActivation } from "../hooks/useIdleActivation";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { cn } from "./ui/utils";

interface BrandMarkProps {
  className?: string;
  satelliteMode?: "none" | "orbit";
  variant?: "default" | "light";
}

const LOGO_VIEW_BOX = "0 595 1135.587 333.044";
const [VIEW_BOX_MIN_X, VIEW_BOX_MIN_Y, VIEW_BOX_WIDTH, VIEW_BOX_HEIGHT] = LOGO_VIEW_BOX.split(" ").map(Number);
const SATELLITE_ORBIT_DURATION_MS = 9500;
const SATELLITE_RETURN_DURATION_MS = 900;
const SATELLITE_ORBIT_SAMPLE_COUNT = 480;
const SHOW_SATELLITE_BEAM = false;
const SATELLITE_STATIC_ROTATION = 18;

type OrbitGeometry = {
  center: {
    x: number;
    y: number;
  };
  path: string;
};

type OrbitPoint = {
  x: number;
  y: number;
};

type SatelliteMotionMode = "orbit" | "drag" | "return";

type SatelliteMotionState = {
  currentDistance: number;
  dragPoint: OrbitPoint | null;
  lastTimestamp: number | null;
  mode: SatelliteMotionMode;
  pointerId: number | null;
  returnFrom: OrbitPoint | null;
  returnStartedAt: number | null;
  returnTargetDistance: number | null;
  returnTo: OrbitPoint | null;
};

function getAttributeValue(tag: string, attribute: string) {
  return tag.match(new RegExp(`${attribute}="([^"]+)"`))?.[1] ?? null;
}

function createOrbitGeometry(svgSource: string): OrbitGeometry | null {
  const ellipseTags = svgSource.match(/<ellipse\b[\s\S]*?\/>/g) ?? [];
  const ellipseTag =
    ellipseTags.find((tag) => tag.includes('id="path1"')) ??
    ellipseTags.find((tag) => tag.includes("fill-opacity:0")) ??
    ellipseTags[0];

  if (!ellipseTag) {
    return null;
  }

  const cx = Number(getAttributeValue(ellipseTag, "cx"));
  const cy = Number(getAttributeValue(ellipseTag, "cy"));
  const rx = Number(getAttributeValue(ellipseTag, "rx"));
  const ry = Number(getAttributeValue(ellipseTag, "ry"));
  const transform = getAttributeValue(ellipseTag, "transform");

  if ([cx, cy, rx, ry].some((value) => Number.isNaN(value))) {
    return null;
  }

  const matrixValues = transform?.match(/matrix\(([^)]+)\)/)?.[1]
    ?.split(/[,\s]+/)
    .filter(Boolean)
    .map(Number);

  const [a, b, c, d, e, f] =
    matrixValues && matrixValues.length === 6 && matrixValues.every((value) => !Number.isNaN(value))
      ? matrixValues
      : [1, 0, 0, 1, 0, 0];
  const commands: string[] = [];
  const orbitCenterX = a * cx + c * cy + e;
  const orbitCenterY = b * cx + d * cy + f;

  for (let index = 0; index <= SATELLITE_ORBIT_SAMPLE_COUNT; index += 1) {
    const angle = (index / SATELLITE_ORBIT_SAMPLE_COUNT) * Math.PI * 2;
    const localX = cx + rx * Math.cos(angle);
    const localY = cy + ry * Math.sin(angle);
    const x = a * localX + c * localY + e;
    const y = b * localX + d * localY + f;
    const command = index === 0 ? "M" : "L";

    commands.push(`${command} ${x.toFixed(3)} ${y.toFixed(3)}`);
  }

  return {
    center: {
      x: orbitCenterX,
      y: orbitCenterY,
    },
    path: commands.join(" "),
  };
}

const SATELLITE_ORBIT = createOrbitGeometry(lampataLogoSource);

function OrbitingSatellite({ variant }: Pick<BrandMarkProps, "variant">) {
  const shouldReduceMotion = usePrefersReducedMotion();
  const motionReady = useIdleActivation(1200);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const orbitPathRef = useRef<SVGPathElement | null>(null);
  const satelliteRef = useRef<SVGGElement | null>(null);
  const motionStateRef = useRef<SatelliteMotionState>({
    currentDistance: 0,
    dragPoint: null,
    lastTimestamp: null,
    mode: "orbit",
    pointerId: null,
    returnFrom: null,
    returnStartedAt: null,
    returnTargetDistance: null,
    returnTo: null,
  });
  const beamOuterGradientId = useId().replace(/:/g, "");
  const beamInnerGradientId = useId().replace(/:/g, "");
  const bodyFill = variant === "light" ? "#ffffff" : "#f5d704";
  const bodyStroke = variant === "light" ? "rgba(255, 255, 255, 0.85)" : "#00458b";
  const panelFill = variant === "light" ? "rgba(255, 255, 255, 0.72)" : "#00458b";
  const panelStroke = variant === "light" ? "rgba(255, 255, 255, 0.35)" : "#f5d704";
  const antennaStroke = variant === "light" ? "rgba(255, 255, 255, 0.72)" : "#00458b";
  const accentFill = variant === "light" ? "#ffffff" : "#f5d704";
  const badgeFill = variant === "light" ? "rgba(255, 255, 255, 0.22)" : "rgba(255, 255, 255, 0.96)";
  const badgeStroke = variant === "light" ? "rgba(255, 255, 255, 0.42)" : "rgba(0, 69, 139, 0.12)";
  const isInteractive = motionReady && !shouldReduceMotion;

  function getSatelliteRotation(point: OrbitPoint) {
    if (!SHOW_SATELLITE_BEAM || !SATELLITE_ORBIT) {
      return SATELLITE_STATIC_ROTATION;
    }

    const deltaX = SATELLITE_ORBIT.center.x - point.x;
    const deltaY = SATELLITE_ORBIT.center.y - point.y;
    return (Math.atan2(deltaY, deltaX) * 180) / Math.PI - 90;
  }

  function setSatelliteTransform(point: OrbitPoint) {
    const satelliteNode = satelliteRef.current;

    if (!satelliteNode) {
      return;
    }

    const rotation = getSatelliteRotation(point);

    satelliteNode.setAttribute(
      "transform",
      `translate(${point.x.toFixed(3)} ${point.y.toFixed(3)}) rotate(${rotation.toFixed(3)})`,
    );
  }

  function getPointFromClientPosition(clientX: number, clientY: number) {
    const svgNode = svgRef.current;

    if (!svgNode) {
      return null;
    }

    const rect = svgNode.getBoundingClientRect();

    if (rect.width === 0 || rect.height === 0) {
      return null;
    }

    return {
      x: VIEW_BOX_MIN_X + ((clientX - rect.left) / rect.width) * VIEW_BOX_WIDTH,
      y: VIEW_BOX_MIN_Y + ((clientY - rect.top) / rect.height) * VIEW_BOX_HEIGHT,
    };
  }

  function findClosestOrbitDistance(point: OrbitPoint, orbitPathNode: SVGPathElement, orbitLength: number) {
    const sampleStep = orbitLength / SATELLITE_ORBIT_SAMPLE_COUNT;
    let closestDistance = 0;
    let closestDistanceSquared = Number.POSITIVE_INFINITY;

    for (let sampleIndex = 0; sampleIndex < SATELLITE_ORBIT_SAMPLE_COUNT; sampleIndex += 1) {
      const distance = sampleIndex * sampleStep;
      const orbitPoint = orbitPathNode.getPointAtLength(distance);
      const distanceSquared = (orbitPoint.x - point.x) ** 2 + (orbitPoint.y - point.y) ** 2;

      if (distanceSquared < closestDistanceSquared) {
        closestDistance = distance;
        closestDistanceSquared = distanceSquared;
      }
    }

    const refinementStep = sampleStep / 16;

    for (let offset = -sampleStep; offset <= sampleStep; offset += refinementStep) {
      let distance = closestDistance + offset;

      if (distance < 0) {
        distance += orbitLength;
      }

      if (distance > orbitLength) {
        distance -= orbitLength;
      }

      const orbitPoint = orbitPathNode.getPointAtLength(distance);
      const distanceSquared = (orbitPoint.x - point.x) ** 2 + (orbitPoint.y - point.y) ** 2;

      if (distanceSquared < closestDistanceSquared) {
        closestDistance = distance;
        closestDistanceSquared = distanceSquared;
      }
    }

    return closestDistance;
  }

  function handlePointerDown(event: ReactPointerEvent<SVGGElement>) {
    if (!isInteractive) {
      return;
    }

    const pointerPoint = getPointFromClientPosition(event.clientX, event.clientY);

    if (!pointerPoint) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    event.currentTarget.setPointerCapture(event.pointerId);
    event.currentTarget.style.cursor = "grabbing";

    motionStateRef.current.mode = "drag";
    motionStateRef.current.pointerId = event.pointerId;
    motionStateRef.current.dragPoint = pointerPoint;
    motionStateRef.current.lastTimestamp = null;
    motionStateRef.current.returnFrom = null;
    motionStateRef.current.returnStartedAt = null;
    motionStateRef.current.returnTargetDistance = null;
    motionStateRef.current.returnTo = null;

    setSatelliteTransform(pointerPoint);
  }

  function handlePointerMove(event: ReactPointerEvent<SVGGElement>) {
    if (!isInteractive) {
      return;
    }

    if (
      motionStateRef.current.mode !== "drag" ||
      motionStateRef.current.pointerId !== event.pointerId
    ) {
      return;
    }

    const pointerPoint = getPointFromClientPosition(event.clientX, event.clientY);

    if (!pointerPoint) {
      return;
    }

    motionStateRef.current.dragPoint = pointerPoint;
    setSatelliteTransform(pointerPoint);
  }

  function handlePointerRelease(event: ReactPointerEvent<SVGGElement>) {
    if (!isInteractive) {
      return;
    }

    if (motionStateRef.current.pointerId !== event.pointerId) {
      return;
    }

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    event.currentTarget.style.cursor = "grab";

    const orbitPathNode = orbitPathRef.current;
    const draggedPoint = motionStateRef.current.dragPoint;

    motionStateRef.current.pointerId = null;
    motionStateRef.current.dragPoint = null;

    if (!SATELLITE_ORBIT || !orbitPathNode || !draggedPoint) {
      motionStateRef.current.mode = "orbit";
      return;
    }

    const orbitLength = orbitPathNode.getTotalLength();
    const targetDistance = findClosestOrbitDistance(draggedPoint, orbitPathNode, orbitLength);
    const targetPoint = orbitPathNode.getPointAtLength(targetDistance);

    if (shouldReduceMotion) {
      motionStateRef.current.currentDistance = targetDistance;
      motionStateRef.current.lastTimestamp = null;
      motionStateRef.current.mode = "orbit";
      motionStateRef.current.returnFrom = null;
      motionStateRef.current.returnStartedAt = null;
      motionStateRef.current.returnTargetDistance = null;
      motionStateRef.current.returnTo = null;
      setSatelliteTransform({
        x: targetPoint.x,
        y: targetPoint.y,
      });
      return;
    }

    motionStateRef.current.mode = "return";
    motionStateRef.current.returnFrom = draggedPoint;
    motionStateRef.current.returnStartedAt = performance.now();
    motionStateRef.current.returnTargetDistance = targetDistance;
    motionStateRef.current.returnTo = {
      x: targetPoint.x,
      y: targetPoint.y,
    };
  }

  function handleSatelliteClick(event: ReactPointerEvent<SVGGElement>) {
    event.preventDefault();
    event.stopPropagation();
  }

  const satelliteArtwork = (
    <g style={{ filter: "drop-shadow(0 8px 16px rgba(0, 69, 139, 0.22))" }}>
      {SHOW_SATELLITE_BEAM ? (
        <g opacity="0.98" style={{ filter: "drop-shadow(0 0 16px rgba(245, 215, 4, 0.5))" }}>
          <path d="M -4.8 27.5 L 4.8 27.5 L 52 82 L -52 82 Z" fill={`url(#${beamOuterGradientId})`} />
          <path d="M -2.2 28.8 L 2.2 28.8 L 24 68 L -24 68 Z" fill={`url(#${beamInnerGradientId})`} />
        </g>
      ) : null}
      <circle cx="4" cy="6" r="28" fill="rgba(0, 69, 139, 0.16)" opacity="0.16" />
      <circle cx="0" cy="0" r="28" fill={badgeFill} stroke={badgeStroke} strokeWidth="2" />
      <rect
        x="-19"
        y="-8"
        width="11"
        height="16"
        rx="2.2"
        fill={panelFill}
        opacity="0.95"
        stroke={panelStroke}
        strokeWidth="1.6"
      />
      <rect
        x="8"
        y="-8"
        width="11"
        height="16"
        rx="2.2"
        fill={panelFill}
        opacity="0.95"
        stroke={panelStroke}
        strokeWidth="1.6"
      />
      <line x1="-8" y1="0" x2="-3" y2="0" stroke={bodyStroke} strokeWidth="1.8" />
      <line x1="3" y1="0" x2="8" y2="0" stroke={bodyStroke} strokeWidth="1.8" />
      <rect
        x="-6.5"
        y="-6"
        width="13"
        height="12"
        rx="3"
        fill={bodyFill}
        stroke={bodyStroke}
        strokeWidth="1.9"
      />
      <circle cx="0" cy="0" r="2.2" fill={accentFill} opacity="0.95" />
      <line x1="0" y1="6" x2="0" y2="14.5" stroke={antennaStroke} strokeWidth="1.8" />
      <circle cx="0" cy="16.8" r="2" fill={accentFill} />
    </g>
  );

  useEffect(() => {
    const orbitPathNode = orbitPathRef.current;

    if (!SATELLITE_ORBIT || !orbitPathNode) {
      return;
    }

    const orbitLength = orbitPathNode.getTotalLength();

    if (!motionReady) {
      const point = orbitPathNode.getPointAtLength(motionStateRef.current.currentDistance);

      setSatelliteTransform({
        x: point.x,
        y: point.y,
      });

      return;
    }

    let frameId = 0;

    const animate = (timestamp: number) => {
      const motionState = motionStateRef.current;

      if (motionState.mode === "drag" && motionState.dragPoint) {
        setSatelliteTransform(motionState.dragPoint);
        motionState.lastTimestamp = timestamp;
      } else if (
        motionState.mode === "return" &&
        motionState.returnFrom &&
        motionState.returnTo &&
        motionState.returnStartedAt !== null &&
        motionState.returnTargetDistance !== null
      ) {
        const progress = Math.min(
          (timestamp - motionState.returnStartedAt) / SATELLITE_RETURN_DURATION_MS,
          1,
        );
        const easedProgress = 1 - (1 - progress) ** 3;
        const point = {
          x:
            motionState.returnFrom.x +
            (motionState.returnTo.x - motionState.returnFrom.x) * easedProgress,
          y:
            motionState.returnFrom.y +
            (motionState.returnTo.y - motionState.returnFrom.y) * easedProgress,
        };

        setSatelliteTransform(point);

        if (progress >= 1) {
          motionState.currentDistance = motionState.returnTargetDistance;
          motionState.lastTimestamp = timestamp;
          motionState.mode = "orbit";
          motionState.returnFrom = null;
          motionState.returnStartedAt = null;
          motionState.returnTargetDistance = null;
          motionState.returnTo = null;
        }
      } else {
        if (motionState.lastTimestamp === null) {
          motionState.lastTimestamp = timestamp;
        }

        if (!shouldReduceMotion) {
          const elapsed = timestamp - motionState.lastTimestamp;
          motionState.currentDistance =
            (motionState.currentDistance + (elapsed / SATELLITE_ORBIT_DURATION_MS) * orbitLength) %
            orbitLength;
        }

        const point = orbitPathNode.getPointAtLength(motionState.currentDistance);

        setSatelliteTransform({
          x: point.x,
          y: point.y,
        });

        motionState.lastTimestamp = timestamp;
      }

      frameId = window.requestAnimationFrame(animate);
    };

    frameId = window.requestAnimationFrame(animate);

    return () => window.cancelAnimationFrame(frameId);
  }, [motionReady, shouldReduceMotion]);

  return (
    <svg
      ref={svgRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
      focusable="false"
      preserveAspectRatio="xMidYMid meet"
      viewBox={LOGO_VIEW_BOX}
    >
      {SHOW_SATELLITE_BEAM ? (
        <defs>
          <linearGradient id={beamOuterGradientId} x1="0" y1="27.5" x2="0" y2="82" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#f5d704" stopOpacity={variant === "light" ? 0.54 : 0.62} />
            <stop offset="35%" stopColor="#f5d704" stopOpacity={variant === "light" ? 0.2 : 0.24} />
            <stop offset="100%" stopColor="#f5d704" stopOpacity="0" />
          </linearGradient>
          <linearGradient id={beamInnerGradientId} x1="0" y1="28.8" x2="0" y2="68" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={variant === "light" ? "#fff2a3" : "#f5d704"} stopOpacity="0.98" />
            <stop offset="40%" stopColor={variant === "light" ? "#fff2a3" : "#f5d704"} stopOpacity={variant === "light" ? 0.38 : 0.42} />
            <stop offset="100%" stopColor={variant === "light" ? "#fff2a3" : "#f5d704"} stopOpacity="0" />
          </linearGradient>
        </defs>
      ) : null}
      {SATELLITE_ORBIT ? (
        <path d={SATELLITE_ORBIT.path} fill="none" ref={orbitPathRef} stroke="transparent" strokeWidth="1" />
      ) : null}
      <g
        ref={satelliteRef}
        className={cn(isInteractive ? "pointer-events-auto cursor-grab" : "pointer-events-none")}
        onClick={handleSatelliteClick}
        onPointerCancel={handlePointerRelease}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerRelease}
        style={{ touchAction: "none" }}
      >
        {satelliteArtwork}
      </g>
    </svg>
  );
}

export function BrandMark({
  className,
  satelliteMode = "none",
  variant = "default",
}: BrandMarkProps) {
  return (
    <div className={cn("relative inline-flex w-full", className)}>
      <img
        src={lampataLogo}
        alt="Lampata"
        className="h-auto w-full"
        style={variant === "light" ? { filter: "brightness(0) invert(1)" } : undefined}
      />
      {satelliteMode === "orbit" ? <OrbitingSatellite variant={variant} /> : null}
    </div>
  );
}
