import { ArrowUpRight, Volume2 } from "lucide-react";
import { useRef, useState } from "react";
import earthcodeLogo240 from "../../assets/logos/earthcode-logo-240.webp";
import earthcodeLogo480 from "../../assets/logos/earthcode-logo-480.webp";
import earthcodePlanet800 from "../../assets/logos/earthcodeplanet-800.webp";
import earthcodePlanet1200 from "../../assets/logos/earthcodeplanet-1200.webp";
import esaSiteLogo from "../../assets/logos/esa-site-logo.svg";
import { earthcodeSection } from "../content/homeContent";
import { Reveal } from "./Reveal";

export function EarthcodeSection() {
  const videoFrameRef = useRef<HTMLIFrameElement | null>(null);
  const [videoMuted, setVideoMuted] = useState(true);

  const videoEmbedUrl =
    typeof window === "undefined"
      ? earthcodeSection.video.embedUrl
      : `${earthcodeSection.video.embedUrl}&origin=${encodeURIComponent(window.location.origin)}`;

  const postPlayerCommand = (command: "mute" | "playVideo" | "unMute") => {
    videoFrameRef.current?.contentWindow?.postMessage(
      JSON.stringify({
        event: "command",
        func: command,
        args: [],
      }),
      "https://www.youtube-nocookie.com",
    );
  };

  const handleVideoLoad = () => {
    postPlayerCommand("mute");
    postPlayerCommand("playVideo");
  };

  const handleEnableAudio = () => {
    if (!videoFrameRef.current?.contentWindow) {
      return;
    }

    postPlayerCommand("unMute");
    postPlayerCommand("playVideo");
    setVideoMuted(false);
  };

  return (
    <section
      className="earthcode-section px-6 pb-[4.5rem] pt-8 md:pb-28 md:pt-0 lg:pb-32 lg:pt-2"
    >
      <div
        aria-hidden="true"
        className="earthcode-ambient earthcode-ambient-mobile pointer-events-none absolute -right-20 top-2 z-0 h-[18rem] w-[22rem] rounded-full blur-[70px] md:hidden"
        style={{
          background:
            "radial-gradient(ellipse at 48% 40%, rgba(159, 211, 202, 0.42) 0%, rgba(159, 211, 202, 0.26) 38%, rgba(159, 211, 202, 0.1) 60%, rgba(159, 211, 202, 0) 78%)",
        }}
      />

      <div
        aria-hidden="true"
        className="earthcode-ambient earthcode-ambient-desktop earthcode-ambient-desktop-back pointer-events-none absolute right-[-7rem] top-[-0.5rem] z-0 hidden h-[24rem] w-[46rem] rounded-full blur-[140px] md:block sm:right-[-8rem] sm:top-[-1rem] sm:h-[34rem] sm:w-[64rem] lg:right-[-10rem] lg:top-[-4rem] lg:h-[50rem] lg:w-[94rem] xl:right-[-12rem] xl:top-[-5rem] xl:h-[58rem] xl:w-[108rem]"
        style={{
          background:
            "radial-gradient(ellipse at 48% 46%, rgba(159, 211, 202, 0.72) 0%, rgba(159, 211, 202, 0.62) 22%, rgba(159, 211, 202, 0.44) 42%, rgba(159, 211, 202, 0.22) 58%, rgba(159, 211, 202, 0.08) 70%, rgba(159, 211, 202, 0) 82%)",
        }}
      />

      <div
        aria-hidden="true"
        className="earthcode-ambient earthcode-ambient-desktop earthcode-ambient-desktop-front pointer-events-none absolute right-[-3rem] top-[-3rem] z-0 hidden h-[28rem] w-[56rem] rounded-full blur-[128px] md:block sm:right-[-4rem] sm:top-[-5rem] sm:h-[40rem] sm:w-[72rem] lg:right-[-5rem] lg:top-[-7rem] lg:h-[58rem] lg:w-[108rem] xl:right-[-6rem] xl:top-[-8rem] xl:h-[68rem] xl:w-[120rem]"
        style={{
          background:
            "radial-gradient(ellipse at 44% 40%, rgba(159, 211, 202, 0.74) 0%, rgba(159, 211, 202, 0.66) 18%, rgba(159, 211, 202, 0.5) 34%, rgba(159, 211, 202, 0.28) 50%, rgba(159, 211, 202, 0.12) 64%, rgba(159, 211, 202, 0.04) 74%, rgba(159, 211, 202, 0) 86%)",
        }}
      />

      <img
        src={earthcodePlanet800}
        srcSet={`${earthcodePlanet800} 800w, ${earthcodePlanet1200} 1200w`}
        sizes="304px"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        fetchPriority="low"
        className="earthcode-planet earthcode-planet-mobile pointer-events-none absolute -right-16 top-4 z-[1] w-[19rem] max-w-none mix-blend-multiply saturate-[0.82] opacity-[0.09] md:hidden"
      />

      <img
        src={earthcodePlanet1200}
        srcSet={`${earthcodePlanet800} 800w, ${earthcodePlanet1200} 1200w`}
        sizes="(max-width: 1279px) 928px, 1056px"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        fetchPriority="low"
        className="earthcode-planet earthcode-planet-desktop pointer-events-none absolute -right-14 -top-9 z-[1] hidden w-[24rem] max-w-none mix-blend-multiply saturate-[0.82] opacity-[0.14] md:block sm:-right-14 sm:-top-11 sm:w-[35rem] lg:-right-24 lg:-top-[9.5rem] lg:w-[58rem] xl:-right-28 xl:-top-[10.5rem] xl:w-[66rem]"
      />

      <div className="relative z-10 mx-auto mt-0 max-w-7xl md:mt-[-1rem] lg:mt-[-1.5rem]">
        <div className="grid gap-8 pr-4 sm:pr-10 lg:min-h-[31rem] lg:grid-cols-[minmax(0,0.92fr)_minmax(24rem,1.08fr)] lg:items-start lg:gap-8 lg:pr-0 xl:gap-10">
          <div className="max-w-4xl">
            <Reveal
              delay={40}
              className="pt-0"
            >
              <div className="mb-8 flex max-w-3xl flex-col gap-3 md:mb-14 md:gap-4">
                <Reveal
                  delay={60}
                  className="flex flex-wrap items-center gap-3 sm:gap-5"
                >
                  <span className="section-eyebrow shrink-0 text-[0.92rem] font-bold tracking-[0.16em] sm:text-[1.12rem] lg:text-[1.34rem]">
                    {earthcodeSection.eyebrow}
                  </span>
                  <img
                    src={earthcodeLogo480}
                    srcSet={`${earthcodeLogo240} 240w, ${earthcodeLogo480} 480w`}
                    sizes="(max-width: 1023px) 120px, 160px"
                    alt="EarthCODE logo"
                    loading="lazy"
                    decoding="async"
                    className="h-[2.6rem] w-auto object-contain sm:h-[3.2rem] lg:h-[4.25rem]"
                  />
                  <img
                    src={esaSiteLogo}
                    alt="ESA"
                    loading="lazy"
                    decoding="async"
                    className="h-6 w-auto object-contain [filter:brightness(0)_saturate(100%)_invert(16%)_sepia(88%)_saturate(2410%)_hue-rotate(197deg)_brightness(93%)_contrast(102%)] sm:h-7 lg:h-9"
                  />
                </Reveal>

                <h2 className="section-title max-w-4xl text-balance">
                  {earthcodeSection.title}
                </h2>
                <p className="section-copy">{earthcodeSection.description}</p>
              </div>

              <Reveal
                delay={80}
                className="mt-6 max-w-2xl md:mt-8"
              >
                <span className="yellow-rule mb-5 w-12 md:mb-6 md:w-16" />
                <p className="text-[0.98rem] leading-7 text-[#00458b]/78 sm:text-[1.08rem] sm:leading-8">
                  {earthcodeSection.leadership}
                </p>
                <a
                  href="https://opensciencedata.esa.int/catalog"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-5 inline-flex items-center gap-2.5 rounded-full border border-[#00458b]/14 bg-white/88 px-5 py-3.5 text-[0.98rem] font-semibold text-[#00458b] shadow-[0_20px_42px_-28px_rgba(0,69,139,0.34)] transition-colors hover:border-[#00458b]/28 hover:bg-white sm:px-6 sm:text-base md:mt-6"
                >
                  Check Out EarthCODE
                  <ArrowUpRight className="h-[1.05rem] w-[1.05rem]" />
                </a>
              </Reveal>
            </Reveal>
          </div>

          <Reveal
            delay={120}
            className="lg:mt-14 lg:w-full lg:max-w-[40rem] lg:justify-self-end"
          >
            <div className="relative overflow-hidden rounded-[1rem] border border-[#00458b]/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(247,251,255,0.92))] p-1.5 shadow-[0_32px_72px_-48px_rgba(0,69,139,0.28)] backdrop-blur-sm sm:p-2">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(245,215,4,0.18),rgba(255,255,255,0))]"
              />

              <div className="relative overflow-hidden rounded-[0.95rem] border border-[#00458b]/10 bg-[#eef5fb] shadow-[0_20px_48px_-28px_rgba(0,69,139,0.26)]">
                <div className="aspect-video">
                  <iframe
                    ref={videoFrameRef}
                    src={videoEmbedUrl}
                    title={earthcodeSection.video.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    onLoad={handleVideoLoad}
                    className="h-full w-full"
                  />
                </div>

                {videoMuted ? (
                  <button
                    type="button"
                    onClick={handleEnableAudio}
                    className="absolute inset-0 z-10 flex items-end justify-end bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0)_0%,rgba(255,255,255,0)_62%,rgba(0,69,139,0.08)_100%)] p-3 sm:p-4"
                    aria-label="Turn on EarthCODE video audio"
                  >
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/85 bg-white/92 text-[#00458b] shadow-[0_20px_40px_-24px_rgba(0,69,139,0.42)] backdrop-blur-sm transition-transform duration-200 hover:scale-105">
                      <Volume2 className="h-5 w-5" />
                      <span className="sr-only">Turn on audio</span>
                    </span>
                  </button>
                ) : null}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
