# 🚀 Guia Rápido - Portfolio Felipe V2

## Passos para Começar

### 1. Instalar Dependências

```bash
npm install
```

### 2. Personalizar Suas Informações

Edite o arquivo `data/portfolio.ts` e atualize:

- ✏️ Seu nome, email e localização
- ✏️ Suas skills e níveis
- ✏️ Seus projetos (título, descrição, links)
- ✏️ Suas experiências profissionais
- ✏️ Links das redes sociais

### 3. Adicionar Imagens (Opcional)

Adicione suas imagens em `public/`:

```
public/
  ├── avatar.jpg          # Sua foto
  └── projects/          # Screenshots dos projetos
      ├── ecommerce.jpg
      ├── dashboard.jpg
      └── ...
```

### 4. Rodar em Desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### 5. Build para Produção

```bash
npm run build
npm start
```

## 🎨 Customizar Cores

Edite `tailwind.config.ts` na seção `colors`:

```typescript
primary: {
  500: "#0ea5e9",  // Cor principal
  600: "#0284c7",  // Tom mais escuro
  // ... ajuste conforme necessário
}
```

## 📤 Deploy

### Opção 1: Vercel (Mais Fácil)

1. Faça push para o GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Importe seu repositório
4. Deploy automático! 🎉

### Opção 2: GitHub Pages

1. Execute `npm run build`
2. A pasta `out/` contém os arquivos estáticos
3. Configure GitHub Pages para usar essa pasta

### Opção 3: Netlify

1. Conecte seu repositório no Netlify
2. Build command: `npm run build`
3. Publish directory: `out`

## ✅ Checklist de Personalização

- [ ] Atualizar informações pessoais em `data/portfolio.ts`
- [ ] Adicionar suas skills
- [ ] Adicionar seus projetos reais
- [ ] Adicionar suas experiências
- [ ] Atualizar links das redes sociais
- [ ] Adicionar sua foto em `public/avatar.jpg`
- [ ] Adicionar screenshots dos projetos
- [ ] Testar em diferentes dispositivos (mobile, tablet, desktop)
- [ ] Fazer deploy

## 🆘 Problemas Comuns

### Erro de dependências

```bash
# Limpar cache e reinstalar
rm -rf node_modules package-lock.json
npm install
```

### Erro no build

```bash
# Verificar erros de TypeScript
npm run lint
```

## 📞 Dúvidas?

Consulte o README.md completo para mais informações!

