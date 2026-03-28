import { useEffect, useRef, useState } from "react";
import { withBasePath } from "../lib/paths";

const RADAR_EMBED_SRC = withBasePath("/space-tech-radar/index.html");
const RADAR_SUBTITLE_HTML =
  'Lampata are proud maintainers of the Earth Observation Tech Radar. It tracks the open-source tools, standards, and practices shaping downstream earth observation science, analytics, and applied delivery. <a href="https://github.com/sunnydean/space-tech-radar" target="_blank" rel="noreferrer noopener">View the GitHub repository</a>.';
const RADAR_STYLE_OVERRIDES = `
  :root {
    --bg: transparent;
    --ink: #00458b;
    --muted: rgba(0, 69, 139, 0.72);
    --line: rgba(0, 69, 139, 0.12);
    --accent: #00458b;
    --core-color: #00458b;
    --focus-ring: rgba(245, 215, 4, 0.56);
    --ring-stroke: rgba(0, 69, 139, 0.22);
    --axis-stroke: rgba(0, 69, 139, 0.3);
    --ring-label-fill: #00458b;
    --ring-label-stroke: #ffffff;
    --popup-border: rgba(0, 69, 139, 0.14);
    --popup-bg: rgba(255, 255, 255, 0.98);
    --popup-shadow: 0 18px 34px rgba(0, 69, 139, 0.14);
    --popup-meta: rgba(0, 69, 139, 0.72);
    --mode-btn-border: rgba(0, 69, 139, 0.18);
    --mode-btn-bg1: rgba(255, 255, 255, 0.98);
    --mode-btn-bg2: rgba(245, 247, 250, 0.98);
    --mode-btn-color: #00458b;
    --mode-btn-hover-color: #00376f;
    --mode-btn-shadow: 0 10px 26px rgba(0, 69, 139, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.82);
    --beam-col-start: rgba(245, 215, 4, 0.08);
    --beam-col-mid: rgba(245, 215, 4, 0.7);
    --beam-col-end: rgba(245, 215, 4, 0.08);
    --beam-glow: rgba(245, 215, 4, 0.28);
  }

  html,
  body {
    color: var(--ink);
    background: transparent;
  }

  .wrap {
    max-width: none;
    padding: 1.05rem 1.25rem 3.2rem;
  }

  header {
    margin-bottom: 1.15rem;
  }

  #radar-title,
  .quad-title,
  .core-title,
  .story h2,
  .quadrant-details h2 {
    font-family: "Space Grotesk", "Public Sans", sans-serif;
  }

  #radar-subtitle,
  .quad-entry,
  .story,
  .meta,
  .quadrant-description {
    font-family: "Space Grotesk", "Public Sans", sans-serif;
  }

  #radar-title {
    font-size: clamp(2.45rem, 4.7vw, 4.55rem);
    line-height: 0.94;
    letter-spacing: -0.05em;
    white-space: nowrap;
    gap: 0.28rem;
  }

  #radar-title > span:last-child {
    white-space: nowrap;
  }

  #radar-subtitle {
    max-width: 60rem;
    margin: 1rem auto 0;
    font-size: clamp(1.08rem, 1.28vw, 1.3rem);
    font-weight: 600;
    line-height: 1.72;
    letter-spacing: -0.01em;
    color: rgba(0, 69, 139, 0.86);
  }

  #radar-subtitle a {
    color: #00458b;
    font-weight: 800;
    text-decoration: underline;
    text-decoration-color: rgba(245, 215, 4, 0.9);
    text-underline-offset: 0.18em;
  }

  .mode-word-toggle {
    appearance: none;
    -webkit-appearance: none;
    border: 0;
    border-radius: 0;
    background: transparent;
    padding: 0;
    min-width: 0;
    color: inherit;
    opacity: 1;
    font-weight: 800;
    pointer-events: none;
    cursor: default;
    box-shadow: none;
    -webkit-text-fill-color: currentColor;
  }

  .mode-word-toggle:hover,
  .mode-word-toggle:focus-visible,
  .mode-word-toggle:active {
    transform: none;
    color: inherit;
    border-color: transparent;
    background: transparent;
    box-shadow: none;
  }

  .mode-word-toggle:disabled {
    opacity: 1;
    color: inherit;
    -webkit-text-fill-color: currentColor;
  }

  .mode-visual {
    display: none !important;
  }

  .mode-switch {
    gap: 0.34rem;
    margin-right: 0;
  }
`;

function applyRadarOverrides(iframe: HTMLIFrameElement) {
  const iframeDocument = iframe.contentDocument;

  if (!iframeDocument?.head) {
    return null;
  }

  let styleElement = iframeDocument.getElementById("lampata-radar-overrides");

  if (!styleElement) {
    styleElement = iframeDocument.createElement("style");
    styleElement.id = "lampata-radar-overrides";
    styleElement.textContent = RADAR_STYLE_OVERRIDES;
    iframeDocument.head.appendChild(styleElement);
  }

  const radarSubtitle = iframeDocument.getElementById("radar-subtitle");
  const toggleWordButton = iframeDocument.getElementById("mode-toggle") as HTMLButtonElement | null;
  const toggleVisualButton = iframeDocument.getElementById("mode-visual") as HTMLButtonElement | null;

  if (radarSubtitle) {
    radarSubtitle.innerHTML = RADAR_SUBTITLE_HTML;
  }

  if (toggleWordButton) {
    toggleWordButton.disabled = true;
    toggleWordButton.setAttribute("aria-disabled", "true");
    toggleWordButton.setAttribute("tabindex", "-1");
  }

  if (toggleVisualButton) {
    toggleVisualButton.disabled = true;
    toggleVisualButton.setAttribute("aria-disabled", "true");
    toggleVisualButton.setAttribute("tabindex", "-1");
  }

  return iframeDocument;
}

export function RadarEmbed() {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [frameHeight, setFrameHeight] = useState(1580);

  useEffect(() => {
    const iframe = iframeRef.current;

    if (!iframe) {
      return;
    }

    let frame: number | null = null;
    let resizeObserver: ResizeObserver | null = null;
    let mutationObserver: MutationObserver | null = null;

    const syncHeight = () => {
      const iframeDocument = iframe.contentDocument;

      if (!iframeDocument) {
        return;
      }

      const nextHeight = Math.max(
        iframeDocument.body?.scrollHeight ?? 0,
        iframeDocument.documentElement?.scrollHeight ?? 0,
      );

      if (nextHeight > 0) {
        setFrameHeight(nextHeight + 18);
      }
    };

    const setupFrame = () => {
      const iframeDocument = applyRadarOverrides(iframe);

      if (!iframeDocument?.body) {
        frame = window.requestAnimationFrame(setupFrame);
        return;
      }

      syncHeight();

      resizeObserver = new ResizeObserver(syncHeight);
      resizeObserver.observe(iframeDocument.body);

      mutationObserver = new MutationObserver(syncHeight);
      mutationObserver.observe(iframeDocument.body, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true,
      });
    };

    const handleLoad = () => {
      if (frame !== null) {
        window.cancelAnimationFrame(frame);
      }
      frame = window.requestAnimationFrame(setupFrame);
    };

    iframe.addEventListener("load", handleLoad);
    handleLoad();

    return () => {
      iframe.removeEventListener("load", handleLoad);
      if (frame !== null) {
        window.cancelAnimationFrame(frame);
      }
      resizeObserver?.disconnect();
      mutationObserver?.disconnect();
    };
  }, []);

  return (
    <iframe
      ref={iframeRef}
      title="Earth Observation Tech Radar"
      src={RADAR_EMBED_SRC}
      className="block w-full border-0 bg-transparent"
      style={{ height: `${frameHeight}px` }}
    />
  );
}
