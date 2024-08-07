describe('Cadastro de usuário', () => {

    beforeEach(() => {
        cy.visit('https://qa-fresh-store.vercel.app')
    })
  
    it('Tenta realiza cadastro incorretamente e verifica se as mensagens de erro são exibidas', () => {
        cy.contains('a', 'clique aqui').click();
        //valida a primeira mensagem de erro
        cy.contains('button', 'Registrar').click();
        cy.on('window:confirm', (text) => {
            expect(text).to.equal('Por favor, preencha seu nome completo!');
            return true;
        });
        //valida a segunda mensagem de erro
        cy.get('input[id="register-fullname"]').type('João Teodozo');
        cy.contains('button', 'Registrar').click();
        cy.on('window:confirm', (text) => {
            expect(text).to.equal('Por favor, preencha seu nome de usuário!');
            return true;
        });
        //valida a terceira mensagem de erro
        cy.get('input[id="register-username"]').type('joaoteodozo');
        cy.contains('button', 'Registrar').click();
        cy.on('window:confirm', (text) => {
            expect(text).to.equal('Por favor, preencha seu e-mail!');
            return true;
        });
        //valida a quarta mensagem de erro
        cy.get('input[id="register-email"]').type('joaoteodozo@teste.com');
        cy.contains('button', 'Registrar').click();
        cy.on('window:confirm', (text) => {
            expect(text).to.equal('Por favor, preencha sua data de nascimento!');
            return true;
        });
        //valida a quinta mensagem de erro
        cy.get('input[id="register-date"]').type('2003-04-20');
        cy.contains('button', 'Registrar').click();
        cy.on('window:confirm', (text) => {
            expect(text).to.equal('Por favor, preencha sua senha!');
            return true;
        });
    })
  })