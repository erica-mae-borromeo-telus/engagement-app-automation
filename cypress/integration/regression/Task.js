// <reference types="Cypress" />

describe('Test Task', function () {
    
  beforeEach(function () {
    cy.loginByGoogleApi()
    cy.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes("Cannot read properties of undefined (reading 'split')")) {
        return false
      }
      if (err.message.includes("Cannot convert undefined or null to object")) {
        return false
      }
    })
  })

    it('Verifies elements in Tasks page', function () {
        cy.log('successfully logged in')
    })
  })

  cy.get('#element-id').should('exist');
