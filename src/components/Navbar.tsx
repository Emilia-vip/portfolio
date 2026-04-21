import { useState, useEffect, useRef } from "react" 
import Github from "../Page/Github"

function Navbar() {
  const [githubOpen, setGithubOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const githubRef = useRef<HTMLDivElement>(null)
 
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (githubOpen && githubRef.current && !githubRef.current.contains(event.target as Node)) {
        setGithubOpen(false)
      }
      if (mobileOpen && !(event.target as Element).closest("#mobile-menu") && !(event.target as Element).closest("#hamburger")) {
        setMobileOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [githubOpen, mobileOpen])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: "smooth" })
    setGithubOpen(false)
    setMobileOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#f6f2ea] border-b border-[rgba(200,180,150,0.55)] shadow-[0_10px_30px_rgba(120,100,70,0.14)]">
      <nav className="max-w-[1100px] mx-auto px-4 sm:px-6 py-3 md:py-4 flex items-center justify-between">
        <div className="text-[10px] sm:text-[12px] font-semibold tracking-[0.3em] sm:tracking-[0.35em] uppercase">
          Emilia Eriksson
          <span className="ml-1 text-[#9c8b6a] animate-cursor font-bold">_</span>
        </div>

        {/* desktop links */}
        <div className="hidden md:flex gap-6 items-center">
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

        {/* mobile hamburger */}
        <button
          id="hamburger"
          className="md:hidden p-2.5 rounded-xl bg-white/85 border border-[rgba(170,145,100,0.45)] text-[#3f3a32] shadow-[0_8px_24px_rgba(120,100,70,0.18)] focus:outline-none focus:ring-2 focus:ring-[#9c8b6a]/60"
          onClick={() => setMobileOpen(prev => !prev)}
          aria-expanded={mobileOpen ? "true" : "false"}
          aria-controls="mobile-menu"
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* mobile menu overlay */}
        {mobileOpen && (
          <div className="md:hidden fixed inset-0 top-16 bg-[#f6f2ea]/95 backdrop-blur-xl border-t border-[rgba(175,148,104,0.45)] shadow-[0_20px_45px_rgba(120,100,70,0.2)]">
            <div
              id="mobile-menu"
              className="h-full px-6 py-8 flex flex-col gap-4"
            >
              <p className="text-xs uppercase tracking-[0.22em] text-[#6f6658] font-semibold px-1">
                Navigation
              </p>
              {[
                { id: "about", label: "About" },
                { id: "projects", label: "Projects" },
                { id: "contact", label: "Contact" },
              ].map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="w-full rounded-2xl px-5 py-4 text-left text-base font-bold text-[#2f2a24] bg-white border border-[rgba(170,145,100,0.45)] shadow-[0_10px_24px_rgba(120,100,70,0.14)] transition-colors duration-200 hover:bg-[#fffaf1]"
                >
                  {link.label}
                </button>
              ))}

              <a
                href="https://github.com/Emilia-vip"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-2xl px-5 py-4 text-left text-base font-bold text-[#2f2a24] bg-white border border-[rgba(170,145,100,0.45)] shadow-[0_10px_24px_rgba(120,100,70,0.14)] transition-colors duration-200 hover:bg-[#fffaf1]"
              >
                GitHub
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar