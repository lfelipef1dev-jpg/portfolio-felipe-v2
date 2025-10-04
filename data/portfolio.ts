import { PersonalInfo, Project, Skill, Experience } from '@/types';

export const personalInfo: PersonalInfo = {
  name: 'Felipe',
  title: 'Full Stack Developer',
  bio: 'Desenvolvedor apaixonado por criar experiências web incríveis. Especializado em React, Next.js e TypeScript, com foco em escrever código limpo, escalável e performático.',
  email: 'contato@exemplo.com',
  location: 'Brasil',
  avatar: '/avatar.jpg',
  socials: [
    {
      name: 'GitHub',
      url: 'https://github.com/seu-usuario',
      icon: 'FaGithub',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/seu-usuario',
      icon: 'FaLinkedin',
    },
    {
      name: 'Email',
      url: 'mailto:contato@exemplo.com',
      icon: 'FaEnvelope',
    },
  ],
};

export const skills: Skill[] = [
  // Frontend
  { name: 'React', category: 'frontend', level: 95, icon: 'FaReact' },
  { name: 'Next.js', category: 'frontend', level: 90, icon: 'SiNextdotjs' },
  { name: 'TypeScript', category: 'frontend', level: 90, icon: 'SiTypescript' },
  { name: 'JavaScript', category: 'frontend', level: 95, icon: 'SiJavascript' },
  { name: 'HTML/CSS', category: 'frontend', level: 95, icon: 'FaHtml5' },
  { name: 'Tailwind CSS', category: 'frontend', level: 90, icon: 'SiTailwindcss' },
  
  // Backend
  { name: 'Node.js', category: 'backend', level: 85, icon: 'FaNodeJs' },
  { name: 'Python', category: 'backend', level: 80, icon: 'FaPython' },
  { name: 'REST API', category: 'backend', level: 90, icon: 'FaServer' },
  { name: 'GraphQL', category: 'backend', level: 75, icon: 'SiGraphql' },
  
  // Tools
  { name: 'Git', category: 'tools', level: 90, icon: 'FaGitAlt' },
  { name: 'Docker', category: 'tools', level: 75, icon: 'FaDocker' },
  { name: 'VS Code', category: 'tools', level: 95, icon: 'FaCode' },
  { name: 'Figma', category: 'tools', level: 80, icon: 'FaFigma' },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Landing Page Profissional',
    description: 'Landing page moderna e responsiva com animações CSS suaves. Hero section impactante, seção de features com cards animados e design totalmente responsivo.',
    image: '/projects/landing.jpg',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
    githubUrl: 'https://github.com/seu-usuario/landing-page',
    featured: true,
  },
  {
    id: 2,
    title: 'Calculadora de IMC',
    description: 'Aplicativo web para cálculo de Índice de Massa Corporal com interface intuitiva, validação de dados e classificação automática. Design moderno com gradientes.',
    image: '/projects/imc.jpg',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'UX/UI'],
    githubUrl: 'https://github.com/seu-usuario/calculadora-imc',
    featured: true,
  },
  {
    id: 3,
    title: 'Todo List App',
    description: 'Gerenciador de tarefas completo com LocalStorage, filtros (todas/pendentes/concluídas), estatísticas em tempo real e interface responsiva com animações.',
    image: '/projects/todo.jpg',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'LocalStorage'],
    githubUrl: 'https://github.com/seu-usuario/todo-list',
    featured: true,
  },
  {
    id: 4,
    title: 'Clone Interface Spotify',
    description: 'Recriação da interface do Spotify com sidebar, player de música, playlists e design responsivo. Foco em UI/UX e animações suaves.',
    image: '/projects/spotify.jpg',
    tags: ['HTML', 'CSS', 'JavaScript', 'Flexbox'],
    githubUrl: 'https://github.com/seu-usuario/spotify-clone',
    featured: false,
  },
  {
    id: 5,
    title: 'Weather App',
    description: 'Aplicativo de previsão do tempo usando API OpenWeather. Mostra temperatura atual, condições climáticas e previsão para os próximos dias.',
    image: '/projects/weather.jpg',
    tags: ['JavaScript', 'API', 'CSS', 'Fetch'],
    githubUrl: 'https://github.com/seu-usuario/weather-app',
    featured: false,
  },
  {
    id: 6,
    title: 'Portfolio Interativo',
    description: 'Site de portfólio pessoal com Next.js, TypeScript e Tailwind CSS. Design moderno, seções animadas e totalmente customizável.',
    image: '/projects/portfolio.jpg',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'React'],
    githubUrl: 'https://github.com/seu-usuario/portfolio',
    featured: false,
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    company: 'Tech Company',
    position: 'Senior Frontend Developer',
    period: '2023 - Presente',
    current: true,
    description: [
      'Desenvolvimento de aplicações web complexas usando React e Next.js',
      'Liderança técnica de equipe de 5 desenvolvedores',
      'Implementação de arquitetura escalável e padrões de código',
      'Mentoria de desenvolvedores juniores',
    ],
  },
  {
    id: 2,
    company: 'Startup XYZ',
    position: 'Full Stack Developer',
    period: '2021 - 2023',
    current: false,
    description: [
      'Desenvolvimento full stack com React, Node.js e PostgreSQL',
      'Criação de APIs RESTful e integração com serviços externos',
      'Implementação de testes automatizados e CI/CD',
      'Colaboração direta com design e produto',
    ],
  },
  {
    id: 3,
    company: 'Agência Digital',
    position: 'Frontend Developer',
    period: '2019 - 2021',
    current: false,
    description: [
      'Desenvolvimento de websites e landing pages responsivas',
      'Trabalho com diversos frameworks: React, Vue.js, Angular',
      'Otimização de performance e SEO',
      'Gestão de múltiplos projetos simultâneos',
    ],
  },
];

