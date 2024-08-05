describe('Página de cadastro', () => {

    beforeEach(() => {
        cy.visit('http://qa-fresh-store.vercel.app')
    })
  
    it('Realiza cadastro e faz login', () => {
        cy.contains('clique aqui').click();
        cy.get('input[id="register-username"]').type('joaoteodozo');
        cy.get('input[id="register-password"]').type('Joaovceph2#');
        cy.contains('button', 'Registrar').click();
        cy.get('input[id="login-username"]').type('joaoteodozo');
        cy.get('input[id="login-password"]').type('Joaovceph2#');
        cy.contains('button', 'Login').click();
        cy.get('button[data-id="1"]').click();
        cy.get('button[data-id="2"]').click();
        cy.get('button[data-id="3"]').click();
    })
  })