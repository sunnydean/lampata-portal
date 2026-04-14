import {
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type ElementType,
  type ReactNode,
  useRef,
} from "react";
import { useOneShotIntersection } from "../hooks/useOneShotIntersection";
import { cn } from "./ui/utils";

type RevealProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
  delay?: number;
  rootMargin?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function Reveal<T extends ElementType = "div">({
  as: Component = "div",
  children,
  className,
  delay = 0,
  rootMargin = "-120px",
  ...rest
}: RevealProps<T>) {
  const ref = useRef<HTMLElement | null>(null);
  const isVisible = useOneShotIntersection(ref, { rootMargin });

  return (
    <Component
      ref={ref as never}
      className={cn("reveal", isVisible && "reveal-visible", className)}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
      {...rest}
    >
      {children}
    </Component>
  );
}
