import Spotlight from './components/Spotlight';
import SmoothScroll from './components/SmoothScroll';
import ScrollProgress from './components/ScrollProgress';
import SectionDots from './components/SectionDots';
import MobileDock from './components/MobileDock';
import PageLoader from './components/PageLoader';
import HeroSection from './sections/HeroSection';
import SkillsSection from './sections/SkillsSection';
import AboutSection from './sections/AboutSection';
import EducationSection from './sections/EducationSection';
import ProjectsSection from './sections/ProjectsSection';
import Footer from './sections/Footer';

function App() {
  return (
    <>
      <PageLoader />
      <SmoothScroll />
      <ScrollProgress />
      <SectionDots />
      <MobileDock />
      <main style={{ overflowX: 'clip', background: '#0A0E16' }} className="font-display">
        <Spotlight />
        <div id="hero">
          <HeroSection />
        </div>
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <Footer />
      </main>
    </>
  );
}

export default App
