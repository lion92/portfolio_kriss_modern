import React from 'react';
import { Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text mb-2">
              Portfolio
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              © {new Date().getFullYear()} Tous droits réservés
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/lion92" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link hover:transform hover:scale-110 transition-transform"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/kriss-clotilde" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link hover:transform hover:scale-110 transition-transform"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}