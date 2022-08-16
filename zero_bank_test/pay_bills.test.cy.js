/// <reference types="cypress" />
//fungsi diatas adalah untuk memunculkan auto-complete dari cypressnya

describe('Browser actions', () => {
    it('Visit the website', () => {
        cy.visit('http://zero.webappsecurity.com/login.html', {timeout : 10000})
        cy.url().should('include', 'login.html')
        cy.login('username', 'password')
        cy.get('a').contains('Pay Bills').click()

        cy.pause()

    });
    it('Should Pay Bills', () => {
        cy.fixture('user').then(user => {
            const amount = user.amount
            const description = user.description
        // dibawah ini adalah commands yang dipanggil dari file commands.js
        cy.pay_bills(amount, description)
        })
        
    });

});