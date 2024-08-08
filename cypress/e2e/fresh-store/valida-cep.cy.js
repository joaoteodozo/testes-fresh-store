describe('Validações no carrinho de compras', () => {

    beforeEach(() => {
        cy.visit('https://qa-fresh-store.vercel.app')
    })
  
    it('Valida se a soma dos produtos no carrinho está correta', () => {
        cy.contains('a', 'clique aqui').click();
        cy.get('input[id="register-fullname"]').type('João Teodozo');
        cy.get('input[id="register-username"]').type(Cypress.env('username'), {log: false});
        cy.get('input[id="register-email"]').type('joaoteodozo@teste.com');
        cy.get('input[id="register-date"]').type('2003-04-20');
        cy.get('input[id="register-password"]').type(Cypress.env('password'), {log: false});
        cy.contains('button', 'Registrar').click();
        cy.get('input[id="login-username"]').type(Cypress.env('username'), {log: false});
        cy.get('input[id="login-password"]').type(Cypress.env('password'), {log: false});
        cy.contains('button', 'Login').click();
        cy.get('button[data-id="1"]').click();
        cy.get('a[id="cart"]').click();
        cy.get('button[id="finalize-btn"]').click();
        cy.get('input[id="zip"]').type('00000000');
        cy.on('window:alert', (text) => {
            expect(text).to.equal('CEP não encontrado. Verifique o número e tente novamente.');
        });
    })
  })