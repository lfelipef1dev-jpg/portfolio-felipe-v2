'use client';

import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import { personalInfo } from '@/data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 border-t border-dark-800">
      <div className="container-custom py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold text-gradient mb-4">
                {'<Felipe />'}
              </h3>
              <p className="text-dark-400 text-sm">
                Desenvolvedor Full Stack apaixonado por criar experiências 
                digitais incríveis.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    className="text-dark-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    Sobre
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="text-dark-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-dark-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    Projetos
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-dark-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Redes Sociais</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/seu-usuario"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-dark-800 hover:bg-primary-600 rounded-lg transition-all duration-300 hover:scale-110"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/seu-usuario"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-dark-800 hover:bg-primary-600 rounded-lg transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="w-10 h-10 flex items-center justify-center bg-dark-800 hover:bg-primary-600 rounded-lg transition-all duration-300 hover:scale-110"
                  aria-label="Email"
                >
                  <FaEnvelope className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-dark-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-dark-400 text-sm text-center md:text-left">
                © {currentYear} {personalInfo.name}. Todos os direitos reservados.
              </p>
              <p className="text-dark-400 text-sm flex items-center gap-2">
                Feito com <FaHeart className="text-red-500 w-4 h-4" /> usando Next.js
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

