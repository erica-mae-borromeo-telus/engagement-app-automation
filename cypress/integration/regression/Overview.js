// <reference types="Cypress" />

import OverviewPage from '../pageObjects/OverviewPage';
import LoginPage from '../pageObjects/LoginPage';

describe('Test Login', function () {
    
  beforeEach(function () {
    //cy.task('db:seed')
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

    it('Verifies elements in Overview page', function () {
        cy.log('successfully logged in')
    })
  })