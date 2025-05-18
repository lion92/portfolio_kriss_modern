import React from 'react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      <div className="container mx-auto px-4 py-32 text-center">
        <div className="mb-8">
          <img
            src="https://media.licdn.com/dms/image/v2/C4D03AQEyIUP8i2cldQ/profile-displayphoto-shrink_400_400/0/1619791365722?e=1737590400&v=beta&t=q2XWA0WY_LBmTNWi1by_gYm_iSH1AWndgtFGbYh8F3Q"
            alt="Kriss CLOTILDE"
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-purple-500 shadow-xl"
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text animate-fade-in">
          Kriss CLOTILDE
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in-up">
          Développeur Full Stack passionné par la création d'applications web innovantes et performantes.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          Avec plus de 5 ans d'expérience dans le développement web, je me spécialise dans la création 
          d'applications robustes et évolutives utilisant les technologies modernes comme React, Node.js, 
          et TypeScript. Passionné par l'innovation et l'apprentissage continu, je m'efforce de créer 
          des solutions qui combinent performance technique et expérience utilisateur exceptionnelle.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#contact" className="btn-primary">
            Me contacter
          </a>
          <a href="#projects" className="btn-secondary">
            Voir mes projets
          </a>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </div>
      </div>
    </section>
  );
}