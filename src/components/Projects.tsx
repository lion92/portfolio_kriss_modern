import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Projet Kriss Clotilde 2024",
    description: "Gestion de budget",
    image: "https://media.licdn.com/dms/image/v2/C4D03AQEyIUP8i2cldQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1619791365722?e=1737590400&v=beta&t=q2XWA0WY_LBmTNWi1by_gYm_iSH1AWndgtFGbYh8F3Q",
    tech: ["React", "Nest", "TypeOrm"],
    demo: "https://gestiontaches.krissclotilde.com/"
  },
  {
    title: "Projet Kriss Clotilde 2024",
    description: "Creation de recette de cuisine",
    image: "https://media.licdn.com/dms/image/v2/C4D03AQEyIUP8i2cldQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1619791365722?e=1737590400&v=beta&t=q2XWA0WY_LBmTNWi1by_gYm_iSH1AWndgtFGbYh8F3Q",
    tech: ["React", "Nest", "TypeOrm"],
    demo: "https://recette.krissclotilde.com/"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
          Mes Projets
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-end items-center">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
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