import { useState, useEffect, useRef } from "react" 
import Github from "../Page/Github"

function Navbar() {
  const [githubOpen, setGithubOpen] = useState(false)
  const githubRef = useRef<HTMLDivElement>(null) 
 
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (githubOpen && githubRef.current && !githubRef.current.contains(event.target as Node)) {
        setGithubOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [githubOpen])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: "smooth" })
    setGithubOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-[rgba(200,180,150,0.4)] shadow-[0_10px_30px_rgba(120,100,70,0.12)]">
      <nav className="max-w-[1100px] mx-auto px-8 py-6 flex items-center justify-between">
        <div className="text-[12px] font-semibold tracking-[0.35em] uppercase">
          Emilia Eriksson
         
          <span className="ml-1 text-[#9c8b6a] animate-cursor font-bold">_</span>
        </div>

        <div className="flex gap-6 items-center">
          {[
            { id: "about", label: "About" },
            { id: "projects", label: "Projects" },
            { id: "contact", label: "Contact" },
          ].map(link => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="px-4 py-2 rounded-xl text-[10px] uppercase tracking-[0.4em] text-[#5f584f] transition-all duration-200 hover:text-[#3f3a32] hover:bg-[rgba(200,180,150,0.25)] hover:shadow-[0_8px_25_rgba(120,100,70,0.2)] hover:-translate-y-[1px]"
            >
              {link.label}
            </button>
          ))}

          <div className="relative" ref={githubRef}>
            <button
              onClick={() => setGithubOpen(prev => !prev)}
              className="px-4 py-2 rounded-xl text-[10px] uppercase tracking-[0.4em] text-[#5f584f] transition-all duration-200 hover:text-[#3f3a32] hover:bg-[rgba(200,180,150,0.25)] hover:shadow-[0_8px_25_rgba(120,100,70,0.2)] hover:-translate-y-[1px]"
            >
              GitHub
            </button>

            {githubOpen && <Github />}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar