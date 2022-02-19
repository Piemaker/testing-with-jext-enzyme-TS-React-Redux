/// <reference types = "cypress"/>
describe("Person tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("Should display a person card when get user button is pressed", () => {
    cy.contains("button", /get user/i).click();
    cy.get("[class = 'img-fluid img-circle shadow']").should("be.visible");
  });   
  it("Should return a mocked person when get user button is pressed", () => {
    cy.intercept("get", "https://randomuser.me/api", {
      // get data from the fixtures directory (cypress specific)
      fixture: "person.json",
    });
    cy.contains("button", /get user/i).click();
    cy.contains(/brad.gibson@example.com/i).should("be.visible");
  });
});
