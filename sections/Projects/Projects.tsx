"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { ProjectType } from "@/types/projectType";
import { projectsData } from "@/data/projectsData";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import ProjectModal from "@/components/ProjectModal/ProjectModal";
import styles from "./Projects.module.css";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Projects() {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null,
  );
  const projects = projectsData.map((project, index) => ({
    ...project,
    ...t.projects.items[index],
  }));
  const orderedProjects = [...projects].sort(
    (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)),
  );

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <span className={styles.subtitle}>{t.projects.eyebrow}</span>
        <div className={styles.heading}>
          <h2>{t.projects.title}</h2>
          <p>{t.projects.description}</p>
        </div>

        <div className={styles.grid}>
          {orderedProjects.map((project, index) => (
            <Tilt
              key={project.id}
              className={project.featured ? styles.featuredProject : ""}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
            >
              <motion.div
                whileHover={{ y: -8 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <ProjectCard
                  project={project}
                  featured={project.featured}
                  featuredLabel={t.projects.featured}
                  openDetailsLabel={t.projects.openDetails}
                  onClick={() => setSelectedProject(project)}
                />
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        labels={t.projects.modal}
      />
    </section>
  );
}
