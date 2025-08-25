import { useState, useEffect } from 'react';
import type { Project } from '../types/types';

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Datos de ejemplo
    const mockProjects: Project[] = [
      {
        id: 1,
        title: "Mi Portafolio",
        description: "Portafolio personal con React y TypeScript",
        technologies: ["React", "TypeScript", "Tailwind CSS"],
        githubUrl: "#"
      },
      {
        id: 2,
        title: "Proyecto API",
        description: "API REST con Node.js",
        technologies: ["Node.js", "Express", "MongoDB"],
        liveUrl: "#"
      }
    ];

    setTimeout(() => {
      setProjects(mockProjects);
      setLoading(false);
    }, 1000);
  }, []);

  return { projects, loading };
};