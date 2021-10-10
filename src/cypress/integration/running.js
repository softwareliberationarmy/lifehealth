/// <reference types="Cypress" />

describe("running area", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.contains("li.main-header__item a", "Running").click();
  });

  describe("on initialization", () => {
    it("can get to the running area", () => {
      cy.contains("h1", "Running!").should("be.visible");
    });

    it("should show recent runs", () => {
      cy.contains("p", "Recent Runs").should("be.visible");
    });
  });

  describe("adding a run", () => {
    it("should be able to add a new run", () => {
      cy.contains("a", "Add a run").click();
      cy.get("[name=rundate]").type("2019-12-31");
      cy.get("[name=distance]").type("3.2");
      cy.get("button[type=submit]").click();

      cy.contains("li", "2019-12-31, 3.2 miles").should("be.visible");
    });
  });
});
