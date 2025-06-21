describe("navigation tests", () => {
    beforeEach(() => {
        cy.visit("http://localhost:1234");
    });
    it('Clicking on "Card Set" in the side menu navigates to the page containing the card sets', () => {
        cy.contains("Card Sets").click();
        cy.contains("Study Set Library").should("be.visible");
    });
    it('Clicking on "About" in the side menu navigates to the About page', () => {
        cy.contains("About").click();
        cy.contains("About Study Night").should("be.visible");
    });
    it('Clicking on "Home" in the side menu navigates to the Home page', () => {
        cy.contains("Home").click();
        cy.contains("Digital Study Solution").should("be.visible");
    });
});
