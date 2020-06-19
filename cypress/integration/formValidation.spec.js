describe('check form validations', () => {
  it('should enter text in name box', () => {
    cy.visit('http://localhost:3000/pizza')
    cy.get('input#name').type('Gary Porter')
  })

  it('check multiple toppings', () => {
    cy.get('input#pepperoni').check()
    cy.get('input#mushroom').check()
  })

  it('check if form submits', () => {
    cy.get('form').submit()
  })
})