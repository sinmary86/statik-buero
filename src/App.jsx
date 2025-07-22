import { AboutSection } from "./AboutSection/AboutSection"
import { Avantages } from "./Advantages/Avantages"
import { ContactSection } from "./ContactSection/ContactSection"
import { FooterApp } from "./Footer/Footer"
import { HowItWorks } from "./HowItWorks/HowItWorks"
import { MainSection } from "./MainSection/MainSection"
import { NavApp } from "./NavApp/NavApp"
import { Experience } from "./Projects/Experience"
import { ProjectGalery } from "./Projects/ProjectsGalery"

function App() {
 

  return (
    <>
      <div>
        
      <NavApp />
      <MainSection />
      <AboutSection />
      <Avantages />
      <ProjectGalery />
      <Experience />
      <HowItWorks />
      <ContactSection />
      <FooterApp />
    
      
      </div>
    
    </>
  )
}

export default App
