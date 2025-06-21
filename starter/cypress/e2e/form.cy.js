describe("form tests", () => {
    beforeEach(() => {
        cy.visit("http://localhost:1234");
        cy.contains("Card Sets").click();
    });
    describe("create set form", () => {
        beforeEach(() => {
            cy.contains("Add New Set").click();
        });
        it("submits successfullly with a valid input", () => {
            cy.get('input[name="titleInput"]').type("New flashcards");
            cy.get('[data-cy="set_form"]').submit();
            cy.contains("New flashcards").should("exist");
        });
        it("error when set name is empty", () => {
            cy.get('[data-cy="set_form"]').submit();
            cy.contains("TITLE CANNOT BE EMPTY").should("exist");
        });
    });

    describe("Add card form", () => {
        beforeEach(() => {
            cy.contains("Python").click();
            cy.contains("Add New Card").click();
        });
        it("submits successfullly with a valid input", () => {
            cy.get('input[name="termInput"]').type("question");
            cy.get('input[name="descriptionInput"]').type("answer");
            cy.get('[data-cy="card_form"]').submit();
            cy.contains("question").should("exist");
            cy.contains("answer").should("exist");
        });
        it("error when term is empty", () => {
            cy.get('input[name="descriptionInput"]').type("answer");
            cy.get('[data-cy="card_form"]').submit();
            cy.contains("TERM CANNOT BE EMPTY").should("exist");
        });
        it("error when Description is empty", () => {
            cy.get('input[name="termInput"]').type("question");
            cy.get('[data-cy="card_form"]').submit();
            cy.contains("DESCRIPTION CANNOT BE EMPTY").should("exist");
        });

        it("error when both term and Description are empty", () => {
            cy.get('[data-cy="card_form"]').submit();
            cy.contains("TERM AND DESCRIPTION CANNOT BE EMPTY").should("exist");
        });
    });
});
