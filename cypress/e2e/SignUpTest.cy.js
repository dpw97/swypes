/* eslint-disable no-undef */
describe('SignUp', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('displays the email input', () => {
    cy.get('input[name="email"]').should('be.visible');
  });

  it('validates the email input', () => {
    cy.get('input[name="email"]').type('invalid-email');
    cy.contains('Enter').click();
    cy.contains('Enter a valid Email').should('be.visible');
  });

  it('submits the form and shows a success message', () => {
    cy.intercept('/api/signup').as('signup');
    cy.get('input[name="email"]').type('test@example.com');
    cy.contains('Enter').click();
    cy.wait('@signup').its('response.statusCode').should('eq', 200);
    cy.contains('Thank you for signing up!').should('be.visible');
  });
});
