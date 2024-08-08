import {gerarNumeroCartao} from "../../support/functions";
import {gerarCVC} from "../../support/functions";
import {gerarNumeroCasa} from "../../support/functions";
const numeroCartao = gerarNumeroCartao();
const cvc = gerarCVC();
const numeroCasa = gerarNumeroCasa();

describe('Realizar fluxo de compra com os três tipos de pagamentos diferentes', () => {

    beforeEach(() => {
        cy.visit('https://qa-fresh-store.vercel.app')
    })
  
    it('Realiza uma compra corretamente com cartão de crédito', () => {
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
        cy.get('input[id="zip"]').type('11420440');
        cy.get('input[id="address"]').click();
        cy.get('input[id="number"]').type(numeroCasa);
        cy.wait(1500);
        cy.get('button[id="payment-btn"]').click();
        cy.get('select[id="payment-method"]').select(1);
        cy.get('input[id="card-number"]').type(numeroCartao);
        cy.get('input[id="card-expiry"]').type('2029-04');
        cy.get('input[id="card-cvc"]').type(cvc);
        cy.get('button[id="confirm-payment-btn"]').click();
    })

    it('Realiza uma compra corretamente com pix', () => {
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
        cy.get('input[id="zip"]').type('11420440');
        cy.get('input[id="address"]').click();
        cy.get('input[id="number"]').type('985');
        cy.wait(1500);
        cy.get('button[id="payment-btn"]').click();
        cy.get('select[id="payment-method"]').select(2);
        cy.get('button[id="confirm-payment-btn"]').click();
    })

    it('Realiza uma compra corretamente com boleto', () => {
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
        cy.get('input[id="zip"]').type('11420440');
        cy.get('input[id="address"]').click();
        cy.get('input[id="number"]').type('985');
        cy.wait(1500);
        cy.get('button[id="payment-btn"]').click();
        cy.get('select[id="payment-method"]').select(3);
        cy.get('button[id="confirm-payment-btn"]').click();
    })
  })