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
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
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

        {/* Timeline Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-[#9c8b6a] via-[#9c8b6a] to-transparent transform -translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {events.map((event, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex items-start gap-8 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Left/Right Content */}
                <div className={`w-full sm:w-[calc(50%-20px)] ${
                  index % 2 === 0 ? "text-right" : ""
                }`}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:shadow-lg ${
                      event.type === "work"
                        ? "bg-[#fff5e6]/40 border-[#ffd699]/30 hover:bg-[#fff5e6]/60"
                        : "bg-[#e6f2ff]/40 border-[#99d4ff]/30 hover:bg-[#e6f2ff]/60"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2 justify-end sm:justify-start">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        event.type === "work"
                          ? "bg-[#ffd699]/30 text-[#8b6914]"
                          : "bg-[#99d4ff]/30 text-[#1466b8]"
                      }`}>
                        {event.type === "work" ? "Work" : "Education"}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-[#3f3a32] mb-1">
                      {event.title}
                    </h3>
                    {event.description && (
                      <p className="text-sm text-[#5f584f] mb-2">
                        {event.description}
                      </p>
                    )}
                    <p className="text-xs font-medium text-[#9c8b6a]">
                      {event.year}
                    </p>
                  </motion.div>
                </div>

                {/* Center Circle/Dot */}
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
                  className="relative shrink-0 w-6 h-6 sm:w-8 sm:h-8"
                >
                  <div className="absolute inset-0 bg-[#9c8b6a] rounded-full" />
                  <motion.div
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
                    className="absolute inset-0 bg-[#9c8b6a]/20 rounded-full"
                  />
                </motion.div>

                {/* Right/Left Empty Space */}
                <div className="hidden sm:block w-[calc(50%-20px)]" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Timeline;
