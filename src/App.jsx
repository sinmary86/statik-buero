import { AboutSection } from "./AboutSection/AboutSection"
import { Avantages } from "./Advantages/Avantages"
import { ContactInfo } from "./ContactsSection/ContactInfo/ContactsInfo"
import { ContactForm } from "./ContactsSection/ContactForm/ContactForm"
import { FooterApp } from "./Footer/Footer"
import { HowItWorks } from "./HowItWorks/HowItWorks"
import { MainSection } from "./MainSection/MainSection"
import { NavApp } from "./NavApp/NavApp"
import { ClientsCarousel } from "./Projects/ClientsCarousel/ClientsCarousel"
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
      <ClientsCarousel />
      <HowItWorks />
      <ContactForm />
      <ContactInfo />
      <FooterApp />
    
      
      </div>
    
    </>
  )
}

export default App
