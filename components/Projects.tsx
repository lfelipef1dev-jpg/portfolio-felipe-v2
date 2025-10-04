'use client';

import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaStar, FaCode } from 'react-icons/fa';
import { projects } from '@/data/portfolio';

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.filter(p => p.featured);

  return (
    <section id="projects" className="section-padding bg-dark-900/50">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meus <span className="text-gradient">Projetos</span>
            </h2>
            <p className="text-dark-400 text-lg max-w-2xl mx-auto">
              Projetos reais que demonstram minhas habilidades e experiência
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {displayedProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-dark-800/50 rounded-2xl overflow-hidden border border-dark-700 hover:border-primary-500/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary-500/10"
              >
                {/* Project Image/Preview */}
                <div className="relative h-56 bg-gradient-to-br from-primary-900/30 via-dark-800 to-dark-900/50 flex items-center justify-center overflow-hidden">
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg">
                      <FaStar className="w-3 h-3" />
                      DESTAQUE
                    </div>
                  )}

                  {/* Code Icon Animated */}
                  <div className="relative">
                    <FaCode className="w-20 h-20 text-primary-400/30 group-hover:text-primary-400/50 transition-all duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>

                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  {/* Animated Border Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/10 to-primary-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </div>

                {/* Project Info */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-dark-400 text-sm mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-dark-700/50 text-primary-300 text-xs rounded-lg font-medium border border-dark-600 hover:border-primary-500/50 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-3 py-1.5 bg-dark-700/50 text-dark-400 text-xs rounded-lg font-medium border border-dark-600">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-dark-700 hover:bg-dark-600 text-dark-200 hover:text-white rounded-lg transition-all duration-300 text-sm font-medium border border-dark-600 hover:border-primary-500/50"
                      >
                        <FaGithub className="w-4 h-4" />
                        Código
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-all duration-300 text-sm font-medium shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40"
                      >
                        <FaExternalLinkAlt className="w-3.5 h-3.5" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Bottom Gradient Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>

          {/* Show More/Less Button */}
          {projects.length > 3 && (
            <div className="text-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="group px-8 py-4 bg-dark-800 hover:bg-primary-600 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 border border-dark-700 hover:border-primary-500 shadow-lg hover:shadow-primary-500/30 relative overflow-hidden"
              >
                <span className="relative z-10">
                  {showAll ? 'Ver Menos Projetos' : `Ver Todos os Projetos (${projects.length})`}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
