describe('Carmeq - Test search functionality', () => {
  it('Should Find some results related to cars', () => {
    cy.visit('https://www.carmeq.com')
    // search input is not visible until we click the search button
    cy.get('#ctrl_keywords_12').should('not.be.visible')
    // click search button
    cy.get('.search>a').click()
    // now the search input is visible
    cy.get('#ctrl_keywords_12').should('be.visible')
    // type the search keyeord cars
    cy.get('#ctrl_keywords_12').type('cars')
    // click on submit button
    cy.get('#ctrl_submit_12').click()
    // the result page with the header containing the word results should appear
    cy.get('.header').should('contain', 'Results')
  })
})

describe('Carmeq - Test toggle menu functionality', () => {
  it('Should open menu', () => {
    cy.visit('https://www.carmeq.com')
    // the menu should not be visible until we click the toggler
    cy.get('#toggleOffCanvas').should('not.be.visible')
    // click the toggler
    cy.get('.navbar-toggler.offcanvas-toggler').first().click()
    // now the menu should be visible
    cy.get('#toggleOffCanvas').should('be.visible')
  })
})