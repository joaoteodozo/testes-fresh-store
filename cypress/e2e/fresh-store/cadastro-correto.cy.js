describe('Página de cadastro', () => {

    beforeEach(() => {
        cy.visit('https://qa-fresh-store.vercel.app')
    })
  
    it('Realiza cadastro e faz login', () => {
        //fluxo completo
        cy.contains('a', 'clique aqui').click();
        cy.get('input[id="register-fullname"]').type('João Teodozo');
        cy.get('input[id="register-username"]').type('joaoteodozo');
        cy.get('input[id="register-email"]').type('joaoteodozo@teste.com');
        cy.get('input[id="register-date"]').type('2003-04-20');
        cy.get('input[id="register-password"]').type('Joaovceph2#');
        cy.contains('button', 'Registrar').click();
        cy.get('input[id="login-username"]').type('joaoteodozo');
        cy.get('input[id="login-password"]').type('Joaovceph2#');
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