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
        cy.get('button[data-id="2"]').click();
        cy.get('button[data-id="6"]').click();
        cy.get('button[data-id="8"]').click();
        cy.get('button[data-id="9"]').click();
        cy.get('a[id="cart"]').click();
        cy.get('#total-value').should('be.visible').should('have.text', 'Valor Total: R$260.00');
    })
    
    it.only('Valida se ao tentar prosseguir com o carrinho vazio a mensagem de erro é exibida', () => {
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
        cy.get('a[id="cart"]').click();
        cy.get('button[id="finalize-btn"]').click();
        cy.on('window:alert', (text) => {
            expect(text).to.equal('Por favor, selecione um produto antes de prosseguir!');
        });
    })
  })