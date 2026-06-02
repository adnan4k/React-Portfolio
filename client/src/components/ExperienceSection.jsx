import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, CheckCircle2, Building2, ArrowRight } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Senior Full-Stack Developer",
    company: "Level Connections",
    location: "USA",
    period: "2024 – April 2026",
    highlights: [
      "Achieved 4x faster delivery by introducing AI-powered development workflows, MCP servers, and agentic engineering practices that cut month-long projects down to a week.",
      "Contributed to the company's growth from early-stage startup to a $5M+ valuation by delivering scalable product features and improving user engagement.",
      "Developed and optimized a large-scale matchmaking platform using AI-assisted matching, human review workflows, and advanced match management systems.",
      "Built complex business logic, APIs, background jobs, and caching solutions that significantly improved platform performance and scalability.",
    ],
    technologies: ["Laravel", "PHP", "MySQL", "Redis", "React", "JavaScript", "AI Agents", "MCP Servers", "REST APIs"],
    accent: "emerald",
  },
  {
    id: 2,
    role: "Full-Stack Developer",
    company: "402 Agency",
    location: "Bulgaria",
    period: "2022 – 2024",
    highlights: [
      "Designed and developed an e-commerce platform processing 700+ daily orders with optimized performance and scalability.",
      "Built an AI-powered real-time job market intelligence platform serving multiple African countries for labor market trend analysis.",
      "Developed large-scale web scraping pipelines, API integrations, analytics systems, and scalable backend services.",
      "Delivered custom SaaS products and enterprise web applications for international clients across various industries.",
    ],
    technologies: ["Laravel", "PHP", "React", "JavaScript", "MySQL", "MongoDB", "AI", "Web Scraping", "REST APIs"],
    accent: "blue",
  },
  {
    id: 3,
    role: "Software Engineer / Microservices Architect",
    company: "Venas Technology",
    location: "Remote",
    period: "2021 – 2022",
    highlights: [
      "Architected and designed a large-scale delivery platform serving 100K+ monthly active users from concept to production.",
      "Designed the overall system architecture and built 11 microservices using Kotlin and Spring Boot with event-driven communication via Apache Kafka.",
      "Designed MongoDB data models and integrated secure payment gateway solutions for reliable transaction processing across the platform.",
      "Led backend architecture decisions, scalability planning, and technical implementation from concept to production.",
    ],
    technologies: ["Kotlin", "Spring Boot", "Apache Kafka", "MongoDB", "Microservices Architecture", "Payment Gateway Integration", "Docker"],
    accent: "purple",
  },
];

const accentColors = {
  emerald: {
    dot: "bg-emerald-500",
    bar: "from-emerald-500 to-teal-500",
    glow: "bg-emerald-500/20",
    badge: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    tag: "bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    number: "from-emerald-500 to-teal-600",
  },
  blue: {
    dot: "bg-blue-500",
    bar: "from-blue-500 to-cyan-500",
    glow: "bg-blue-500/20",
    badge: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    tag: "bg-blue-500/5 text-blue-600 dark:text-blue-400 border-blue-500/20",
    number: "from-blue-500 to-cyan-600",
  },
  purple: {
    dot: "bg-purple-500",
    bar: "from-purple-500 to-indigo-500",
    glow: "bg-purple-500/20",
    badge: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
    tag: "bg-purple-500/5 text-purple-600 dark:text-purple-400 border-purple-500/20",
    number: "from-purple-500 to-indigo-600",
  },
};

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="experience" className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-12 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-primary/[0.02]" />
        <div className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3)_0%,transparent_70%)]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]" />
        <motion.div
          className="absolute top-1/3 -right-20 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-[120px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 18, repeat: Infinity, repeatType: "reverse", delay: 3 }}
        />
      </div>

      <div className="container max-w-5xl mx-auto relative">
        {/* ========== HEADER ========== */}
        <motion.div
          className="text-center mb-20 md:mb-28"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Top label */}
          <motion.div
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-primary/5 border border-primary/10 mb-8 backdrop-blur-sm"
            whileHover={{ scale: 1.04 }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
            </span>
            <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-primary uppercase">Where I've Worked</span>
          </motion.div>

          {/* Main heading */}
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-6">
            <span className="text-foreground">A bit about</span>
            <br />
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                my career
              </span>
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-full"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformOrigin: "left" }}
              />
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mt-6">
            I've been writing code professionally for <span className="font-semibold text-foreground">over 4 years</span> now.{" "}
            Along the way I've shipped products serving <span className="text-primary font-medium">100K+ users</span>, helped a startup reach a{" "}
            <span className="text-primary font-medium">$5M+ valuation</span>, and learned how to move fast without breaking things.
          </p>

          {/* Quick stats */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {[
              { value: "4+", label: "Years Experience" },
              { value: "3", label: "Companies" },
              { value: "100K+", label: "Monthly Users Served" },
              { value: "4x", label: "Productivity Gain" },
            ].map((stat, i) => (
              <div key={i} className="text-center px-5 py-3 rounded-2xl bg-card/40 border border-border/50 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ========== TIMELINE ========== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Left timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-primary/15 to-transparent" />
          </div>

          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, index) => {
              const colors = accentColors[exp.accent];

              return (
                <motion.div key={exp.id} variants={itemVariants} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-8 top-10 -translate-x-1/2 z-10">
                    <div className={`w-4 h-4 rounded-full ${colors.dot} shadow-lg ring-4 ring-background`}>
                      <div className={`absolute inset-0 rounded-full ${colors.glow} animate-ping`} style={{ animationDuration: "3s" }} />
                    </div>
                  </div>

                  {/* Card — single column */}
                  <div className="pl-20">
                    <motion.div
                      className="group relative bg-card/40 border border-border/60 rounded-2xl p-6 sm:p-8 backdrop-blur-sm transition-all duration-500 hover:bg-card/60 hover:border-primary/30 hover:shadow-2xl hover:-translate-y-1"
                      whileHover={{ y: -3 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {/* Accent top bar */}
                      <div className={`absolute top-0 left-4 right-4 h-[2px] rounded-full bg-gradient-to-r ${colors.bar} opacity-60 group-hover:opacity-100 transition-opacity`} />

                      {/* Header */}
                      <div className="flex items-start justify-between gap-4 mb-5">
                        <div>
                          <div className="flex items-center gap-2.5 mb-2">
                            <div className={`p-1.5 rounded-lg ${colors.badge} border`}>
                              <Building2 className="h-4 w-4" />
                            </div>
                            <span className={`text-xs font-semibold tracking-wider uppercase ${colors.badge.split(" ")[1]}`}>
                              {exp.company}
                            </span>
                          </div>
                          <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {exp.role}
                          </h3>
                          <div className="flex flex-wrap items-center gap-3 mt-2.5 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1.5">
                              <MapPin className="h-3.5 w-3.5" />
                              {exp.location}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Calendar className="h-3.5 w-3.5" />
                              {exp.period}
                            </span>
                          </div>
                        </div>

                        {/* Step number */}
                        <div className={`hidden sm:flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${colors.number} text-white font-bold text-sm shadow-lg flex-shrink-0`}>
                          {index + 1}
                        </div>
                      </div>

                      {/* Highlights */}
                      <ul className="space-y-3 mb-6">
                        {exp.highlights.map((highlight, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground group/item"
                          >
                            <span className="mt-1.5 flex-shrink-0">
                              <CheckCircle2 className="h-4 w-4 text-primary/40 group-hover/item:text-primary transition-colors" />
                            </span>
                            <span className="group-hover/item:text-foreground transition-colors leading-relaxed">
                              {highlight}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className="border-t border-border/50 pt-4">
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-300 hover:scale-105 cursor-default ${colors.tag}`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Hover arrow indicator */}
                      <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                        <ArrowRight className="h-4 w-4 text-primary" />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="flex justify-center mt-20"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/5 border border-primary/20 text-sm font-medium text-primary hover:bg-primary/10 hover:border-primary/40 transition-all duration-300"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Open to new opportunities
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
