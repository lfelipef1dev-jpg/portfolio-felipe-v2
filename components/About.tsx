'use client';

import { FaCode, FaLaptopCode, FaRocket, FaUsers } from 'react-icons/fa';

const highlights = [
  {
    icon: FaCode,
    title: 'Código Limpo',
    description: 'Escrevo código legível, manutenível e seguindo as melhores práticas.',
  },
  {
    icon: FaLaptopCode,
    title: 'Desenvolvimento Ágil',
    description: 'Experiência com metodologias ágeis e entrega contínua.',
  },
  {
    icon: FaRocket,
    title: 'Performance',
    description: 'Foco em otimização e construção de aplicações rápidas e eficientes.',
  },
  {
    icon: FaUsers,
    title: 'Trabalho em Equipe',
    description: 'Excelente comunicação e colaboração com times multidisciplinares.',
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-dark-900/50">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Sobre <span className="text-gradient">Mim</span>
            </h2>
            <p className="text-dark-400 text-lg max-w-2xl mx-auto">
              Desenvolvedor apaixonado por tecnologia e inovação
            </p>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary-400">
                Construindo experiências digitais incríveis
              </h3>
              <p className="text-dark-300 leading-relaxed">
                Com mais de 5 anos de experiência em desenvolvimento web, tenho trabalhado 
                em projetos desafiadores que vão desde startups inovadoras até grandes 
                empresas de tecnologia.
              </p>
              <p className="text-dark-300 leading-relaxed">
                Minha jornada no desenvolvimento começou com curiosidade e se transformou 
                em paixão. Adoro aprender novas tecnologias e compartilhar conhecimento 
                com a comunidade.
              </p>
              <p className="text-dark-300 leading-relaxed">
                Especializado em criar aplicações web modernas, escaláveis e com foco 
                na melhor experiência do usuário.
              </p>
            </div>

            {/* Image placeholder */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary-600/20 to-primary-800/20 rounded-2xl flex items-center justify-center border border-primary-500/20">
                <div className="text-center">
                  <FaCode className="w-24 h-24 text-primary-400 mx-auto mb-4" />
                  <p className="text-dark-400 text-sm">
                    Sua foto aqui
                    <br />
                    (adicione em /public/avatar.jpg)
                  </p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-600/20 rounded-full blur-2xl" />
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-dark-800/50 p-6 rounded-xl border border-dark-700 hover:border-primary-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <item.icon className="w-10 h-10 text-primary-400 mb-4" />
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-dark-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

