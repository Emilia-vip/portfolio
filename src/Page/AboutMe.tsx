import { motion } from "framer-motion";
import profilbild from "../assets/profilbild.port.webp";
import focus from "../assets/target.port.webp";
import brain from "../assets/mindset.port.webp";
import vison from "../assets/Planning.port.webp";

function AboutMe() {
  const cards = [
    {
      title: "My Focus",
      text: "Developing high-performance web applications with a focus on modern architecture and responsive design. Creating future-proof solutions that are as fast as they are functional.",
      image: focus,
      color: "from-orange-100 to-transparent",
    },
    {
      title: "Tech Stack",
      text: "React, TypeScript, Node.js, JavaScript, HTML, CSS, API-design, and MongoDB. Always exploring new tools to stay at the forefront of the industry.",
      image: brain,
      color: "from-blue-100 to-transparent",
    },
    {
      title: "Vision",
      text: "Driven by a passion for continuous growth and the future of tech. I strive to evolve with every new breakthrough, mastering the tools of tomorrow.",
      image: vison,
      color: "from-purple-100 to-transparent",
    },
  ];

  return (
    <section id="about" className="relative py-32 overflow-hidden bg-[#faf9f6]">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[rgba(210,190,160,0.2)] rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[rgba(156,139,106,0.1)] rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-[1100px] mx-auto px-6">
        {/* About card */}
        <motion.div
          initial={{ opacity: 0, translateY: 30 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/40 backdrop-blur-2xl border border-[rgba(200,180,150,0.3)] rounded-[3rem] p-10 md:p-16 shadow-[0_20px_50px_rgba(120,100,70,0.1)] mb-24 will-change-transform"
        >
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl font-bold text-[#3f3a32] tracking-tight text-center md:text-left">
                About <span className="text-[#9c8b6a]">Me</span>
              </h2>

              <p className="text-[#5f584f] text-lg leading-relaxed text-center md:text-left">
                Hi, I'm <span className="font-semibold text-[#3f3a32]">Emilia Eriksson</span>. 
                As an aspiring Full-stack Developer, I view coding as a digital craft. 
                This portfolio is more than just a gallery of projects – it’s a documentation 
                of my journey, from the very first line of code to complex systems.
              </p>

              <div className="flex justify-center md:justify-start">
                <span className="px-4 py-1 rounded-full bg-[#9c8b6a]/10 text-[#9c8b6a] text-sm font-medium border border-[#9c8b6a]/20">
                  Available for new opportunities
                </span>
              </div>
            </div>

            {/* Floating profile image */}
            <motion.div
              animate={{ translateY: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative will-change-transform"
            >
              <div className="absolute inset-0 bg-[#9c8b6a]/20 rounded-full blur-3xl animate-pulse" />
              <img
                src={profilbild}
                alt="Emilia Eriksson"
                fetchPriority="high"
                loading="eager"
                className="relative w-56 h-56 object-cover border-4 border-white shadow-2xl transition-transform duration-500 hover:scale-105 animate-blob"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {cards.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, translateY: 20 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group will-change-transform"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#9c8b6a] to-[#d2be96] rounded-3xl blur opacity-0 group-hover:opacity-15 transition duration-500" />

              {/* Inner hover wrapper (isolated animation) */}
              <motion.div
                whileHover={{ translateY: -10 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="relative h-full bg-white/60 backdrop-blur-md border border-white/50 rounded-3xl p-8 shadow-sm group-hover:shadow-2xl transition-all duration-500 overflow-hidden will-change-transform"
              >
                <div className={`absolute -right-4 -top-4 w-20 h-20 bg-gradient-to-br ${item.color} rounded-full opacity-40 group-hover:scale-150 transition-transform duration-700`} />

                <div className="relative z-10">
                  <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 inline-block">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-12 h-12 object-contain"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-[#3f3a32] mb-3 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-[#5f584f] text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                    {item.text}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-[rgb(255,255,255)] overflow-hidden">
                  <div className="absolute inset-0 w-0 group-hover:w-full bg-[#f1a5a5] transition-all duration-500 ease-out">
                    <div
                      className="absolute top-0 h-full w-24 bg-gradient-to-r from-transparent via-white/80 to-transparent -skew-x-[25deg] animate-[shine_1.5s_infinite]"
                      style={{ left: "-100%" }}
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
