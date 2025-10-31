// Arquivo de configuração do projeto
export const PROJECT_CONFIG = {
  name: "Portfólio Leonardo Almeida",
  version: "2.0.0",
  author: "Leonardo Almeida",
  description: "Portfólio pessoal moderno e escalável",

  // URLs do projeto
  urls: {
    github: "https://github.com/leonardoalmeida7/my_portfolio",
    live: "https://leonardoalmeida7.github.io/my_portfolio/",
    repository: "leonardoalmeida7/my_portfolio",
  },

  // Configurações de desenvolvimento
  development: {
    port: 5173,
    host: "localhost",
  },

  // Configurações de build
  build: {
    outDir: "dist",
    sourcemap: true,
  },
};

// Configurações de SEO
export const SEO_CONFIG = {
  title: "Leonardo Almeida - Desenvolvedor Full Stack",
  description:
    "Portfólio de Leonardo Almeida, desenvolvedor Full Stack especializado em React, Node.js e tecnologias modernas.",
  keywords:
    "desenvolvedor, full stack, react, nodejs, javascript, typescript, portfolio",
  author: "Leonardo Almeida",
  image: "/preview.jpg",
  url: "https://leonardoalmeida7.github.io/my_portfolio/",
};
