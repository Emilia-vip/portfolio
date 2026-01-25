import { motion } from "framer-motion";

const projects = [
  {
    title: "Calculator",
    description:
      "A calculator for the best equation",
    tech: ["React", "TypeScript", "Tailwind"],
    github: "https://github.com/Emilia-vip/Calculator",
  },
  {
    title: "Dress up game",
    description:
      "A fashion game build on vite whith react and tailwind.",
    tech: ["React", "TypeScript", "MongoDB"],
    github: "https://github.com/Emilia-vip/Top-modle-Dress-Up",
  },
];

function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6 bg-[#faf9f6] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_top_right,rgba(200,180,150,0.25),transparent_70%)]" />
      </div>

      <div className="relative max-w-[1100px] mx-auto">

        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl font-bold text-[#3f3a32] mb-4 tracking-tight">
            Projects
          </h2>
          <p className="text-[#5f584f] text-lg max-w-[520px] leading-relaxed">
            A selection of projects I've built and experimented with during my journey as a developer.
          </p>
        </motion.div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
             
              <div className="relative h-full p-10 rounded-[2rem] bg-white/70 backdrop-blur-xl border border-[rgba(200,180,150,0.4)] shadow-[0_18px_50px_rgba(120,100,70,0.12)] group-hover:shadow-[0_30px_70px_rgba(120,100,70,0.22)] transition-all duration-500 overflow-hidden">
                
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[rgba(200,180,150,0.1)] rounded-full blur-3xl group-hover:bg-[rgba(200,180,150,0.2)] transition-colors duration-500" />

                <h3 className="text-2xl font-bold text-[#3f3a32] mb-4 tracking-tight">
                  {project.title}
                </h3>
                
                <p className="text-[#5f584f] leading-relaxed mb-8 opacity-90">
                  {project.description}
                </p>

                <ul className="flex flex-wrap gap-2 mb-10">
                  {project.tech.map((tech) => (
                    <li 
                      key={tech} 
                      className="text-[11px] uppercase tracking-wider font-semibold px-4 py-1.5 rounded-full bg-[rgba(200,180,150,0.15)] text-[#5f584f] border border-[rgba(200,180,150,0.1)]"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#3f3a32] group/link"
                >
                  <span>View on GitHub</span>
                  <span className="text-lg transition-transform duration-300 group-hover/link:translate-x-1">→</span>
              
                  <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#9c8b6a] transition-all duration-300 group-hover/link:w-full" />
                </a>

                <div className="absolute bottom-0 left-0 w-full h-1 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 w-full bg-[#f1a5a5]">
                    <div 
                      className="absolute top-0 h-full w-32 bg-gradient-to-r from-transparent via-white/80 to-transparent -skew-x-[25deg] animate-[shine_2s_infinite]"
                      style={{ left: '-100%' }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;