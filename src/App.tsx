import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import Services from "./components/Services"
function App() {
 
  return (
    <div className="App w-full flex flex-col snap-x scroll-smooth">
      <div className="bg-slate-900 w-full">
      <NavBar />
      </div>
      <div className="w-full flex flex-col scroll-smooth snap-x">
      <Home />
      <About />
      <Services />
      <Contact />
      </div>
    </div>
  )
}

export default App
