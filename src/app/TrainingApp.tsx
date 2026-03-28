import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Cloud,
  Cpu,
  ExternalLink,
  FlaskConical,
  GraduationCap,
  MonitorPlay,
  UsersRound,
  Video,
} from "lucide-react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { SectionIntro } from "./components/SectionIntro";
import { TrainingRoadmap } from "./components/TrainingRoadmap";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import {
  trainingEvents,
  trainingFormats,
  trainingRoadmapCourse,
  trainingTracks,
  trainingVideos,
} from "./content/siteContent";

const trackIcons = [BookOpen, Cpu, FlaskConical, Cloud];
const formatIcons = [UsersRound, MonitorPlay, GraduationCap];

export default function TrainingApp() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    audience: "",
    preferredFormat: "Private workshop",
    preferredTiming: "",
    goals: "",
  });

  const upcomingEvents = trainingEvents.filter((event) => event.status === "upcoming");
  const pastEvents = trainingEvents.filter((event) => event.status === "past");

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subjectSource = formData.organization || formData.name || "New enquiry";
    const subject = `Lampata training enquiry - ${subjectSource}`;
    const body = [
      `Name: ${formData.name || "Not provided"}`,
      `Organization: ${formData.organization || "Not provided"}`,
      `Email: ${formData.email || "Not provided"}`,
      `Team or audience: ${formData.audience || "Not provided"}`,
      `Preferred format: ${formData.preferredFormat || "Not provided"}`,
      `Preferred timing: ${formData.preferredTiming || "Not provided"}`,
      "",
      "Training goals / topics:",
      formData.goals || "Not provided",
    ].join("\n");

    window.location.href = `mailto:contact@lampata.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <div className="site-shell min-h-screen bg-background">
      <Header />
      <main className="bg-white pt-28">
        <section className="relative overflow-hidden px-6 pb-22 pt-10 md:pt-16">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute left-[8%] top-16 h-52 w-52 rounded-full bg-[#f5d704]/18 blur-3xl" />
            <div className="absolute right-[6%] top-10 h-64 w-64 rounded-full bg-[#00458b]/9 blur-3xl" />
            <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(0,69,139,0.16),transparent)]" />
          </div>

          <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.95fr]">
            <div className="max-w-2xl">
              <p className="section-eyebrow">Training</p>
              <h1
                className="mt-5 font-display leading-[0.94] tracking-[-0.07em] text-[#00458b]"
                style={{ fontSize: "clamp(2.9rem, 6vw, 5.4rem)" }}
              >
                Learning Geo-spatial AI & Earth Observation
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-[#00458b]/74 md:text-[1.15rem]">
                Practical training for teams working across earth observation, FAIR and
                open science, geo-spatial AI, and cloud-native delivery. Designed for
                researchers, analysts, and engineering teams who need usable workflows,
                not abstract theory.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#request-training"
                  className="brand-gold-button inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-semibold transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Request training
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#training-videos"
                  className="inline-flex items-center gap-2 rounded-full border border-[#00458b]/14 bg-white px-6 py-3.5 font-semibold text-[#00458b] transition-colors duration-200 hover:border-[#00458b] hover:bg-[#f5d704]/12"
                >
                  Browse past sessions
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {["Private team workshops", "Live online delivery", "EO + FAIR workflows"].map((item) => (
                  <span key={item} className="tag-mono text-[#00458b]/78">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="panel-surface relative overflow-hidden rounded-[1rem] p-8">
              <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-[1.25rem] bg-[#f5d704]/18" />
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#00458b]/52">
                Training focus
              </p>
              <h2 className="mt-4 font-display text-[2rem] leading-tight tracking-[-0.05em] text-[#00458b]">
                A compact curriculum built for working teams.
              </h2>
              <p className="mt-4 max-w-lg text-base leading-7 text-[#00458b]/72">
                The Lampata approach borrows from workshop-first training programs: clear
                tracks, practical outcomes, and material shaped around how teams actually
                work with geo-spatial data and earth observation systems.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {trainingTracks.map((track, index) => {
                  const Icon = trackIcons[index];

                  return (
                    <div
                      key={track.title}
                      className="rounded-[0.9rem] border border-[#00458b]/9 bg-[#f8fbff] p-4"
                    >
                      <div className="brand-gold-fill mb-4 flex h-11 w-11 items-center justify-center rounded-xl text-[#00458b]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-display text-lg leading-tight tracking-[-0.04em] text-[#00458b]">
                        {track.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-[#00458b]/68">
                        {track.audience}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-22">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              eyebrow="Curriculum"
              title="Four tracks teams can combine into a focused learning program."
              description="Each track is designed to stand on its own or work as part of a tailored program, depending on whether your team needs a foundation, a workflow deep dive, or a delivery-focused training arc."
            />

            <div className="grid gap-6 lg:grid-cols-2">
              {trainingTracks.map((track, index) => {
                const Icon = trackIcons[index];

                return (
                  <article
                    key={track.title}
                    className="panel-surface card-accent rounded-[0.9rem] p-7"
                  >
                    <div className="flex items-start gap-4">
                      <div className="brand-gold-fill mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-[#00458b]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#00458b]/48">
                          {track.audience}
                        </p>
                        <h3 className="mt-2 font-display text-[1.7rem] leading-tight tracking-[-0.05em] text-[#00458b]">
                          {track.title}
                        </h3>
                        <p className="mt-3 text-base leading-7 text-[#00458b]/74">
                          {track.purpose}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 grid gap-2">
                      {track.topics.map((topic) => (
                        <div
                          key={topic}
                          className="brand-gold-border-left border-l-2 pl-3 text-sm leading-6 text-[#00458b]/76"
                        >
                          {topic}
                        </div>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#f8fbff] px-6 py-22">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              eyebrow="Delivery Formats"
              title="Training formats that match how teams actually learn and implement."
              description="Lampata training can be delivered as a single workshop, a live online session series, or a tailored program tied to a project, capability uplift, or internal adoption effort."
            />

            <div className="grid gap-6 md:grid-cols-3">
              {trainingFormats.map((format, index) => {
                const Icon = formatIcons[index];

                return (
                  <article
                    key={format.title}
                    className="panel-surface rounded-[0.9rem] p-7"
                  >
                    <div className="brand-gold-fill mb-5 flex h-12 w-12 items-center justify-center rounded-xl text-[#00458b]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-[1.5rem] leading-tight tracking-[-0.05em] text-[#00458b]">
                      {format.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-[#00458b]/74">
                      {format.description}
                    </p>
                    <p className="mt-4 text-sm font-medium leading-6 text-[#00458b]/58">
                      {format.note}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-22">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <h2 className="font-display text-[clamp(2.3rem,4.6vw,4.4rem)] leading-[0.95] tracking-[-0.06em] text-[#00458b]">
                GeoSpatial Data Science Training Roadmap
              </h2>
            </div>

            <TrainingRoadmap course={trainingRoadmapCourse} />
          </div>
        </section>

        <section id="training-videos" className="bg-white px-6 py-22">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              eyebrow="Video Catalog"
              title="Recorded sessions from Lampata team members and related public talks."
              description="A small catalog of past training and conference sessions that show how Lampata teaches FAIR workflows, EarthCODE, and practical earth observation delivery."
            />

            <div className="grid gap-8 lg:grid-cols-2">
              {trainingVideos.map((video) => (
                <article
                  key={video.url}
                  className="panel-surface overflow-hidden rounded-[1rem]"
                >
                  <div className="overflow-hidden border-b border-[#00458b]/8">
                    <ImageWithFallback
                      src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                      alt={video.title}
                      className="h-[248px] w-full object-cover"
                    />
                  </div>
                  <div className="p-7">
                    <div className="mb-4 flex flex-wrap gap-2">
                      <span className="tag-mono text-[#00458b]/82">{video.source}</span>
                      <span className="tag-mono text-[#00458b]/82">{video.date}</span>
                    </div>
                    <h3 className="font-display text-[1.8rem] leading-tight tracking-[-0.05em] text-[#00458b]">
                      {video.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-[#00458b]/74">
                      {video.summary}
                    </p>
                    <a
                      href={video.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#00458b] transition-opacity hover:opacity-72"
                    >
                      Watch on YouTube
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f8fbff] px-6 py-22">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              eyebrow="Events"
              title="Past and upcoming training sessions."
              description="Upcoming sessions can be used as a starting point for a request, while past events give a sense of the topics, formats, and audiences Lampata has already taught."
            />

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="panel-surface rounded-[1rem] p-7">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#00458b]/52">
                      Upcoming
                    </p>
                    <h3 className="mt-2 font-display text-[1.8rem] tracking-[-0.05em] text-[#00458b]">
                      Bookable sessions
                    </h3>
                  </div>
                  <div className="brand-gold-fill flex h-12 w-12 items-center justify-center rounded-xl text-[#00458b]">
                    <CalendarDays className="h-5 w-5" />
                  </div>
                </div>

                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <article
                      key={`${event.title}-${event.date}`}
                      className="rounded-[0.9rem] border border-[#00458b]/9 bg-white p-5"
                    >
                      <div className="mb-3 flex flex-wrap gap-2">
                        <span className="tag-mono text-[#00458b]/82">{event.date}</span>
                        <span className="tag-mono text-[#00458b]/82">{event.format}</span>
                      </div>
                      <h4 className="font-display text-[1.3rem] leading-tight tracking-[-0.04em] text-[#00458b]">
                        {event.title}
                      </h4>
                      {event.link ? (
                        <a
                          href={event.link}
                          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#00458b] transition-opacity hover:opacity-72"
                        >
                          Request this training
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      ) : null}
                    </article>
                  ))}
                </div>
              </div>

              <div className="panel-surface rounded-[1rem] p-7">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#00458b]/52">
                      Past
                    </p>
                    <h3 className="mt-2 font-display text-[1.8rem] tracking-[-0.05em] text-[#00458b]">
                      Delivered sessions
                    </h3>
                  </div>
                  <div className="brand-gold-fill flex h-12 w-12 items-center justify-center rounded-xl text-[#00458b]">
                    <Video className="h-5 w-5" />
                  </div>
                </div>

                <div className="space-y-4">
                  {pastEvents.map((event) => {
                    const isExternal = Boolean(event.link?.startsWith("http"));

                    return (
                      <article
                        key={`${event.title}-${event.date}`}
                        className="rounded-[0.9rem] border border-[#00458b]/9 bg-white p-5"
                      >
                        <div className="mb-3 flex flex-wrap gap-2">
                          <span className="tag-mono text-[#00458b]/82">{event.date}</span>
                          <span className="tag-mono text-[#00458b]/82">{event.format}</span>
                        </div>
                        <h4 className="font-display text-[1.3rem] leading-tight tracking-[-0.04em] text-[#00458b]">
                          {event.title}
                        </h4>
                        {event.link ? (
                          <a
                            href={event.link}
                            target={isExternal ? "_blank" : undefined}
                            rel={isExternal ? "noreferrer" : undefined}
                            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#00458b] transition-opacity hover:opacity-72"
                          >
                            View reference
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        ) : (
                          <p className="mt-4 text-sm leading-6 text-[#00458b]/56">
                            Delivered as a private Lampata training session.
                          </p>
                        )}
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="request-training" className="bg-white px-6 py-22">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
              <div className="panel-surface rounded-[1rem] p-8">
                <p className="section-eyebrow">Request Training</p>
                <h2 className="mt-5 font-display text-[clamp(2.2rem,4.4vw,4rem)] leading-[0.96] tracking-[-0.06em] text-[#00458b]">
                  Bring a team, a topic, or a capability gap.
                </h2>
                <p className="mt-5 max-w-lg text-base leading-8 text-[#00458b]/72">
                  Lampata can shape training around your workflows, your team, and the
                  tools you are already using. A short note is enough to start the
                  conversation.
                </p>

                <div className="mt-8 space-y-3">
                  {[
                    "Who the training is for and how technical the audience is",
                    "Which topics matter most right now",
                    "Whether you prefer online, in-person, or a hybrid format",
                  ].map((item) => (
                    <div
                      key={item}
                      className="brand-gold-border-left border-l-2 pl-3 text-sm leading-6 text-[#00458b]/74"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <a
                  href="mailto:contact@lampata.com"
                  className="mt-8 inline-flex items-center gap-2 text-lg font-semibold text-[#00458b] transition-opacity hover:opacity-72"
                >
                  contact@lampata.com
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              <div className="panel-surface rounded-[1rem] p-8">
                <form onSubmit={handleSubmit}>
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

                  <div className="mt-5 grid gap-5 md:grid-cols-2">
                    <label className="flex flex-col gap-1.5 text-sm text-[#00458b]/80">
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

                    <label className="flex flex-col gap-1.5 text-sm text-[#00458b]/80">
                      Team or audience
                      <input
                        name="audience"
                        value={formData.audience}
                        onChange={handleChange}
                        placeholder="Analysts, researchers, engineering team..."
                        className="rounded-[0.5rem] border border-[#00458b]/12 bg-[#f5f7fa] px-4 py-3 text-[#00458b] placeholder:text-[#00458b]/35 focus:border-[#00458b]/30 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#00458b]/8"
                      />
                    </label>
                  </div>

                  <div className="mt-5 grid gap-5 md:grid-cols-2">
                    <label className="flex flex-col gap-1.5 text-sm text-[#00458b]/80">
                      Preferred format
                      <select
                        name="preferredFormat"
                        value={formData.preferredFormat}
                        onChange={handleChange}
                        className="rounded-[0.5rem] border border-[#00458b]/12 bg-[#f5f7fa] px-4 py-3 text-[#00458b] focus:border-[#00458b]/30 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#00458b]/8"
                      >
                        <option>Private workshop</option>
                        <option>Live online session</option>
                        <option>Multi-session program</option>
                        <option>Hybrid or flexible</option>
                      </select>
                    </label>

                    <label className="flex flex-col gap-1.5 text-sm text-[#00458b]/80">
                      Preferred timing
                      <input
                        name="preferredTiming"
                        value={formData.preferredTiming}
                        onChange={handleChange}
                        placeholder="e.g. Q4 2026 or September"
                        className="rounded-[0.5rem] border border-[#00458b]/12 bg-[#f5f7fa] px-4 py-3 text-[#00458b] placeholder:text-[#00458b]/35 focus:border-[#00458b]/30 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#00458b]/8"
                      />
                    </label>
                  </div>

                  <label className="mt-5 flex flex-col gap-1.5 text-sm text-[#00458b]/80">
                    Training goals / topics
                    <textarea
                      name="goals"
                      value={formData.goals}
                      onChange={handleChange}
                      placeholder="Tell us what the team needs to learn, deliver, or understand better."
                      rows={7}
                      className="rounded-[0.5rem] border border-[#00458b]/12 bg-[#f5f7fa] px-4 py-3 text-[#00458b] placeholder:text-[#00458b]/35 focus:border-[#00458b]/30 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#00458b]/8"
                    />
                  </label>

                  <div className="mt-6 flex flex-col gap-4 border-t border-[#00458b]/8 pt-6 md:flex-row md:items-center md:justify-between">
                    <p className="max-w-sm text-sm leading-6 text-[#00458b]/55">
                      Submitting opens your email client with a prefilled training request.
                    </p>
                    <button
                      type="submit"
                      className="brand-gold-button inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-semibold transition-transform duration-200 hover:-translate-y-0.5"
                    >
                      Request training
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
