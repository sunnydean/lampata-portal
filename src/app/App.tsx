import { lazy } from "react";
import { AudienceSection } from "./components/AudienceSection";
import { CaseStudies } from "./components/CaseStudies";
import { DeferredSection } from "./components/DeferredSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { TechStackSection } from "./components/TechStackSection";

const EarthcodeSection = lazy(() =>
  import("./components/EarthcodeSection").then((module) => ({
    default: module.EarthcodeSection,
  })),
);

const DeferredOpenScience = lazy(() =>
  import("./components/OpenScience").then((module) => ({
    default: module.OpenScience,
  })),
);

const DeferredContact = lazy(() =>
  import("./components/Contact").then((module) => ({
    default: module.Contact,
  })),
);

export default function App() {
  return (
    <div className="site-shell min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <AudienceSection />
        <TechStackSection />
        <CaseStudies />
        <DeferredSection
          sectionId="earthcode"
          component={EarthcodeSection}
          placeholderClassName="px-6 pb-[4.5rem] pt-8 md:pb-28 md:pt-0 lg:pb-32 lg:pt-2"
          fallbackClassName="h-[26rem] md:h-[34rem]"
        />
        <DeferredSection
          sectionId="open-science"
          component={DeferredOpenScience}
          placeholderClassName="bg-white px-6 py-[4.5rem] md:py-24"
          fallbackClassName="h-[36rem] md:h-[40rem]"
        />
        <DeferredSection
          sectionId="contact"
          component={DeferredContact}
          placeholderClassName="bg-white px-6 py-[4.5rem] md:py-24"
          fallbackClassName="h-[38rem] md:h-[44rem]"
        />
      </main>
      <Footer />
    </div>
  );
}
