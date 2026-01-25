import Navbar from "./components/Navbar"
import AboutMe from "./Page/AboutMe"
import Projects from "./components/Projects"
import Contact from "./Page/Contact"

function App() {
  return (
    <div
      className="
        min-h-screen
        bg-[radial-gradient(circle_at_top,rgba(210,190,160,0.35),transparent_60%),linear-gradient(180deg,#f6f1eb_0%,#efe6dd_100%)]
        text-[#3f3a32]">

      <Navbar />

      <main className="pt-[120px]">
        <AboutMe />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
