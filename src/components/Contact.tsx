import React from 'react';
import { Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
          Me Contacter
        </h2>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Parlons de votre projet</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Je suis toujours intéressé par de nouveaux projets passionnants. 
                N'hésitez pas à me contacter pour discuter de vos idées.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg text-purple-600 dark:text-purple-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a href="mailto:kriss.clotilde@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
                    kriss.clotilde@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg text-purple-600 dark:text-purple-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold">Localisation</h4>
                  <p className="text-gray-600 dark:text-gray-300">France</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}