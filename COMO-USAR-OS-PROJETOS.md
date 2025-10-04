# 🎯 Como Usar os Projetos Criados

## ✅ O que foi criado para você:

### 📁 3 Projetos Funcionais Completos:

1. **Landing Page Profissional** (`projects/landing-page/`)
   - Design moderno com animações
   - 100% responsivo
   - Hero section + Features + Footer

2. **Calculadora de IMC** (`projects/calculadora-imc/`)
   - Cálculo automático
   - Interface colorida e interativa
   - Validação de dados

3. **Todo List App** (`projects/todo-list/`)
   - Adicionar, editar, excluir tarefas
   - Filtros (todas/pendentes/concluídas)
   - Salva no navegador (LocalStorage)
   - Estatísticas em tempo real

## 🚀 Testando os Projetos

### Passo 1: Abrir Localmente

```bash
# Navegue até a pasta do projeto
cd projects/landing-page

# Abra no navegador (Windows)
start index.html

# Ou clique duas vezes no arquivo index.html
```

### Passo 2: Ver Funcionando

Cada projeto abre no navegador e funciona imediatamente!

## 📤 Hospedando no GitHub (FÁCIL!)

### Opção Mais Simples - GitHub Pages:

1. **Crie um repositório novo no GitHub:**
   - Nome: `landing-page` (ou outro nome)
   - Public

2. **Faça upload dos arquivos:**
   ```bash
   cd projects/landing-page
   git init
   git add .
   git commit -m "Primeiro commit"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/landing-page.git
   git push -u origin main
   ```

3. **Ative GitHub Pages:**
   - No repositório: Settings → Pages
   - Source: "Deploy from a branch"
   - Branch: main → / (root)
   - Save

4. **Pronto!** 
   - Acesse: `https://seu-usuario.github.io/landing-page`

### Sem usar Git? Use Vercel!

1. Acesse [vercel.com](https://vercel.com)
2. Arraste a pasta `landing-page` inteira
3. Deploy automático em 10 segundos!

## 🔗 Atualizando Seu Portfólio

Depois de hospedar, atualize o arquivo `data/portfolio.ts`:

```typescript
export const projects: Project[] = [
  {
    id: 1,
    title: 'Landing Page Profissional',
    description: '...',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    githubUrl: 'https://github.com/SEU-USUARIO/landing-page', // ← Cole aqui
    liveUrl: 'https://seu-usuario.github.io/landing-page',    // ← E aqui
    featured: true,
  },
  // Repita para os outros projetos...
];
```

## 📸 Screenshots (Opcional mas Recomendado)

Para deixar ainda mais profissional:

1. Abra cada projeto no navegador
2. Tire um screenshot (Windows: Win + Shift + S)
3. Salve em `public/projects/` com nomes:
   - `landing.jpg`
   - `imc.jpg`
   - `todo.jpg`

## ✨ Checklist Final

- [ ] Testei todos os 3 projetos localmente
- [ ] Escolhi cores e personalizei (opcional)
- [ ] Criei 3 repositórios no GitHub (um para cada)
- [ ] Fiz upload de cada projeto
- [ ] Ativei GitHub Pages nos 3 repositórios
- [ ] Atualizei os links no `data/portfolio.ts`
- [ ] Tirei screenshots dos projetos
- [ ] Testei os links no meu portfólio

## 🎨 Personalizando (Opcional)

### Mudar Cores da Landing Page:

Abra `projects/landing-page/index.html` e procure por:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

Troque pelas suas cores favoritas!

### Sites para escolher cores:
- [coolors.co](https://coolors.co)
- [colorhunt.co](https://colorhunt.co)

## 💡 Dicas Extras

1. **Nomes dos Repos:** Use nomes descritivos
   - ✅ `landing-page-moderna`
   - ✅ `calculadora-imc-app`
   - ❌ `projeto1`

2. **README:** Cada projeto já tem README pronto!

3. **Mobile:** Todos os projetos são responsivos

4. **Código Limpo:** Todo código está comentado e organizado

## 🆘 Problemas Comuns

**"Não aparece no GitHub Pages"**
- Aguarde 2-3 minutos após ativar
- Certifique-se que o arquivo se chama `index.html`

**"Como adiciono imagens?"**
- Crie pasta `images/` no projeto
- Use `<img src="images/foto.jpg">`

**"Posso personalizar?"**
- SIM! Todos os projetos são seus agora
- Edite à vontade

## 🎯 Resultado Final

Você terá:
- ✅ 3 projetos funcionais e hospedados
- ✅ 3 repositórios no GitHub
- ✅ Links ativos no seu portfólio
- ✅ Código real para mostrar aos recrutadores

---

**Pronto para impressionar! 🚀**

