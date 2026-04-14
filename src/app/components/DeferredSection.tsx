import { type ComponentType, type LazyExoticComponent, Suspense, useRef } from "react";
import { useOneShotIntersection } from "../hooks/useOneShotIntersection";
import { cn } from "./ui/utils";

interface DeferredSectionProps {
  fallbackClassName?: string;
  placeholderClassName?: string;
  preloadMargin?: string;
  renderMargin?: string;
  sectionClassName?: string;
  sectionId?: string;
  component: LazyExoticComponent<ComponentType>;
}

function Placeholder({
  className,
  fallbackClassName,
}: Pick<DeferredSectionProps, "placeholderClassName" | "fallbackClassName">) {
  return (
    <div className={cn("w-full", className)}>
      <div
        className={cn(
          "mx-auto max-w-7xl rounded-[1.25rem] bg-[linear-gradient(180deg,rgba(247,251,255,0.72),rgba(255,255,255,0.4))]",
          fallbackClassName,
        )}
      />
    </div>
  );
}

export function DeferredSection({
  component: Component,
  fallbackClassName,
  placeholderClassName,
  preloadMargin = "600px 0px",
  renderMargin = "180px 0px",
  sectionClassName,
  sectionId,
}: DeferredSectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const isReadyToRender = useOneShotIntersection(ref, { rootMargin: renderMargin });
  const isPreloaded = useOneShotIntersection(ref, {
    disabled: isReadyToRender,
    rootMargin: preloadMargin,
  });
  const isRequested = isPreloaded || isReadyToRender;

  return (
    <section id={sectionId} ref={ref} className={sectionClassName}>
      {isRequested ? (
        <Suspense fallback={<Placeholder className={placeholderClassName} fallbackClassName={fallbackClassName} />}>
          {isReadyToRender ? (
            <Component />
          ) : (
            <Placeholder className={placeholderClassName} fallbackClassName={fallbackClassName} />
          )}
        </Suspense>
      ) : (
        <Placeholder className={placeholderClassName} fallbackClassName={fallbackClassName} />
      )}
    </section>
  );
}
