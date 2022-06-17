describe('Home', () => {
	it('Displays home', () => {
		cy.visit('http://localhost:8080/')
		cy.contains('Continuer')
	})

	it('Switches language', () => {
		cy.get('#lang-select').select('en')
		cy.contains('Continue')
		cy.get('#lang-select').select('fr')
		cy.contains('Continuer')
	})

	it('Goes to next screen', () => {
		cy.get('.the-screen-intro button').click()
		cy.url().should('include', '#capacity')
	})
})
