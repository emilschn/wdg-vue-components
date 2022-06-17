describe('Home', () => {
	it('Displays knowledge screen', () => {
		cy.visit('http://localhost:8080/')
		cy.get('div.the-screen-intro button').click()
		cy.get('input#monthlyRevenue').type('2000')
		cy.get('input#complementaryRevenue').type('500')
		cy.get('input#investmentsValue').type('500')
		cy.get('input#commitmentValue').type('1000')
		cy.get('form#confirmResult div.wdg-checkbox').click()
		cy.get('div.the-screen-capacity button').click()
		cy.url().should('include', '#knowledge')
	})

	it('Displays button if one checkbox is checked', () => {
		cy.get('div.the-screen-knowledge #know1').parent().click()
		cy.get('div.the-screen-knowledge button').should('be.visible')
	})

	it('Hide button if none of the checkboxes are checked', () => {
		cy.get('div.the-screen-knowledge #know1').parent().click()
		cy.get('div.the-screen-knowledge button').should('not.exist')
	})

	it('Uncheck first checkbox if "none" checkbox is checked', () => {
		cy.get('div.the-screen-knowledge #know1').parent().click()
		cy.get('div.the-screen-knowledge #none').parent().click()
		cy.get('div.the-screen-knowledge #know1').should('not.be.checked')
	})

	it('Uncheck "none" checkbox if another checkbox is checked', () => {
		cy.get('div.the-screen-knowledge #know2').parent().click()
		cy.get('div.the-screen-knowledge #none').should('not.be.checked')
	})
})
