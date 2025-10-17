# Calculadora de IMC Dinâmica

Uma aplicação web moderna para calcular o Índice de Massa Corporal (IMC). A interface é simples, intuitiva e reage dinamicamente ao resultado, alterando seu tema e cores para fornecer um feedback visual imediato sobre a classificação de saúde do usuário.

---

## Objetivo

Este projeto foi construído como uma forma de praticar e demonstrar habilidades no ecossistema React, aplicando conceitos de componentização, gerenciamento de estado global, estilização dinâmica e boas práticas de desenvolvimento com TypeScript. O foco foi criar uma experiência de usuário fluida e agradável, indo além de uma simples calculadora.

---

## Principais Funcionalidades

* **Cálculo de IMC em Tempo Real:** Insira seu peso e altura para obter o resultado instantaneamente.
* **Classificação Automática:** O resultado é classificado em categorias como "Abaixo do peso", "Normal", "Sobrepeso", etc., com base nos padrões da Organização Mundial da Saúde (OMS).
* **Temas Dinâmicos:** A interface da aplicação muda de cor de acordo com a categoria do resultado do IMC, criando uma experiência visual única e informativa.
* **Feedback Personalizado:** Para cada classificação, uma mensagem customizada é exibida, oferecendo um contexto sobre o resultado.
* **Animações e Transições:** Componentes aparecem com animações suaves, tornando a navegação mais fluida e moderna.

---

## Tecnologias Utilizadas

* **Frontend:**
    * **React:** Biblioteca para construção da interface.
    * **TypeScript:** Garante um código mais seguro e manutenível.
    * **Vite:** Build tool de alta performance para desenvolvimento.

* **Gerenciamento de Estado:**
    * **Redux Toolkit:** Para um gerenciamento de estado global previsível e organizado (IMC, tema atual).

* **Estilização:**
    * **Styled-components:** Para criar componentes estilizados e um sistema de temas dinâmico.

* **Qualidade de Código:**
    * **ESLint e Prettier:** Para garantir a padronização e a qualidade do código.

---

## Como Executar o Projeto

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/caosoliveirax/fancy-bmi-calculator.git
    ```

2.  **Acesse o diretório do projeto:**
    ```bash
    cd fancy-bmi-calculator
    ```

3.  **Instale as dependências:**
    ```bash
    pnpm install
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    pnpm run dev
    ```

    Após executar o último comando, a aplicação estará disponível em `http://localhost:5173`.

---

## Scripts Disponíveis

* `pnpm dev`: Inicia o servidor de desenvolvimento.
* `pnpm build`: Compila o projeto para produção.
* `pnpm lint`: Executa o linter para encontrar problemas no código.
* `pnpm format`: Formata o código automaticamente com o Prettier.

---

## Futuras Melhorias

* **Layout Responsivo:** Adaptar a interface para uma visualização otimizada em dispositivos móveis.

---

## Créditos

* As classificações de IMC utilizadas como referência são baseadas nas diretrizes da [Organização Mundial da Saúde (OMS)](https://www.who.int/health-topics/obesity#tab=tab_1).
