/// <reference types="Cypress" />

import OverviewPage from '../pageObjects/OverviewPage';
import LoginPage from '../pageObjects/LoginPage';

describe('Verify Overview page', ()=>{
    const overviewPage = new OverviewPage();
    const loginPage = new LoginPage();
    let testData;
    before('test navigate first',()=>{
        cy.fixture('testdata').then((data)=>{
            testData = data;
            cy.visit('http://qa-engagement-app.com:3000/overview');
            
            //testing google
            cy.origin('https://accounts.google.com', () => {


            })
            cy.on('uncaught:exception', (err, runnable) => {
                if (err.message.includes('Cannot read properties of undefined')) {
                  return false
                }
              })

              cy.on('uncaught:exception', (err, runnable) => {
                if (err.message.includes('Cannot convert undefined or null to object')) {
                  return false
                }
              })
        })
        

    })

    it('Verifies the Overview page', ()=>{
        overviewPage.sideBar().should('be.visible');
        overviewPage.sideBar().find('li').should('have.length',7);
        overviewPage.sideBar().find('li').each(($el,index,$list) =>{
            let linkName = $el.find('a').text();
            cy.log("Link: "+ linkName);
        })
    })
})