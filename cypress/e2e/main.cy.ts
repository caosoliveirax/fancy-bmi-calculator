/// <reference types="cypress" />

describe('Deve simular fluxos de usuário', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Simulando o fluxo principal (Happy path)', () => {
    cy.get('main').should('have.css', 'background-color', 'rgb(219, 238, 243)')
    cy.contains('Calculadora de IMC').should('be.visible')

    cy.get('#height').type('170')
    cy.get('#weight').type('60')

    cy.contains('button', 'Calcular').click()

    cy.contains('Seu IMC é de:').should('be.visible')
    cy.contains('20.76').should('be.visible')
    cy.contains('Normal').should('be.visible')
    cy.contains('Parabéns! Você está com o peso ideal.').should('be.visible')

    cy.contains('Classificações').should('be.visible')

    cy.contains('button', 'Calcular').should('not.exist')
    cy.get('button[aria-label="Retornar a calculadora"]').should('be.visible')

    cy.get('main').should('have.css', 'background-color', 'rgb(80, 154, 88)')
  })

  it('Simulando o fluxo de validação (erros)', () => {
    cy.contains('button', 'Calcular').click()

    cy.get('p[role="alert"]').should('have.length', 2)
    cy.contains('Altura inválida!').should('be.visible')
    cy.contains('Peso inválido!').should('be.visible')

    cy.contains('Seu IMC é de:').should('not.exist')

    cy.get('#height').type('0')
    cy.get('#weight').type('90')

    cy.contains('button', 'Calcular').click()

    cy.get('p[role="alert"]').should('have.length', 1)
    cy.contains('Altura inválida!').should('be.visible')
    cy.contains('Peso inválido!').should('not.exist')
  })

  it('Simular o fluxo de reset', () => {
    cy.get('#height').type('160')
    cy.get('#weight').type('100')
    cy.contains('button', 'Calcular').click()

    cy.contains('Obesidade grau 2').should('be.visible')

    cy.get('button[aria-label="Retornar a calculadora"]').click()

    cy.get('#height').should('have.value', '')
    cy.get('#weight').should('have.value', '')

    cy.contains('button', 'Calcular').should('be.visible')

    cy.contains('Seu IMC é de:').should('not.exist')
    cy.contains('Classificações').should('not.exist')

    cy.get('main').should('have.css', 'background-color', 'rgb(255, 113, 104)')
  })

  it('Simular o fluxo de múltiplos temas', () => {
    cy.get('#height').type('160')
    cy.get('#weight').type('120')
    cy.contains('button', 'Calcular').click()

    cy.get('main').should('have.css', 'background-color', 'rgb(99, 87, 125)')

    cy.get('button[aria-label="Retornar a calculadora"]').click()

    cy.get('#height').type('180')
    cy.get('#weight').type('50')
    cy.contains('button', 'Calcular').click()

    cy.get('main').should('have.css', 'background-color', 'rgb(183, 217, 247)')
  })

  it('Simulando o fluxo para a visibilidade do rodapé e integridade dos links', () => {
    cy.get('footer[role="contentinfo"]').should('be.visible')

    cy.get('a[aria-label="Voltar para o portfólio"]').should('have.attr', 'href', '#')
    cy.get('a[aria-label="Visitar repositório no Github"]')
      .should('have.attr', 'href', 'https://github.com/caosoliveirax/fancy-bmi-calculator')
      .and('have.attr', 'target', '_blank')
    cy.get('a[aria-label="Visitar perfil no LinkedIn"]')
      .should('have.attr', 'href', 'https://www.linkedin.com/in/carlos-oliveira-044552148/')
      .and('have.attr', 'target', '_blank')

    cy.get('#height').type('170')
    cy.get('#weight').type('90')
    cy.contains('button', 'Calcular').click()

    cy.get('footer[role="contentinfo"]').should('not.be.visible')

    cy.get('button[aria-label="Retornar a calculadora"]').click()
    cy.get('footer[role="contentinfo"]').should('be.visible')
  })

  describe('Simular os fluxos do layout responsivo', () => {
    it('Deve exibir layout em coluna no Mobile (390px)', () => {
      cy.viewport(390, 844)

      cy.get('#height').type('160')
      cy.get('#weight').type('80')
      cy.contains('button', 'Calcular').click()

      cy.get('main')
        .should('have.css', 'display', 'grid')
        .and('have.css', 'grid-template-areas', '"calculator" "result" "classification"')
    })

    it('Deve exibir layout em coluna no Tablet (820px)', () => {
      cy.viewport(820, 1180)

      cy.get('#height').type('170')
      cy.get('#weight').type('80')
      cy.contains('button', 'Calcular').click()

      cy.get('main')
        .should('have.css', 'display', 'grid')
        .and('have.css', 'grid-template-areas', '"result result" "calculator classification"')
    })
  })
})
