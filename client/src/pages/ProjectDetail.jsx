import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "@/data/projects";

export const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [lightbox, setLightbox] = useState(null); // index or null

  const project = projects.find((p) => p.id === Number(id));
  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <button onClick={() => navigate("/#projects")} className="text-primary hover:underline">
            ← Back to Projects
          </button>
        </div>
      </div>
    );
  }

  const gallery = project.gallery || (project.image ? [project.image] : []);
  const description = project.fullDescription || project.description;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Simple header */}
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl py-6">
        <button
          onClick={() => navigate("/#projects")}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft size={18} />
          Back to Projects
        </button>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-xl overflow-hidden border border-border mb-8"
        >
          <img src={project.image} alt={project.title} className="w-full object-cover" />
        </motion.div>

        {/* Title + Meta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="text-sm text-muted-foreground">{project.category}</span>
            <span className={`px-2 py-0.5 rounded-full text-xs ${
              project.status === "Live"
                ? "bg-emerald-500/20 text-emerald-600"
                : "bg-amber-500/20 text-amber-600"
            }`}>
              {project.status}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-muted-foreground leading-relaxed mb-6">{description}</p>

          {/* Action links */}
          <div className="flex flex-wrap gap-3 mb-8">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium ${
                project.demoUrl === "#"
                  ? "bg-muted text-muted-foreground cursor-not-allowed"
                  : "bg-primary text-primary-foreground hover:bg-primary/90"
              }`}
              onClick={(e) => project.demoUrl === "#" && e.preventDefault()}
            >
              <ExternalLink size={16} />
              {project.demoUrl === "#" ? "Coming Soon" : "Live Demo"}
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium border ${
                project.githubUrl === "#"
                  ? "bg-muted text-muted-foreground cursor-not-allowed"
                  : "hover:border-primary hover:bg-primary/5"
              }`}
              onClick={(e) => project.githubUrl === "#" && e.preventDefault()}
            >
              <Github size={16} />
              {project.githubUrl === "#" ? "Private Repo" : "View Code"}
            </a>
          </div>
        </motion.div>

        {/* Tech tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-lg font-semibold mb-3">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span key={i} className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-sm border border-primary/20">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mb-10"
        >
          <h2 className="text-lg font-semibold mb-3">Highlights</h2>
          <ul className="space-y-2">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-muted-foreground">
                <span className="mt-1.5 w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Image Gallery */}
        {gallery.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-lg font-semibold mb-3">Screenshots</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-12">
              {gallery.map((src, i) => (
                <div
                  key={i}
                  onClick={() => setLightbox(i)}
                  className="aspect-video rounded-lg overflow-hidden border border-border cursor-pointer hover:opacity-90 transition-opacity"
                >
                  <img src={src} alt={`Screenshot ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Simple Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={() => setLightbox(null)}
          >
            <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 text-white p-2">
              <X size={28} />
            </button>
            <span className="absolute top-4 left-4 text-white text-sm">
              {lightbox + 1} / {gallery.length}
            </span>
            {gallery.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); setLightbox((p) => (p === 0 ? gallery.length - 1 : p - 1)); }}
                  className="absolute left-4 text-white p-2"
                >
                  <ChevronLeft size={32} />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); setLightbox((p) => (p === gallery.length - 1 ? 0 : p + 1)); }}
                  className="absolute right-4 text-white p-2"
                >
                  <ChevronRight size={32} />
                </button>
              </>
            )}
            <motion.img
              key={lightbox}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", damping: 25 }}
              src={gallery[lightbox]}
              alt="Full screenshot"
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
