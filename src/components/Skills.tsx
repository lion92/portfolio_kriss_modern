import React from 'react';
import { LayoutGrid, Server, Database, Smartphone, Wrench, Code2 } from 'lucide-react';

const skills = [
  {
    category: "Frontend",
    icon: <LayoutGrid className="w-6 h-6" />,
    items: ["React", "Angular", "TypeScript"]
  },
  {
    category: "Backend",
    icon: <Server className="w-6 h-6" />,
    items: ["Node.js", "Java", "Express", "NestJS"]
  },
  {
    category: "Database",
    icon: <Database className="w-6 h-6" />,
    items: ["PostgreSQL","Mysql"]
  },
  {
    category: "Languages",
    icon: <Code2 className="w-6 h-6" />,
    items: ["JavaScript", "Java"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
          Compétences
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg text-purple-600 dark:text-purple-400">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold">{skill.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}