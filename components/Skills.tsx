'use client';

import { useState } from 'react';
import { 
  FaReact, FaNodeJs, FaPython, FaGitAlt, FaDocker, 
  FaHtml5, FaFigma, FaServer, FaCode 
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, 
  SiGraphql 
} from 'react-icons/si';
import { skills } from '@/data/portfolio';

const iconMap: Record<string, any> = {
  FaReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  FaHtml5,
  SiTailwindcss,
  FaNodeJs,
  FaPython,
  FaServer,
  SiGraphql,
  FaGitAlt,
  FaDocker,
  FaCode,
  FaFigma,
};

type Category = 'all' | 'frontend' | 'backend' | 'tools';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const categories = [
    { id: 'all', name: 'Todas' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'tools', name: 'Ferramentas' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Minhas <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-dark-400 text-lg">
              Tecnologias e ferramentas que domino
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id as Category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/50'
                    : 'bg-dark-800 text-dark-300 hover:bg-dark-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredSkills.map((skill, index) => {
              const Icon = iconMap[skill.icon] || FaReact;
              
              return (
                <div
                  key={index}
                  className="bg-dark-800/50 p-6 rounded-xl border border-dark-700 hover:border-primary-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <Icon className="w-10 h-10 text-primary-400 group-hover:scale-110 transition-transform" />
                    <h3 className="text-lg font-semibold">{skill.name}</h3>
                  </div>
                  
                  {/* Skill Level Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-dark-400">
                      <span>Proficiência</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

