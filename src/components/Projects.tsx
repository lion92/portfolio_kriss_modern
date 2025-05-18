import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Gestion de Budget",
    description: "Application web permettant de gérer son budget personnel avec suivi des dépenses, visualisation des données et planification financière.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tech: ["React", "Nest", "TypeOrm", "PostgreSQL", "TailwindCSS"],
    demo: "https://gestiontaches.krissclotilde.com/",
    github: "https://github.com/lion92",
    features: ["Suivi des dépenses", "Graphiques interactifs", "Export des données", "Multi-devise"]
  },
  {
    title: "Recettes de Cuisine",
    description: "Plateforme de partage de recettes de cuisine avec système de recherche avancé et gestion des favoris.",
    image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tech: ["React", "Nest", "TypeOrm", "PostgreSQL", "TailwindCSS"],
    demo: "https://recette.krissclotilde.com/",
    github: "https://github.com/lion92",
    features: ["Recherche avancée", "Système de notation", "Favoris", "Partage social"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
          Mes Projets
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Fonctionnalités principales:</h4>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                  >
                    <Github className="w-5 h-5" />
                    <span>Code source</span>
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Voir le projet</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}