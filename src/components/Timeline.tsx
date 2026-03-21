import { motion } from "framer-motion";

interface TimelineEvent {
  year: string;
  type: "work" | "education";
  title: string;
  description?: string;
}

function Timeline() {
  const events: TimelineEvent[] = [
    {
      year: "2016–2018",
      type: "work",
      title: "Farsta ridskola",
    },
    {
      year: "2017",
      type: "education",
      title: "Ledarskapsutbildning",
      description: "Svenska Ridsportförbundet",
    },
    {
      year: "2019–2020",
      type: "work",
      title: "Caféansvarig i en ishockeyhall",
    },
    {
      year: "2020",
      type: "work",
      title: "Sommarjobb på Stockholms stadsmuseum",
    },
    {
      year: "2020–2023",
      type: "education",
      title: "Ekonomiprogrammet",
      description: "Jensen gymnasium",
    },
    {
      year: "2021–2022",
      type: "work",
      title: "Hemköp Västerhaninge",
    },
    {
      year: "2022–Nu",
      type: "work",
      title: "Hemköp Vega",
    },
    {
      year: "Hösten 2024",
      type: "education",
      title: "Programmering 1",
      description: "Komvux",
    },
    {
      year: "2025–2027",
      type: "education",
      title: "Fullstack open source",
      description: "Chas Academy",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 0 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="timeline" className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, translateY: 20 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#3f3a32] tracking-tight mb-4">
            Experience &amp; <span className="text-[#9c8b6a]">Education</span>
          </h2>
          <p className="text-[#5f584f] text-lg">
            My journey through work and learning
          </p>
        </motion.div>

        {/* Horizontal Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="timeline-scroll relative overflow-x-auto snap-x snap-mandatory pb-8"
        >
          <div className="relative min-w-max px-6">
            <div className="absolute left-6 right-6 top-1/2 h-0.5 bg-linear-to-r from-transparent via-[#9c8b6a] to-transparent" />

            <div className="relative grid grid-flow-col auto-cols-[240px] gap-8 sm:gap-10">
            {events.map((event, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative h-[460px] snap-center"
              >
                {event.type === "work" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="absolute left-1/2 bottom-[calc(50%+56px)] w-[220px] -translate-x-1/2 p-4 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:shadow-lg bg-[#fff5e6]/45 border-[#ffd699]/30 hover:bg-[#fff5e6]/65"
                  >
                    <div className="flex items-center gap-2 mb-2 justify-center">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#ffd699]/30 text-[#8b6914]">
                        Work
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-[#3f3a32] mb-1 text-center">
                      {event.title}
                    </h3>
                    {event.description && (
                      <p className="text-sm text-[#5f584f] mb-2 text-center">
                        {event.description}
                      </p>
                    )}
                    <p className="text-xs font-medium text-[#9c8b6a] text-center">
                      {event.year}
                    </p>
                  </motion.div>
                )}

                {event.type === "education" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="absolute left-1/2 top-[calc(50%+56px)] w-[220px] -translate-x-1/2 p-4 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:shadow-lg bg-[#e6f2ff]/45 border-[#99d4ff]/30 hover:bg-[#e6f2ff]/65"
                  >
                    <div className="flex items-center gap-2 mb-2 justify-center">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#99d4ff]/30 text-[#1466b8]">
                        Education
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-[#3f3a32] mb-1 text-center">
                      {event.title}
                    </h3>
                    {event.description && (
                      <p className="text-sm text-[#5f584f] mb-2 text-center">
                        {event.description}
                      </p>
                    )}
                    <p className="text-xs font-medium text-[#9c8b6a] text-center">
                      {event.year}
                    </p>
                  </motion.div>
                )}

                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="absolute left-1/2 top-1/2 z-10 w-6 h-6 -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="absolute inset-0 bg-[#9c8b6a] rounded-full" />
                  <motion.div
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
                    className="absolute inset-0 bg-[#9c8b6a]/20 rounded-full"
                  />
                </motion.div>

                <p className="absolute left-1/2 top-[calc(50%+22px)] -translate-x-1/2 text-xs font-medium text-[#7a6f5b]">
                  {event.year}
                </p>
              </motion.div>
            ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Timeline;
