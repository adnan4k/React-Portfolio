import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import htmlIcon from "@/assets/icons/html.png";
import cssIcon from "@/assets/icons/css.png";
import tsIcon from "@/assets/icons/typescript.png";
import nextjsIcon from "@/assets/icons/nextjs.png";
import nodejsIcon from "@/assets/icons/nodejs.png";
import mongodbIcon from "@/assets/icons/mongodb.png";
import postgresqlIcon from "@/assets/icons/postgresql.png";
import graphqlIcon from "@/assets/icons/graphql.png";
import pythonIcon from "@/assets/icons/python.png";
import gitIcon from "@/assets/icons/git.png";
import dockerIcon from "@/assets/icons/docker.png";
import firebaseIcon from "@/assets/icons/firebase.png";
import clearkIcon from "@/assets/icons/cleark.png";
import laravelIcon from "@/assets/icons/laravel.svg";
import livewireIcon from "@/assets/icons/livewire.svg";
import filamentIcon from "@/assets/icons/filament.svg";
import redisIcon from "@/assets/icons/redis.svg";

const skills = [
  { name: "HTML5", category: "frontend", icon: "html" },
  { name: "CSS3", category: "frontend", icon: "css" },
  { name: "TypeScript", category: "frontend", icon: "typescript" },
  { name: "Next.js", category: "frontend", icon: "nextjs" },
  { name: "Node.js", category: "backend", icon: "nodejs" },
  { name: "Laravel", category: "backend", icon: "laravel" },
  { name: "Livewire", category: "backend", icon: "livewire" },
  { name: "Filament", category: "backend", icon: "filament" },
  { name: "MongoDB", category: "backend", icon: "mongodb" },
  { name: "PostgreSQL", category: "backend", icon: "postgresql" },
  { name: "GraphQL", category: "backend", icon: "graphql" },
  { name: "Redis", category: "backend", icon: "redis" },
  { name: "Python", category: "backend", icon: "python" },
  { name: "Git", category: "tools", icon: "git" },
  { name: "Docker", category: "tools", icon: "docker" },
  { name: "Firebase", category: "tools", icon: "firebase" },
  { name: "Clerk", category: "tools", icon: "cleark" },
];

const categories = [
  { id: "all", label: "All", color: "bg-gradient-to-r from-purple-500 to-pink-500" },
  { id: "frontend", label: "Frontend", color: "bg-gradient-to-r from-blue-500 to-cyan-500" },
  { id: "backend", label: "Backend", color: "bg-gradient-to-r from-green-500 to-emerald-500" },
  { id: "tools", label: "Tools", color: "bg-gradient-to-r from-orange-500 to-yellow-500" },
];

const iconImages = {
  html: htmlIcon,
  css: cssIcon,
  typescript: tsIcon,
  nextjs: nextjsIcon,
  nodejs: nodejsIcon,
  mongodb: mongodbIcon,
  postgresql: postgresqlIcon,
  graphql: graphqlIcon,
  python: pythonIcon,
  git: gitIcon,
  docker: dockerIcon,
  firebase: firebaseIcon,
  cleark: clearkIcon,
  laravel: laravelIcon,
  livewire: livewireIcon,
  filament: filamentIcon,
  redis: redisIcon,
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-28 px-4 bg-gradient-to-br from-background via-secondary/5 to-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            My Skills
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Tools and technologies I use
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2.5 rounded-full font-medium border border-transparent hover:shadow-lg ${
                activeCategory === category.id
                  ? `${category.color} text-white shadow-md`
                  : "bg-secondary/50 text-foreground hover:bg-secondary/70"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-card p-5 rounded-2xl border border-border/30 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col items-center gap-3 group"
              >
                <div className="w-14 h-14 rounded-full bg-card border-2 border-primary/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <img src={iconImages[skill.icon]} alt={skill.name} className="w-7 h-7 object-contain" />
                </div>
                <span className="font-medium text-sm text-center group-hover:text-primary transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
