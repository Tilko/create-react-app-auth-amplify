describe('Authenticator:', function () {
  // Step 1: setup the application state
  beforeEach(function () {
    cy.visit('http://172.17.0.2:3000');
  });

  describe('Sign In:', () => {
    it('allows a user to signin', () => {
      // Step 2: Take an action (Sign in)
      cy.get('input[name="username"]').type("Tilko");
      cy.get('input[name="password"]').type("J8uXs25=");
      cy.get('button').contains('Sign In').click();

      // Step 3: Make an assertion (Check for sign-out text)
      //cy.get('button').contains('OUT', { matchCase: false });
      cy.get('button')
        .should('have.text', 'Sign Out');
    });
  });
});