// Dados do portfólio centralizados
export const personalInfo = {
  name: "Leonardo",
  role: "Full Stack",
  title: "Desenvolvedor",
  description:
    "Criando experiências digitais incríveis com código limpo e design elegante. Especializado em tecnologias modernas.",
  email: "leonardoalmeida2124@gmail.com",
  phone: "+55 (43) 99626-9077",
  github: "https://github.com/leonardoalmeida7",
  linkedin: "https://linkedin.com/in/seu-perfil",
};

export const aboutMe = {
  title: "Sobre Mim",
  subtitle: "Desenvolvedor apaixonado por tecnologia",
  description: [
    "Com mais de 5 anos de experiência em desenvolvimento web, transformo ideias em soluções digitais inovadoras. Especializado em criar aplicações escaláveis e interfaces elegantes.",
    "Sempre em busca de aprender novas tecnologias e aplicar as melhores práticas de desenvolvimento para entregar produtos de alta qualidade.",
  ],
};

export const skills = [
  { name: "React", level: 90, category: "frontend" },
  { name: "Next.js", level: 85, category: "frontend" },
  { name: "TypeScript", level: 80, category: "language" },
  { name: "PHP", level: 75, category: "backend" },
  { name: "Node.js", level: 85, category: "backend" },
  { name: "MySQL", level: 70, category: "database" },
  { name: "HTML", level: 95, category: "frontend" },
  { name: "CSS", level: 90, category: "frontend" },
  { name: "JavaScript", level: 90, category: "language" },
  { name: "Bootstrap", level: 80, category: "frontend" },
];

export const projects = [
  {
    id: 1,
    title: "Projeto Quiz",
    description:
      "Aplicação interativa de quiz desenvolvida com tecnologias modernas. Interface intuitiva e experiência de usuário otimizada.",
    image: "/my_portfolio/images/projects/preview.jpg",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    demoUrl: "https://leonardoalmeida7.github.io/Quiz_app/",
    codeUrl: "https://github.com/leonardoalmeida7/Quiz_app",
    featured: true,
  },
  {
    id: 2,
    title: "Audiophile E-commerce",
    description:
      "E-commerce projetado para amantes de música, com uma interface elegante e recursos avançados.",
    image: "/my_portfolio/images/projects/Screenshot.png",
    technologies: [
      "React",
      "Bootstrap",
      "JavaScript",
      "React Router",
      "Context API",
    ],
    demoUrl: "https://leonardoalmeida7.github.io/audiophile_ecommerce_website/",
    codeUrl: "https://github.com/leonardoalmeida7/audiophile_ecommerce_website",
    featured: false,
  },
  {
    id: 3,
    title: "Weather Now",
    description:
      "Plataforma completa de previsão do tempo com integração de APIs e interface responsiva.",
    image: "/my_portfolio/images/projects/WeatherApp.png",
    technologies: ["React", "JavaScript", "Bootstrap", "API"],
    demoUrl: "https://leonardoalmeida7.github.io/weather_now/",
    codeUrl: "https://github.com/leonardoalmeida7/weather_now",
    featured: false,
  },
  {
    id: 4,
    title: "Notes App",
    description:
      "Aplicação Full Stack para gerenciamento de notas com autenticação de usuários e armazenamento seguro.",
    image: "/my_portfolio/images/projects/Preview-NotesApp.png",
    technologies: ["React", "MongoDB", "Node.js", "Express", "JWT", "Mongoose"],
    demoUrl: "https://frontend-notesapp-taupe.vercel.app/login",
    codeUrl: "https://github.com/leonardoalmeida7/frontend_notesapp",
    featured: false,
  },
];

export const navigationItems = [
  { label: "Sobre", href: "#about", id: "about" },
  { label: "Projetos", href: "#projects", id: "projects" },
  { label: "Contato", href: "#contact", id: "contact" },
];

export const contactInfo = {
  title: "Vamos Trabalhar Juntos",
  subtitle: "Entre em Contato",
  description:
    "Tenho uma ideia incrível? Precisa de um desenvolvedor para seu projeto? Vamos conversar e transformar sua visão em realidade!",
};
