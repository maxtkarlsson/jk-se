describe("product page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/products");
  });

  it("displays ten products as default", () => {
    cy.get(".product-card").should("have.length", 10);
  });

  it("should disable back button if on first page", () => {
    cy.get(".products-page__button--back").should("have.attr", "disabled");
  });

  it("goes to next page when klicking next button", () => {
    cy.get(".products-page__button").click();

    cy.get(".product-card").last().should("contain.text", "Silver Bubbles");
  });

  it("should disable next button if on last page", () => {
    cy.get(".products-page__button").click();

    cy.get(".products-page__button").should("have.attr", "disabled");
  });
});
