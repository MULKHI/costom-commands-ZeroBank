/// <reference types="cypress" />
//fungsi diatas adalah untuk memunculkan auto-complete dari cypressnya

describe('Browser actions', () => {
    it('Visit the website', () => {
        cy.visit('http://zero.webappsecurity.com/login.html', {timeout : 10000})
        cy.url().should('include', 'login.html')

        cy.pause()
    });

    //dengan menggunakan fixture kita bisa memanggil data agar tidak memasukan data yg sama beruang-ulang
    it('Should try to login', () => {
        cy.fixture('user').then(user => {
            const username = user.username
            const password = user.password
        // dibawah ini adalah commands login yang dipanggil dari file commands.js
        cy.login(username, password)
        })
    });


})