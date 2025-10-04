'use client';

import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown } from 'react-icons/fa';
import { personalInfo } from '@/data/portfolio';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-dark-950 to-dark-950" />
      
      {/* Animated circles */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main content */}
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Olá, eu sou{' '}
              <span className="text-gradient">{personalInfo.name}</span>
            </h1>
            <h2 className="text-2xl md:text-4xl text-dark-300 mb-8">
              {personalInfo.title}
            </h2>
            <p className="text-lg md:text-xl text-dark-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              {personalInfo.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="#projects"
                className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary-500/50"
              >
                Ver Projetos
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-primary-600 text-primary-400 hover:bg-primary-600 hover:text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Entre em Contato
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/seu-usuario"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-400 hover:text-primary-400 transition-colors duration-300"
                aria-label="GitHub"
              >
                <FaGithub className="w-8 h-8" />
              </a>
              <a
                href="https://linkedin.com/in/seu-usuario"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-400 hover:text-primary-400 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-8 h-8" />
              </a>
              <a
                href="mailto:contato@exemplo.com"
                className="text-dark-400 hover:text-primary-400 transition-colors duration-300"
                aria-label="Email"
              >
                <FaEnvelope className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-dark-400 hover:text-primary-400 transition-colors animate-bounce-slow"
        aria-label="Scroll down"
      >
        <FaChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
}

