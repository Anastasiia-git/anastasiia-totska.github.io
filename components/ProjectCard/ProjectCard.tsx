"use client";

import { useRef } from "react";
import { ProjectType } from "@/types/projectType";
import Image from "next/image";
import styles from "./ProjectCard.module.css";

type Props = {
  project: ProjectType;
  onClick: () => void;
};

export default function ProjectCard({ project, onClick }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className={styles.card}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.media}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 400px"
        />
        {project.video && (
          <video ref={videoRef} src={project.video} muted loop playsInline />
        )}
      </div>

      <div className={styles.cardContent}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  );
}
