/* eslint-disable no-undef */
describe('Sign Up API testing', () => {
  it('Adds email to database - POST', () => {
    cy.visit('http://localhost:5173/');
    cy.get('input').type('test@email.com');
    cy.get('input').should('have.value', 'test@email.com');
  });
});
