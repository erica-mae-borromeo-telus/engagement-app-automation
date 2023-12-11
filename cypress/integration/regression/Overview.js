/// <reference types="Cypress" />

import OverviewPage from '../pageObjects/OverviewPage';
import LoginPage from '../pageObjects/LoginPage';

describe('Test Login', function () {
    
  beforeEach(function () {
    //cy.task('db:seed')
    cy.loginByGoogleApi()
  })

    it('shows login', function () {
      //cy.visit('http://qa-engagement-app.com:3000/overview')
        cy.log('successfully logged in')
    })
  })