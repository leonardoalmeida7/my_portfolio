# Meu Portfólio

Portfólio pessoal desenvolvido com React, Vite e CSS moderno para apresentar minhas habilidades, projetos e informações de contato.

## Sobre o projeto

Este projeto é um site de portfólio profissional com foco em:

- apresentação pessoal e profissional;
- seção de habilidades e tecnologias;
- showcase de projetos com links para demonstração e código;
- área de contato para oportunidades e parcerias.

A interface foi construída com uma abordagem moderna, com animações leves e layout responsivo para diferentes dispositivos.

## Tecnologias utilizadas

- React 19
- Vite 7
- JavaScript
- CSS personalizado
- GSAP para animações
- React Icons
- GitHub Pages para deploy

## Estrutura do projeto

```text
src/
├── components/
│   ├── header/
│   ├── main/
│   ├── footer/
│   └── ui/
├── data/
├── hooks/
├── styles/
└── utils/
```

## Funcionalidades

- navegação com seções de sobre, projetos e contato;
- cards de projetos com tecnologias utilizadas;
- área de habilidades com níveis de domínio;
- design responsivo;
- integração com publicação em GitHub Pages.

## Pré-requisitos

Antes de iniciar, certifique-se de ter instalado:

- Node.js 18+
- npm ou pnpm

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/leonardoalmeida7/my_portfolio.git
```

2. Acesse a pasta do projeto:

```bash
cd my_portfolio
```

3. Instale as dependências:

```bash
npm install
```

## Scripts disponíveis

No diretório do projeto, você pode executar:

```bash
npm run dev
```

Inicia o servidor de desenvolvimento do Vite.

```bash
npm run build
```

Gera a versão de produção na pasta `dist`.

```bash
npm run preview
```

Prévisualiza o build de produção localmente.

```bash
npm run lint
```

Executa a análise estática com ESLint.

```bash
npm run deploy
```

Publica a aplicação na pasta `dist` para GitHub Pages.

## Deploy

Este projeto está configurado com `homepage` no arquivo `package.json` para publicação via GitHub Pages. Para realizar o deploy:

```bash
npm run build
npm run deploy
```

## Autor

Leonardo Almeida

## Contato

- GitHub: https://github.com/leonardoalmeida7
- LinkedIn: https://linkedin.com/in/seu-perfil
- Email: leonardoalmeida2124@gmail.com

## Observação

Os dados do portfólio, como informações pessoais, projetos e skills, estão centralizados no arquivo `src/data/portfolio.js`, facilitando manutenção e futuras alterações.
