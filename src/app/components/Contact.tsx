import type { ChangeEvent, FormEvent } from "react";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { ArrowRight, ExternalLink, Mail, MapPin } from "lucide-react";
import { Reveal } from "./Reveal";

const OfficeMap = lazy(() =>
  import("./OfficeMap").then((module) => ({ default: module.OfficeMap })),
);

export function Contact() {
  const mapSlotRef = useRef<HTMLDivElement | null>(null);
  const officeLatitude = 52.203402467982464;
  const officeLongitude = 0.13190011440690916;
  const officeAddress =
    "Lampata, Wellington House, East Road, Cambridge, England, CB1 1BH";
  const formattedCoordinatePair = `LAT ${officeLatitude.toFixed(6)}° N  |  LON ${officeLongitude.toFixed(6)}° E`;
  const openStreetMapUrl =
    `https://www.openstreetmap.org/?mlat=${officeLatitude}&mlon=${officeLongitude}#map=16/${officeLatitude}/${officeLongitude}`;
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    message: "",
  });
  const [shouldLoadMap, setShouldLoadMap] = useState(false);

  useEffect(() => {
    const mapSlot = mapSlotRef.current;

    if (!mapSlot || shouldLoadMap) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldLoadMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: "220px" },
    );

    observer.observe(mapSlot);

    return () => {
      observer.disconnect();
    };
  }, [shouldLoadMap]);

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subjectSource = formData.organization || formData.name || "New enquiry";
    const subject = `Lampata enquiry - ${subjectSource}`;
    const body = [
      `Name: ${formData.name || "Not provided"}`,
      `Organization: ${formData.organization || "Not provided"}`,
      `Email: ${formData.email || "Not provided"}`,
      "",
      "Project summary:",
      formData.message || "Not provided",
    ].join("\n");

    window.location.href = `mailto:contact@lampata.co.uk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  const mapFallback = (
    <div className="flex h-full min-h-[16rem] items-center justify-center rounded-[0.9rem] bg-[linear-gradient(145deg,rgba(0,69,139,0.05),rgba(245,215,4,0.08))] sm:min-h-[20rem] lg:min-h-[24rem]">
      <div className="flex items-center gap-3 text-sm font-semibold tracking-[0.12em] text-[#00458b]/58 uppercase">
        <span className="h-2 w-2 rounded-full bg-[#f5d704]/70" />
        Loading map
      </div>
    </div>
  );

  return (
    <section className="bg-white px-6 py-[4.5rem] md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex max-w-3xl flex-col gap-4">
          <span className="section-eyebrow">Contact</span>
          <h2 className="section-title">Get in touch</h2>
        </div>

        <div className="grid items-stretch gap-8 lg:grid-cols-[1fr_1fr]">
          <Reveal
            className="order-2 flex min-h-0 flex-col lg:order-none lg:min-h-[38rem]"
          >
            <div className="px-4 pb-3 pt-4 sm:px-6 sm:pb-4 sm:pt-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#00458b]/58">
                Office location
              </p>
            </div>
            <div
              ref={mapSlotRef}
              className="min-h-[16rem] flex-1 overflow-hidden rounded-[1rem] px-3 pb-3 sm:min-h-[20rem] lg:min-h-[28rem]"
            >
              {shouldLoadMap ? (
                <Suspense fallback={mapFallback}>
                  <OfficeMap />
                </Suspense>
              ) : (
                mapFallback
              )}
            </div>
            <div className="flex flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6">
              <div className="flex items-center gap-3 text-[#00458b]/78">
                <MapPin className="h-4 w-4 shrink-0 text-[#00458b]" />
                <p className="font-mono text-[0.82rem] font-semibold tracking-[0.08em] text-[#00458b]/84">
                  {formattedCoordinatePair}
                </p>
              </div>
              <a
                href={openStreetMapUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#00458b] transition-opacity hover:opacity-72"
              >
                Open in OpenStreetMap
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          <Reveal
            delay={80}
            className="order-1 flex min-h-0 flex-col rounded-[1.2rem] bg-white p-5 shadow-[0_28px_70px_-52px_rgba(0,69,139,0.26)] sm:p-6 lg:order-none lg:min-h-[38rem] lg:p-8"
          >
            <div className="order-2 mb-0 mt-7 space-y-5 border-t border-[#00458b]/8 pt-6 lg:order-none lg:mt-0 lg:mb-8 lg:border-t-0 lg:pt-0">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#00458b]" />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#00458b]/52">
                    Email
                  </p>
                  <a
                    href="mailto:contact@lampata.co.uk"
                    className="mt-1 inline-flex items-center gap-2 text-lg font-semibold text-[#00458b] transition-opacity hover:opacity-72"
                  >
                    contact@lampata.co.uk
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#00458b]" />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#00458b]/52">
                    Office
                  </p>
                  <p className="mt-1 font-mono text-[0.94rem] tracking-[0.08em] text-[#00458b]/78">
                    {officeAddress}
                  </p>
                </div>
              </div>
            </div>

            <Reveal
              as="form"
              delay={140}
              onSubmit={handleSubmit}
              className="order-1 flex flex-1 flex-col lg:order-none"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <label className="flex flex-col gap-1.5 text-sm text-[#00458b]/80">
                  Name
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="rounded-[0.5rem] border border-[#00458b]/12 bg-[#f5f7fa] px-4 py-3 text-[#00458b] placeholder:text-[#00458b]/35 focus:border-[#00458b]/30 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#00458b]/8"
                  />
                </label>

                <label className="flex flex-col gap-1.5 text-sm text-[#00458b]/80">
                  Organization
                  <input
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="Organization or team"
                    className="rounded-[0.5rem] border border-[#00458b]/12 bg-[#f5f7fa] px-4 py-3 text-[#00458b] placeholder:text-[#00458b]/35 focus:border-[#00458b]/30 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#00458b]/8"
                  />
                </label>
              </div>

              <label className="mt-5 flex flex-col gap-1.5 text-sm text-[#00458b]/80">
                Email
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@organization.com"
                  className="rounded-[0.5rem] border border-[#00458b]/12 bg-[#f5f7fa] px-4 py-3 text-[#00458b] placeholder:text-[#00458b]/35 focus:border-[#00458b]/30 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#00458b]/8"
                />
              </label>

              <label className="mt-5 flex flex-col gap-1.5 text-sm text-[#00458b]/80">
                Message
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us what you're working on."
                  rows={6}
                  className="rounded-[0.5rem] border border-[#00458b]/12 bg-[#f5f7fa] px-4 py-3 text-[#00458b] placeholder:text-[#00458b]/35 focus:border-[#00458b]/30 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#00458b]/8"
                />
              </label>

              <div className="mt-auto flex flex-col gap-4 border-t border-[#00458b]/8 pt-6 md:flex-row md:items-center md:justify-between">
                <p className="max-w-xs text-sm leading-6 text-[#00458b]/55">
                  Submitting opens your email client with a prefilled message.
                </p>
                <button
                  type="submit"
                  className="brand-gold-button inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-semibold transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Send message
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </Reveal>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
