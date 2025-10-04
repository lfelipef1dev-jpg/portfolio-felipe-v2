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
    title: 'Dashboard Analytics Pro',
    description: 'Dashboard profissional com gráficos interativos usando Chart.js, cards de métricas animados, tabela de atividades e design dark mode moderno. Estatísticas em tempo real.',
    image: '/projects/dashboard.jpg',
    tags: ['JavaScript', 'Chart.js', 'CSS3', 'Analytics'],
    githubUrl: 'https://github.com/lfelipef1dev-jpg/portfolio-felipe-v2',
    liveUrl: '/projects/dashboard-analytics/index.html',
    featured: true,
  },
  {
    id: 2,
    title: 'E-commerce TechStore',
    description: 'Loja virtual completa com carrinho de compras funcional, busca de produtos, categorias, sidebar de carrinho e sistema de checkout. Interface moderna e responsiva.',
    image: '/projects/ecommerce.jpg',
    tags: ['JavaScript', 'E-commerce', 'LocalStorage', 'UX/UI'],
    githubUrl: 'https://github.com/lfelipef1dev-jpg/portfolio-felipe-v2',
    liveUrl: '/projects/ecommerce-store/index.html',
    featured: true,
  },
  {
    id: 3,
    title: 'TaskFlow - Kanban Board',
    description: 'Gerenciador de projetos estilo Kanban com drag-and-drop, criação de tarefas, sistema de prioridades, assignees e persistência de dados. Interface profissional.',
    image: '/projects/kanban.jpg',
    tags: ['JavaScript', 'Drag & Drop', 'LocalStorage', 'Kanban'],
    githubUrl: 'https://github.com/lfelipef1dev-jpg/portfolio-felipe-v2',
    liveUrl: '/projects/task-manager/index.html',
    featured: true,
  },
  {
    id: 4,
    title: 'Sistema de Autenticação',
    description: 'Sistema completo de login e cadastro com validação, hash de senhas, JWT tokens e dashboard protegido. Segurança e UX impecáveis.',
    image: '/projects/auth.jpg',
    tags: ['JavaScript', 'Security', 'JWT', 'Validation'],
    githubUrl: 'https://github.com/lfelipef1dev-jpg/portfolio-felipe-v2',
    featured: false,
  },
  {
    id: 5,
    title: 'Real-time Chat App',
    description: 'Aplicativo de chat em tempo real com WebSockets, múltiplas salas, typing indicators, emojis e notificações. Interface moderna tipo Discord.',
    image: '/projects/chat.jpg',
    tags: ['WebSocket', 'Real-time', 'JavaScript', 'Chat'],
    githubUrl: 'https://github.com/lfelipef1dev-jpg/portfolio-felipe-v2',
    featured: false,
  },
  {
    id: 6,
    title: 'Finance Tracker',
    description: 'Controle financeiro pessoal com gráficos de gastos, categorização, relatórios mensais e metas. Dashboard completo para suas finanças.',
    image: '/projects/finance.jpg',
    tags: ['JavaScript', 'Chart.js', 'Finance', 'Dashboard'],
    githubUrl: 'https://github.com/lfelipef1dev-jpg/portfolio-felipe-v2',
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

