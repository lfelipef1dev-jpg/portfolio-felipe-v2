# Portfolio Felipe V2

Portfolio profissional desenvolvido com Next.js 14, TypeScript e Tailwind CSS.

## 🚀 Tecnologias

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização moderna
- **React Icons** - Ícones
- **Framer Motion** - Animações (opcional)

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Rodar versão de produção
npm start
```

## 🎨 Customização

### 1. Informações Pessoais

Edite o arquivo `data/portfolio.ts` para adicionar suas informações:

- **personalInfo**: Nome, título, bio, email, redes sociais
- **skills**: Suas habilidades e níveis de proficiência
- **projects**: Seus projetos (com links para GitHub e demo)
- **experiences**: Experiências profissionais

### 2. Cores e Estilos

Personalize as cores em `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    // Suas cores primárias
  },
}
```

### 3. Imagens

Adicione suas imagens na pasta `public/`:

- `/public/avatar.jpg` - Sua foto de perfil
- `/public/projects/` - Screenshots dos projetos

## 📱 Responsivo

O site é totalmente responsivo e funciona perfeitamente em:

- 📱 Mobile
- 📱 Tablet
- 💻 Desktop

## 🌐 Deploy

### Vercel (Recomendado)

1. Faça push do código para o GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Importe seu repositório
4. Deploy automático!

### GitHub Pages

```bash
npm run build
# O conteúdo da pasta 'out' pode ser usado no GitHub Pages
```

### Netlify

1. Conecte seu repositório
2. Configure:
   - Build command: `npm run build`
   - Publish directory: `out`

## 📂 Estrutura do Projeto

```
portfolio-felipe-v2/
├── app/                  # App Router do Next.js
│   ├── layout.tsx       # Layout principal
│   ├── page.tsx         # Página inicial
│   └── globals.css      # Estilos globais
├── components/          # Componentes React
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── data/               # Dados estáticos
│   └── portfolio.ts   # Suas informações
├── types/             # TypeScript types
│   └── index.ts
├── public/            # Arquivos estáticos
└── ...configurações
```

## ✨ Features

- ✅ Design moderno e profissional
- ✅ Totalmente responsivo
- ✅ Animações suaves
- ✅ SEO otimizado
- ✅ Performance otimizada
- ✅ TypeScript para type-safety
- ✅ Fácil customização
- ✅ Sem necessidade de banco de dados
- ✅ Deploy simples

## 🎯 Seções

1. **Hero** - Apresentação inicial com CTAs
2. **About** - Sobre você e seus destaques
3. **Skills** - Suas habilidades com filtros
4. **Projects** - Portfolio de projetos
5. **Experience** - Timeline de experiências
6. **Contact** - Formulário de contato
7. **Footer** - Links e informações

## 📝 Licença

Este projeto é de código aberto. Sinta-se livre para usar como base para seu próprio portfolio!

## 🤝 Contribuindo

Sugestões e melhorias são bem-vindas!

---

Desenvolvido com ❤️ por Felipe

