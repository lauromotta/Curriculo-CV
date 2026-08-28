# Currículo - Lauro Motta

Este projeto contém a versão digital do currículo de Lauro Pereira da Motta, funcionando como **portfólio complementar**: além dos dados profissionais, destaca projetos reais em produção (NimFlow AI Proxy) e o perfil no GitHub.

## Destaques
- **Header de impacto** full-width com foto local, nome, cargo e contato (incl. GitHub e NimFlow).
- **Sidebar enxuta (30%)** com competências essenciais destacadas, certificações e idiomas.
- **Seção "Projetos"** com o NimFlow como projeto principal, badges de stack e links clicáveis.
- **Modo claro/escuro** com persistência no navegador e detecção de `prefers-color-scheme`.
- **Navegação sticky** com destaque automático da seção ativa (IntersectionObserver).
- **Impressão/PDF** otimizada com `print.css`, removendo elementos interativos.
- **Acessibilidade** com `aria-*`, `prefers-reduced-motion` e semântica HTML5.

## Estrutura
- `curriculos.html`: markup principal do currículo.
- `css/style.css`: estilos globais e responsivos (header, sidebar, projetos, cursos).
- `css/print.css`: ajustes específicos para impressão/PDF.
- `js/main.js`: interatividade (tema, navegação, clipboard, voltar ao topo).
- `assets/foto.jpg`: foto de perfil hospedada localmente.
- `roadmap/ROADMAP.md`: plano de evolução do projeto.

## Como usar
Abra `curriculos.html` em qualquer navegador moderno. Para exportar em PDF, use o botão de download no header e, no diálogo de impressão, escolha "Salvar como PDF".