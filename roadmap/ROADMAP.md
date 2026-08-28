# Roadmap — Currículo Web Lauro Motta (Portfólio Complementar)

> **Fonte verdadeira dos dados:** Catho v2 (export PDF `Curriculo_atualizando_v2.pdf`, atualizado 26/08/2026).
> **Objetivo:** transformar o currículo de "página estática" em "portfólio que prova competência" (GitHub + NimFlow em produção).

---

## 🎯 Visão

Perfil técnico de verdade: lidera infraestrutura **e** constrói software real (NimFlow em produção, multi-agentes Paperclip/OpenClaw, proxy de IA com RBAC + Supabase). Os projetos são a *prova*; o currículo é o *índice*.

---

## 📊 Dados reais fornecidos pelo usuário (métricas aprovadas)

| Métrica | Valor | Onde usar |
|---------|-------|-----------|
| Usuários suportados | **~45 usuários** | V3tex (Supervisor TI) |
| Servidores | **6 Windows Server + 1 Linux** | V3tex |
| MikroTik implantados | **2 unidades** | V3tex |
| Chamados/dia | **±30 (média)** | V3tex / suporte |
| Gestão de orçamento | **Sim** (gestor) | V3tex |
| SQL Server | **Administração** | Princesa |

> ⚠️ Regra: escrever com "~" ou "média de" para manter honestidade. NÃO inventar números.

---

## 📐 Novo Layout (estrutura final)

```
HEADER (full-width, gradiente)
  [FOTO]  Lauro Pereira da Motta
          Supervisor de TI · Analista de Infraestrutura
          📍 Rio de Janeiro/RJ
          📱 (21) 98718-9591 · ✉️ lauropmotta@gmail.com
          🔗 github.com/lauromotta · 🌐 nim-flow.onrender.com
├─ SIDEBAR (30%)
│   📋 Contato & Dados
│   💡 Competências TOP (6) + "outras" colapsável
│   🏅 Certificações (com ano)
│   🌐 Idiomas
└─ CONTENT (70%)
    ⭐ PRETENSÃO (card destaque)
    📋 RESUMO PROFISSIONAL (2 parágrafos + menção projetos)
    💼 EXPERIÊNCIA (com métricas)
    🚀 PROJETOS (NOVO — NimFlow principal)
    🎓 FORMAÇÃO
    📚 CURSOS (agrupados por tema)
```

---

## 📋 Lista de Tarefas

### 🔴 FASE 1 — Dados & Credibilidade (sincronizar com Catho v2)
- [x] 1.1 Cargo → "Analista de Infraestrutura"
- [x] 1.2 Tempo V3tex → "1 ano e 8 meses"
- [x] 1.3 Remover todos os salários (V3tex + HAGAH)
- [x] 1.4 Remover HAGAH (cargo inteiro)
- [x] 1.5 Inglês = Intermediário
- [x] 1.6 Competências → 7 categorias (da v2)

### 🟠 FASE 2 — Layout (novo design)
- [x] 2.1 Header full-width (nome + cargo + contato)
- [x] 2.2 Sidebar 32%→30%, 4 blocos
- [x] 2.3 Competências: top destacado + resto colapsável
- [x] 2.4 Nova seção "Projetos" (NimFlow principal)
- [x] 2.5 Pretensão → card destaque
- [x] 2.6 Cursos agrupados por tema
- [x] 2.7 Quick-nav sticky + item "Projetos"
- [x] 2.8 Foto local (assets/foto.jpg)
- [x] 2.9 Links GitHub + NimFlow no header

### 🟡 FASE 3 — Conteúdo (reescrita)
- [x] 3.1 Bullets com métricas (~45 users, 6+1 serv, 2 MikroTik, ±30 chamados)
- [x] 3.2 Resumo em 2 parágrafos + menção a projetos
- [x] 3.3 Certificações com ano
- [x] 3.4 Descrição NimFlow (stack + problema resolvido)

### 🟢 FASE 4 — Técnico / Deploy
- [x] 4.1 Self-host Poppins + font-display: swap (woff2 em assets/fonts)
- [x] 4.2 FA 5 → FA 6 (cdnjs 6.5.2, classes compatíveis)
- [x] 4.3 Meta tags SEO + OG + Twitter + JSON-LD Person
- [x] 4.4 Favicon + manifest.json + apple-touch-icon (icon-192.png)
- [x] 4.5 curriculos.html → index.html (GitHub Pages)
- [x] 4.6 prefers-reduced-motion (feito na Fase 2)
- [x] 4.7 Remover execCommand (feito na Fase 2)

### 🔵 FASE 5 — PDF & Analytics
- [ ] 5.1 PDF no CI (GitHub Actions + Puppeteer)
- [ ] 5.2 Analytics Umami/Plausible
- [ ] 5.3 Domínio próprio (opcional)

> **Deploy**: habilitar GitHub Pages na branch `main` (raiz `/`) para servir em `https://lauromotta.github.io/Curriculo-CV/`. As meta tags OG/canonical já apontam para esse domínio.

---

## 🔗 Links do currículo
- GitHub: https://github.com/lauromotta (só perfil, sem listar repositórios)
- NimFlow (produção): https://nim-flow.onrender.com/

---

## 💡 Nota sobre atualização futura
Quando os projetos **"RH/DP"** e **"Help Desk"** forem concluídos, o currículo deve ser atualizado com eles na seção "Projetos".