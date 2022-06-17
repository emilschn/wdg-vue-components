describe('Home', () => {
	it('Displays capacity screen', () => {
		cy.visit('http://localhost:8080/')
		cy.get('.the-screen-intro button').click()
		cy.url().should('include', '#capacity')
		cy.get('div.the-screen-capacity div.financial-commitments').should('not.exist')
		cy.get('div.the-screen-capacity div.result').should('not.exist')
		cy.get('wdg-button button').should('not.exist')
	})

	it('Displays financial commitments', () => {
		cy.get('input#monthlyRevenue').type('2000')
		cy.get('input#complementaryRevenue').type('500')
		cy.get('input#investmentsValue').type('500')
		cy.get('span.yearlyRevenue').contains('24 000')
		cy.get('div.the-screen-capacity div.financial-commitments').should('be.visible')
		cy.get('wdg-button button').should('not.exist')
	})

	it('Displays checkbox', () => {
		cy.get('input#commitmentValue').type('1000')
		cy.get('div.the-screen-capacity div.result').should('be.visible')
		cy.get('span.yearlyCommitment').contains('12 000')
		cy.get('span.yearlyCapacityAmount span').contains('1 300')
		cy.get('div.wdg-button button').should('not.exist')
		cy.get('form#confirmResult div.wdg-checkbox').should('be.visible')
	})

	it('Displays result', () => {
		cy.get('form#confirmResult div.wdg-checkbox').click()
		cy.get('div.wdg-button button').should('be.visible')
	})
})
