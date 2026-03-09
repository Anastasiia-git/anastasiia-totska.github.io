"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { ProjectType } from "@/types/projectType";
import { projects } from "@/data/projectsData";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import ProjectModal from "@/components/ProjectModal/ProjectModal";
import styles from "./Projects.module.css";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null,
  );

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <div className={styles.heading}>
          <span>PROJECTS</span>
          <h2>My Projects</h2>
        </div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <Tilt key={project.id} tiltMaxAngleX={10} tiltMaxAngleY={10}>
              <motion.div
                whileHover={{ y: -8 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <ProjectCard
                  project={project}
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
      />
    </section>
  );
}
