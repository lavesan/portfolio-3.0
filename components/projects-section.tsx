"use client";

import { useState, useRef, useEffect } from "react";
import { Carousel } from "./carousel";
import { useTranslations } from "@/hooks/use-translations";
import { ExternalLink, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projectsData } from "@/data/projects";
import { AnimatedSection } from "./animated-section";
import { motion, AnimatePresence } from "framer-motion";

export function ProjectsSection() {
  const { t } = useTranslations();
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);

  // Fechar o modal ao clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        modalContentRef.current &&
        !modalContentRef.current.contains(event.target as Node)
      ) {
        setExpandedProject(null);
      }
    };

    if (expandedProject) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [expandedProject]);

  // Impedir o scroll do body quando o modal estiver aberto
  useEffect(() => {
    if (expandedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [expandedProject]);

  const currentProject = expandedProject
    ? projectsData.find((project) => project.id === expandedProject)
    : null;

  return (
    <>
      <section id="projects" className="py-20 bg-secondary/30 futuristic-bg">
        <div className="absolute inset-0 z-0 grid-pattern"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                {t("projects.title")}
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("projects.description")}
              </p>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={200}>
            <Carousel>
              {projectsData.map((project, index) => (
                <div
                  key={project.id}
                  className="bg-card/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full border border-border/50"
                >
                  <div
                    className="aspect-video overflow-hidden relative group cursor-pointer"
                    onClick={() => setExpandedProject(project.id)}
                  >
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={t(project.title)}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>

                    {(project.gallery?.length || project.link) && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/40">
                        <Button variant="secondary" className="z-10">
                          {project.gallery?.length
                            ? t("projects.viewGallery")
                            : t("projects.visitSite")}
                        </Button>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">{t(project.title)}</h3>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 transition-colors"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                    <p className="text-muted-foreground">
                      {t(project.description)}
                    </p>

                    {project.technologies &&
                      project.technologies.length > 0 && (
                        <div className="mt-4">
                          <p className="text-sm font-medium mb-1">
                            {t("projects.technologies")}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                  </div>
                </div>
              ))}
            </Carousel>
          </AnimatedSection>
        </div>
      </section>

      <AnimatePresence>
        {expandedProject && currentProject?.gallery && (
          <motion.div
            ref={modalRef}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-background/80 backdrop-blur-sm p-4 overflow-y-auto"
            style={{ paddingTop: "80px", paddingBottom: "80px" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              ref={modalContentRef}
              className="bg-card rounded-lg shadow-xl max-w-4xl w-full max-h-[calc(100vh-160px)] overflow-hidden relative z-[10000]"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex justify-between items-center p-4 border-b border-border sticky top-0 bg-card z-10">
                <h3 className="text-xl font-bold">{t(currentProject.title)}</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setExpandedProject(null)}
                  aria-label={t("projects.close")}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <div
                className="p-4 overflow-y-auto"
                style={{ maxHeight: "calc(100vh - 240px)" }}
              >
                <div className="mb-4">
                  <p className="text-muted-foreground mb-4">
                    {t(currentProject.description)}
                  </p>

                  {currentProject.technologies &&
                    currentProject.technologies.length > 0 && (
                      <div className="mb-4">
                        <p className="text-sm font-medium mb-1">
                          {t("projects.technologies")}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {currentProject.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                  {currentProject.link && (
                    <a
                      href={currentProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors"
                    >
                      <span>{t("projects.visitSite")}</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentProject.gallery?.map((image, idx) => (
                    <motion.div
                      key={idx}
                      className="rounded-md overflow-hidden mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`${t(currentProject.title)} - ${t(
                          "projects.image"
                        )} ${idx + 1}`}
                        className="w-full h-auto object-contain"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
