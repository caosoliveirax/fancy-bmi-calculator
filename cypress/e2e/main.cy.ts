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
})
