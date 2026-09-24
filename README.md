# 🚀 Projeto Next.js - Integrações de APIs

Este repositório reúne uma aplicação moderna desenvolvida em **Next.js** que consome dados de APIs externas (como a **DummyJSON**), demonstrando práticas atualizadas de renderização no ecossistema React, estilização responsiva e componentes reutilizáveis.

---

## 📌 Funcionalidades

- **Listagem de Produtos:** Exibição dinâmica de itens consumidos via API com paginação/grade responsiva.
- **Página de Detalhes Dinâmica (`/produtos/[id]`):** Carregamento de dados de produtos específicos através de *Server Components*.
- **Cartões Reutilizáveis:** Componente `CardProduto` enxuto com interações visuais (*hover*, sombras, transições).
- **Tratamento de Dados Incompletos:** Resiliência no layout com respostas amigáveis (*fallbacks*) caso faltem dados da API.
- **Design Responsivo & Moderno:** Interface adaptável para dispositivos móveis e computadores.

---

## 🛠️ Tecnologias Utilizadas

- **[Next.js](https://nextjs.org/):** Framework React com suporte a *App Router* e *Server Components*.
- **[React](https://react.dev/):** Biblioteca principal para construção da interface.
- **CSS3 Pure:** Estilização customizada focada em performance e layout flexível (Flexbox e Grid).
- **[DummyJSON API](https://dummyjson.com/):** Fonte de dados para produtos, categorias e detalhes.

---

## 📁 Estrutura do Projeto

```text
src/
├── app/
│   ├── produtos/
│   │   ├── page.jsx           # Listagem principal de produtos
│   │   └── [id]/
│   │       ├── page.jsx       # Página de detalhes dinâmica (Server Component)
│   │       └── produto.css    # Estilos específicos da página de detalhes
│   └── page.jsx               # Página inicial do projeto
└── components/
    └── CardProduto/
        ├── index.jsx          # Componente reutilizável do cartão
        └── cardProduto.css    # Estilos do cartão
