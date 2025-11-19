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
})
