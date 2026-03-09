"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ProjectType } from "@/types/projectType";
import Image from "next/image";
import styles from "./ProjectModal.module.css";

interface Props {
  project: ProjectType | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className={styles.overlay}
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className={styles.modal}
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
        >
          <div className={styles.imageWrapper}>
            <Image
              src={project.image}
              alt={project.title}
              fill
              className={styles.modalImage}
              sizes="(max-width: 768px) 90vw, (max-width: 1024px) 60vw, 500px"
              priority
            />
          </div>

          <h3>{project.title}</h3>
          <p>{project.description}</p>

          {(project.tech || []).length > 0 && (
            <div className={styles.tech}>
              {(project.tech || []).map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>
          )}

          <div className={styles.links}>
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            )}
          </div>

          <button className={styles.close} onClick={onClose}>
            X
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
