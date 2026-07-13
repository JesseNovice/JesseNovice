import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import AuditIncludes from "./components/AuditIncludes";
import WhoThisIsFor from "./components/WhoThisIsFor";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import FinalCta from "./components/FinalCta";
import Footer from "./components/Footer";
import StickyMobileCta from "./components/StickyMobileCta";

function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <AuditIncludes />
        <WhoThisIsFor />
        <HowItWorks />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <StickyMobileCta />
    </div>
  );
}

export default App;
