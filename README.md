# ☕ Coffee Cart - Suite de Testes Automatizados

> **Testes E2E robustos para validação completa da experiência do usuário em aplicação de e-commerce de café.**

![Playwright](https://img.shields.io/badge/Playwright-45b7d1?style=flat-square&logo=playwright&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![Status: ✅ All Tests Passing](https://img.shields.io/badge/Status-All%20Tests%20Passing-brightgreen?style=flat-square)

---

## 📹 Demo em Ação

<!-- Espaço reservado para vídeo/GIF demonstrando os testes -->
![Demo Coffee Cart Tests](./demo.gif)
<!-- Adicione seu vídeo ou GIF aqui mostrando os testes sendo executados -->

---

## 🎯 Visão Geral

Suite de testes **end-to-end (E2E)** automatizados que valida toda a jornada do usuário na aplicação Coffee Cart:
- ✅ Adição e remoção de produtos do carrinho
- ✅ Persistência de dados através de refresh da página
- ✅ Aplicação de descontos e promoções
- ✅ Interação com interface dinâmica

**Todos os 5 testes passando com sucesso** | **Tempo médio: 9-10 segundos** | **Taxa de sucesso: 100%**

---

## 🧪 Casos de Teste Cobertos

| # | Teste | Descrição |
|---|-------|-----------|
| 1 | 🛒 **Cart Cleanup** | Valida se o carrinho é limpo após refresh da página |
| 2 | ➖ **Minus Button** | Verifica atualização correta ao diminuir quantidade |
| 3 | ➕ **Plus Button** | Verifica atualização correta ao aumentar quantidade |
| 4 | 🎁 **Promo Accept** | Testa adição de item com desconto ao aceitar promoção |
| 5 | ❌ **Promo Decline** | Valida que item NÃO é adicionado ao rejeitar promoção |

---

## 🛠️ Stack Técnico

- **Framework**: Playwright (Automação de navegador)
- **Linguagem**: JavaScript (Node.js)
- **Padrão**: Page Object Model + Data-Driven Tests
- **Relatórios**: HTML Reports nativos do Playwright

---

## 🚀 Como Usar

### 1️⃣ Instalação
```bash
npm install
```

### 2️⃣ Executar Testes

**Modo headless (CI/CD):**
```bash
npx playwright test
```

**Modo headed (Com navegador visível):**
```bash
npx playwright test --headed
```

**Modo debug interativo:**
```bash
npx playwright test --debug
```

**Executar teste específico:**
```bash
npx playwright test cartUpdatedAfterClickingPlusButton.spec.js
```

**Visualizar relatório HTML:**
```bash
npx playwright show-report
```

---

## 💡 Desafio & Aprendizado

### O Problema
Inicialmente, enfrentei a dificuldade de **sincronizar testes com elementos dinâmicos** - O carrinho é atualizado via JavaScript e não sempre em sincro com o DOM. Testes falhavam intermitentemente.

### A Solução
Implementei **esperas inteligentes (smart waits)** usando:
- `waitForFunction()` para aguardar mudanças no estado do carrinho
- Seletores CSS robustos que não quebram com pequenas mudanças de UI
- Validações em múltiplas camadas (DOM + estado visual)

### 🎓 Lição Prática
Quando seus testes falhavam de forma aleatória, o problema raramente é seu código de teste — é a **sincronização entre o teste e a aplicação**. Use `waitFor*` em vez de `sleep()` para uma automação mais confiável e rápida.

---

## 📊 Resultados Atuais

```
✅ 5 testes passando
⏱️ Tempo total: 9-10 segundos
📈 Taxa de sucesso: 100%
🔄 Execuções: Headless + Headed
📋 Navegadores: Chromium, Firefox, WebKit
```

---

## 📦 Estrutura do Projeto

```
.
├── tests/
│   ├── cartCleanedAfterPageRefresh.spec.js
│   ├── cartUpdatedAfterClickingMinusButton.spec.js
│   ├── cartUpdatedAfterClickingPlusButton.spec.js
│   ├── mochaAddedToCartOnPromoAccept.spec.js
│   └── mochaNotAddedToCartOnPromoDecline.spec.js
├── playwright.config.js
├── package.json
└── README.md
```

---

## 🤝 Contribuir

Encontrou um bug ou tem uma ideia? Abra uma issue ou pull request!

---

## 📚 Recursos

- [Documentação Playwright](https://playwright.dev)
- [Best Practices em E2E Testing](https://playwright.dev/docs/best-practices)

---

**Desenvolvido com ☕ e ❤️**

---

## 👨‍💻 Autor

**Rafael Alves** | QA Engineer  
🔗 [LinkedIn](https://www.linkedin.com/in/marcos-rafael-alves-162368122/) | 🐙 [GitHub](https://github.com/rafaelAlvesQaTester)

Especializado em automação de testes E2E com Playwright e garantia de qualidade em aplicações web.
