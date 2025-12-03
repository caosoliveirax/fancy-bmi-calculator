# ⚖️ Fancy BMI Calculator

![CI Pipeline](https://github.com/caosoliveirax/fancy-bmi-calculator/actions/workflows/cy.yml/badge.svg)
[![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app=fancy-bmi-calculator)](https://fancy-bmi-calculator-carlos.vercel.app)

Uma calculadora de IMC que não apenas calcula, mas reage.

Esta aplicação web moderna calcula o Índice de Massa Corporal (IMC) e
adapta toda a sua interface visualmente para refletir o resultado.

## 📸 Preview
![preview](https://github.com/user-attachments/assets/84f84176-bd0d-4a40-91ee-67ce0c301cc5)

## 🚀 Funcionalidades

🎨 **Temas Reativos:** A aplicação possui um motor de
temas integrado ao Redux. Ao calcular o IMC, o tema global (cores de
fundo, botões, cards) muda instantaneamente para representar a categoria
de saúde (ex: Azul para "Abaixo do peso", Verde para "Normal", Vermelho
para "Obesidade").

🔢 **Input Masking:** Entradas de dados controladas e formatadas para
garantir a precisão do cálculo.

♿ **Acessibilidade (a11y):** Uso de regiões aria-live para leitores de
tela, garantindo que o resultado seja anunciado para todos os usuários.

📱 **Totalmente Responsivo:** Layout fluido que se adapta de celulares a
desktops, com animações suaves de entrada.

🧪 **Cobertura de Testes:** Suíte robusta incluindo testes unitários
(Vitest) e testes ponta a ponta (Cypress).

## 🛠️ Tecnologias & Ferramentas

### **Core**

-   **React 19 & Vite:** Performance e DX (Developer Experience) de
    ponta.
-   **TypeScript:** Tipagem estática rigorosa para segurança do código.

### **Estado & Estilo**

-   **Redux Toolkit:** Gerenciamento de estado global para controlar os
    resultados do IMC e a injeção dinâmica de temas.
-   **Styled-components:** CSS-in-JS para componentização e aplicação
    dos temas.

### **Qualidade de Código (QA)**

-   **Vitest & Testing Library:** Testes unitários e de integração.
-   **Cypress:** Testes End-to-End (E2E) simulando fluxos reais do
    usuário.
-   **GitHub Actions:** Pipeline de CI configurado para rodar linting e
    testes a cada push.

## 🏗️ Estrutura do Projeto

A arquitetura foca na separação de responsabilidades:

    src/
    ├── components/      # Componentes isolados (CalculatorCard, ResultCard, etc.)
    ├── store/           # Configuração do Redux (Slices de BMI e Theme)
    ├── themes/          # Definição dos tokens de design para cada categoria de IMC
    ├── utils/           # Funções puras de cálculo e lógica de negócios
    ├── styles/          # Estilos globais
    └── ...

## 💻 Como Executar

**Pré-requisitos:** Node.js (v20+) e pnpm.

### Clone o repositório:

    git clone https://github.com/caosoliveirax/fancy-bmi-calculator.git
    cd fancy-bmi-calculator

### Instale as dependências:

    pnpm install

### Inicie o servidor de desenvolvimento:

    pnpm dev

Acesse **http://localhost:5173** no seu navegador.

## 🧪 Testes

### Testes Unitários (Vitest)

Para rodar os testes de componentes e funções utilitárias:

    pnpm test
    # ou para ver a cobertura
    pnpm test:coverage

### Testes E2E (Cypress)

Para abrir a interface do Cypress e ver os testes rodando no navegador:

    npx cypress open

> Certifique-se de que a aplicação está rodando (`pnpm dev`) antes de
> iniciar o Cypress, ou utilize o script de CI.

## 📝 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo LICENSE para
mais detalhes.
