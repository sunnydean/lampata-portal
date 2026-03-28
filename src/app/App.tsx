import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { AudienceSection } from "./components/AudienceSection";
import { TechStackSection } from "./components/TechStackSection";
import { CaseStudies } from "./components/CaseStudies";
import { EarthcodeSection } from "./components/EarthcodeSection";
import { OpenScience } from "./components/OpenScience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="site-shell min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <AudienceSection />
        <TechStackSection />
        <CaseStudies />
        <EarthcodeSection />
        <OpenScience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
