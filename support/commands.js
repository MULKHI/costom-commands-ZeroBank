// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#user_login').clear()
    cy.get('#user_login').type(username)

    cy.get('#user_password').clear()
    cy.get('#user_password').type(password)
    cy.get('#user_remember_me').click()
    cy.get('input').contains('Sign in').click()

})

Cypress.Commands.add('pay_bills', (amount, description) => {
    cy.url().should('include', '/bank/pay-bills.html')
    cy.get('#sp_amount').clear().type(amount)
    cy.get('#sp_date').clear().type('2022-08-16')

    cy.get('#sp_description').clear().type(description)
    cy.get('input').contains('Pay').click()


})