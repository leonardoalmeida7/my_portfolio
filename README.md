# 🚀 Portfólio Pessoal - Versão Refatorada

Um portfólio moderno e responsivo desenvolvido com React, GSAP e uma arquitetura escalável.

## ✨ Características

- **Arquitetura Escalável**: Estrutura de pastas organizada e componentes reutilizáveis
- **Animações Fluidas**: Implementadas com GSAP e ScrollTrigger
- **Design Responsivo**: Funciona perfeitamente em todos os dispositivos
- **Componentes Reutilizáveis**: Sistema de design consistente
- **Hooks Customizados**: Lógica reutilizável para animações e formulários
- **Validação de Formulários**: Sistema robusto de validação
- **Acessibilidade**: Focado em experiência de usuário inclusiva

## 🏗️ Estrutura do Projeto

```
src/
├── components/           # Componentes organizados por funcionalidade
│   ├── header/          # Header e navegação
│   ├── main/            # Seções principais (Hero, About, Projects, Contact)
│   ├── footer/          # Rodapé
│   └── ui/              # Componentes reutilizáveis
│       ├── Button/      # Componente de botão
│       ├── SkillTag/    # Tags de habilidades
│       └── ProjectCard/ # Cards de projetos
├── hooks/               # Hooks customizados
│   ├── useTypewriter.js # Hook para efeito de máquina de escrever
│   ├── useScrollAnimation.js # Hook para animações de scroll
│   └── useForm.js       # Hook para gerenciamento de formulários
├── data/                # Dados centralizados
│   └── portfolio.js     # Informações pessoais e conteúdo
├── constants/           # Constantes da aplicação
│   └── index.js         # Configurações e constantes
├── utils/               # Utilitários
│   └── index.js         # Funções auxiliares
├── styles/              # Estilos globais
│   └── globals.css      # Estilos e reset global
└── assets/              # Recursos estáticos
    └── images/          # Imagens do projeto
```

## 🛠️ Tecnologias Utilizadas

- **React 19** - Biblioteca principal
- **GSAP** - Animações avançadas
- **React Icons** - Ícones
- **Vite** - Build tool moderna
- **CSS Custom Properties** - Variáveis CSS organizadas

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/leonardoalmeida7/my_portfolio.git

# Entre no diretório
cd my_portfolio

# Instale as dependências
npm install

# Execute em modo desenvolvimento
npm run dev

# Build para produção
npm run build
```

## 🎨 Componentes Principais

### Button

Componente de botão reutilizável com múltiplas variantes:

- `primary` - Botão principal com gradiente
- `secondary` - Botão secundário com borda
- `outline` - Botão com contorno
- `ghost` - Botão transparente
- `skill` - Botão específico para tags de habilidades

### ProjectCard

Card de projeto com informações organizadas:

- Imagem do projeto
- Título e descrição
- Tags de tecnologias
- Links para demo e código

### SkillTag

Tag reutilizável para exibir habilidades com diferentes tamanhos.

## 🎯 Hooks Customizados

### useTypewriter

Hook para criar efeito de máquina de escrever com configurações personalizáveis.

### useScrollAnimation

Hook para animações baseadas em scroll com GSAP e ScrollTrigger.

### useForm

Hook completo para gerenciamento de formulários com validação.

## 🎨 Sistema de Design

### Cores Organizadas

- Cores primárias, de acento e tons de cinza
- Sistema de sombras padronizado
- Variáveis CSS bem estruturadas

### Tipografia

- Escalas de tamanho responsivas
- Hierarquia clara de headings
- Espaçamentos consistentes

### Responsividade

- Mobile-first approach
- Breakpoints organizados
- Componentes adaptativos

## 🚀 Melhorias Implementadas

1. **Separação de Responsabilidades**

   - Dados separados da lógica de apresentação
   - Componentes focados em uma única responsabilidade

2. **Reutilização de Código**

   - Componentes UI genéricos
   - Hooks customizados reutilizáveis
   - Utilitários compartilhados

3. **Manutenibilidade**

   - Estrutura de pastas clara
   - Nomenclatura consistente
   - Documentação inline

4. **Performance**

   - Componentes otimizados
   - Carregamento eficiente de recursos
   - Animações performáticas

5. **Acessibilidade**
   - Navegação por teclado
   - Estados de focus visíveis
   - Semântica HTML adequada

## 📱 Deploy

```bash
# Build e deploy para GitHub Pages
npm run build
npm run deploy
```

## 🤝 Contribuição

Sinta-se livre para contribuir com melhorias:

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

**Desenvolvido com ❤️ por [Leonardo Almeida](https://github.com/leonardoalmeida7)**

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
