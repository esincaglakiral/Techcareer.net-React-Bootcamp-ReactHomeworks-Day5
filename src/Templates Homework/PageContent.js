import About from "./About"
import Contact from "./Contact"
import LocationMap from "./LocationMap"
import Projects from "./Projects"
import Footer from "./Footer"


const PageContent = () => {
  return (
      <>
      <div className="w3-content" style={{ maxWidth: '1500px'}}>
       <Projects />
       <About />
       <Contact />
       <LocationMap />
       </div>
       <Footer />
       
      </>
   
  )
}

export default PageContent