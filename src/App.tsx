import Home from './components/sections/Home';
import About from './components/sections/About';
import NavBar from './components/NavBars/NavBar';
import Faq from './components/sections/Faq';
import Services from './components/sections/Services';
import Projects from './components/sections/Projects';
import Footer from './components/sections/Footer';
import MainFooter from './components/sections/MainFooter';
const App = () => {
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
        <Faq />
        <Footer />
        <MainFooter />
      </div>
    </div>

  );
};

export default App;
