/* eslint-disable no-undef */
describe('Week Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('displays a heading with the correct text', () => {
    cy.get('.weekHeader h2').should('contain', 'Enjoy reliably chosen meal plans from the most popular restaurants in your area');
  });

  it('displays three tabs with correct labels', () => {
    cy.get('.ant-tabs-nav-list .ant-tabs-tab').should('have.length', 3);

    cy.get('.ant-tabs-nav-list .ant-tabs-tab').eq(0).should('contain', 'Fri');
    cy.get('.ant-tabs-nav-list .ant-tabs-tab').eq(1).should('contain', 'Sat');
    cy.get('.ant-tabs-nav-list .ant-tabs-tab').eq(2).should('contain', 'Sun');
  });

  it('displays the first restaurant in the first tab', () => {
    cy.get('.ant-tabs-tabpane-active .ant-card-meta-title').should('contain', 'pizza');
    cy.get('.ant-tabs-tabpane-active .ant-card-meta-description').should('contain', 'pizza.com');
  });

  it('displays the second restaurant in the second tab', () => {
    cy.get('.ant-tabs-tab').eq(1).click();

    cy.get('.ant-tabs-tabpane-active .ant-card-meta-title').should('contain', 'tacos');
    cy.get('.ant-tabs-tabpane-active .ant-card-meta-description').should('contain', 'tacos.com');
  });

  it('displays the third restaurant in the third tab', () => {
    cy.get('.ant-tabs-tab').eq(2).click();

    cy.get('.ant-tabs-tabpane-active .ant-card-meta-title').should('contain', 'seafood');
    cy.get('.ant-tabs-tabpane-active .ant-card-meta-description').should('contain', 'seafood.com');
  });
});
