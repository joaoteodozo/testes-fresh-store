describe('Realizar fluxo de compra', () => {

    beforeEach(() => {
        cy.visit('https://qa-fresh-store.vercel.app')
    })
  
    it('Realiza cadastro corretamente e em seguida realiza login', () => {
        cy.get('input[id="login-username"]').type(Cypress.env('username'));
        cy.get('input[id="login-password"]').type(Cypress.env('password'));
        cy.contains('button', 'Login').click();
        cy.get('button[data-id="1"]').click();
        cy.get('a[id="cart"]').click();
        cy.get('button[id="finalize-btn"]').click();
        cy.get('input[id="zip"]').type('11420440');
        cy.get('input[id="address"]').click();
        cy.wait(1500);
        cy.get('input[id="number"]').type('985');
        cy.get('button[id="payment-btn"]').click();
        cy.get('select[id="payment-method"]').select(2);
        cy.get('button[id="confirm-payment-btn"]').click();
    })
  })