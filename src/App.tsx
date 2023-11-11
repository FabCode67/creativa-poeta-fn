import About from "./components/About"
// import Contact from "./components/Contact"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import Services from "./components/Services"
import Faq from "./components/Faq"
// import Parteners from "./components/Parteners"
import Footer from "./components/Footer"
import MainFooter from "./components/MainFooter"
import Projects from "./components/Projects"
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