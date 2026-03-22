import Navigation from './components/Navigation';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

import Background from './components/Background';
import { AppContainer, ContentWrapper, MainContent } from './styles/AppStyles';

function App() {
  return (
    <AppContainer>
      <Background />
      <ContentWrapper>
        <Navigation />
        <MainContent>
          <Hero />
          <AboutSection />
          <ProjectsSection />
          <ExperienceSection />
          <SkillsSection />
          <ContactSection />
          <Footer />
        </MainContent>

      </ContentWrapper>
    </AppContainer>
  );
}

export default App;