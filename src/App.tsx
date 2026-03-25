import Navbar from "./components/Navbar"
import AboutMe from "./Page/AboutMe"
import Projects from "./components/Projects"
import Timeline from "./components/Timeline"
import Contact from "./Page/Contact"

function App() {
  return (
    <div
      className="
        min-h-screen
        bg-[radial-gradient(circle_at_top,rgba(210,190,160,0.35),transparent_60%),linear-gradient(180deg,#f6f1eb_0%,#efe6dd_100%)]
        text-[#3f3a32]">

      <Navbar />

      <main className="pt-[88px] px-4 sm:pt-[100px] sm:px-6 lg:px-8">
        <AboutMe />
        <Projects />
        <Timeline />
        <Contact />
      </main>
    </div>
  )
}

export default App
