describe('Search address', () => {
	it('The search input need to work correctly', () => {
	  cy.server()
	  cy.route({
		url: 'geocode/json?address=test&key=AIzaSyDMntPGqga3Q7YGodIUmU55iO5iWbrjuG0',
		delay: 1000
	  }).as('')
  
	  cy.visit('/')
	})
  })
  