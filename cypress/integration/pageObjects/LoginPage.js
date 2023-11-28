class LoginPage

{
    getUsername()
    {
        return cy.get('#username');
    }

    continueButton(){
        return cy.get('button span:contains(Continue)');
    }

    getPass(){
        return cy.get('#password');
    }
}

export default LoginPage;