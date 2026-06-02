import { Download, Briefcase, ChevronRight, Github, Linkedin, ExternalLink, Star, GitFork } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleViewResume = () => {
    window.open('/Faysal_Mohammed-resume.pdf', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-background via-background/95 to-primary/10" ref={ref}>

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]" />
        </div>

        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-lg"
            style={{
              width: Math.random() * 60 + 20 + 'px',
              height: Math.random() * 60 + 20 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              rotate: Math.random() * 360
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 60],
              x: [0, (Math.random() - 0.5) * 40],
              opacity: [0.1, 0.25, 0.1],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}

        <motion.div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-gradient-to-r from-primary/10 to-purple-600/10 blur-[100px]" animate={{ x: [0, 30, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }} transition={{ duration: 15, repeat: Infinity }} />
        <motion.div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-gradient-to-r from-cyan-400/10 to-emerald-500/10 blur-[100px]" animate={{ x: [0, -40, 0], y: [0, 40, 0], scale: [1, 1.2, 1] }} transition={{ duration: 20, repeat: Infinity, delay: 2 }} />
      </div>

      <div className="container max-w-7xl mx-auto w-full mt-16 sm:mt-0">
        <motion.div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20" initial="hidden" animate={isInView ? "visible" : "hidden"} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.25, delayChildren: 0.5 } } }}>

          {/* Left Column */}
          <div className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 backdrop-blur-sm" variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}>
              <Briefcase className="h-4 w-4" /> Available for new opportunities
            </motion.div>

            <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight" variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}>
              <span className="block text-foreground">I'm Faysal Mohammed</span>
              <motion.span className="block bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent mt-2" animate={{ backgroundPosition: ['0%', '100%', '0%'] }} transition={{ duration: 8, repeat: Infinity }} style={{ backgroundSize: '200% 100%' }}>
                Full-Stack Engineer
              </motion.span>
            </motion.h1>

            <motion.div className="inline-flex items-center gap-2 mt-4 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-sm text-muted-foreground" variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}>
              <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
              <span><span className="text-primary font-bold">4+ Years</span> in Production Engineering</span>
            </motion.div>

            <motion.p className="text-lg sm:text-xl text-muted-foreground mt-6 leading-relaxed max-w-2xl" variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}>
              I build <span className="text-primary font-semibold">high-performance web applications</span> that drive business growth. Specializing in React, Laravel, Kotlin, and scalable microservices architecture for startups and enterprises.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8" variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}>
              <motion.a href="#experience" className="group relative overflow-hidden px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-primary to-purple-600 text-primary-foreground shadow-lg hover:shadow-xl text-sm flex items-center justify-center gap-3" whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Briefcase className="h-5 w-5" />
                <span>View Experience</span>
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a href="#projects" className="group relative overflow-hidden px-8 py-4 rounded-xl font-semibold border border-primary/50 text-foreground hover:border-primary transition-all duration-300 bg-background/80 backdrop-blur-sm text-sm flex items-center justify-center gap-3" whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <GitFork className="h-5 w-5" />
                <span>View Projects</span>
              </motion.a>

              <motion.button
                onClick={handleViewResume}
                className="group relative overflow-hidden px-8 py-4 rounded-xl font-semibold border border-border text-muted-foreground hover:border-primary/30 hover:text-foreground transition-all duration-300 bg-background/60 backdrop-blur-sm text-sm flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="h-4 w-4" />
                <span>Download Resume</span>
              </motion.button>
            </motion.div>

            <motion.div className="mt-6 text-center lg:text-left" variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}>
              <div className="text-sm text-muted-foreground">
                🚀 <span className="text-primary font-semibold">Available Immediately</span> for Senior Full-Stack & Engineering roles worldwide
              </div>
            </motion.div>
          </div>

          {/* Right Column — GitHub & LinkedIn Cards */}
          <motion.div className="flex-1 flex flex-col gap-6 justify-center w-full max-w-md" variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}>

            {/* GitHub Card */}
            <motion.a
              href="https://github.com/adnan4k"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-background/90 border border-border rounded-2xl p-6 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-primary/40 hover:-translate-y-1"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gray-900 text-white group-hover:scale-110 transition-transform duration-300">
                  <Github className="h-8 w-8" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">GitHub</h3>
                  <p className="text-sm text-muted-foreground truncate">github.com/adnan4k</p>
                </div>
                <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5"><Star className="h-3.5 w-3.5 text-amber-500" /> Open source projects</span>
                <span className="flex items-center gap-1.5"><GitFork className="h-3.5 w-3.5" /> Repositories</span>
              </div>
            </motion.a>

            {/* LinkedIn Card */}
            <motion.a
              href="https://www.linkedin.com/in/faysal-mohammed-663717230"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-background/90 border border-border rounded-2xl p-6 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-primary/40 hover:-translate-y-1"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-[#0A66C2] text-white group-hover:scale-110 transition-transform duration-300">
                  <Linkedin className="h-8 w-8" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">LinkedIn</h3>
                  <p className="text-sm text-muted-foreground truncate">in/faysal-mohammed-663717230</p>
                </div>
                <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                <Briefcase className="h-3.5 w-3.5 text-[#0A66C2]" />
                <span>Senior Full-Stack Developer · 4+ years experience</span>
              </div>
            </motion.a>

          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: [0, 1, 1, 0], y: [0, 6, 0, -6] }} transition={{ duration: 3, repeat: Infinity, repeatDelay: 0.5 }}>
        <motion.div className="text-xs text-primary mb-3 flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-lg" whileHover={{ scale: 1.05 }}>
          <ChevronRight className="h-3 w-3 rotate-90" />
          <span>Explore Technical Portfolio</span>
        </motion.div>
        <motion.div animate={{ y: [0, 4, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-5 h-8 border-2 border-primary/30 rounded-full flex justify-center">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-1 h-2 bg-primary rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
};
