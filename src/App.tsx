import About from "./components/sections/About"
// import Contact from "./components/Contact"
import Home from "./components/sections/Home"
import NavBar from "./components/NavBars/NavBar"
import Services from "./components/sections/Services"
import Faq from "./components/sections/Faq"
// import Parteners from "./components/Parteners"
import Footer from "./components/sections/Footer"
import MainFooter from "./components/sections/MainFooter"
import Projects from "./components/sections/Projects"
function  App() {
  return (
    <div className="App w-full flex flex-col snap-x scroll-smooth">
      <div className="w-full ml-6 right-2 left flex justify-end">
        <NavBar />
      </div>
      <div className="w-full flex flex-col scroll-smooth snap-x">
        <Home />
        <About />
        <Services />
        <Projects />
        {/* <Parteners /> */}
        <Faq />
        {/* <Contact /> */}
        <Footer />
          <MainFooter />
      </div>
    </div>
  );
}

export default App;