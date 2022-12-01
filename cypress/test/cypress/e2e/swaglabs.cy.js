//Case1 - Able to enter username in username input
  it ("STANDARD_USER - Case1 - Able to enter username in username input", () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type("standard_user");
  });

  //Case2 - Able to enter password in password input
  it('STANDARD_USER - Case2 - Able to enter password in password input', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="password"]').type("secret_sauce");
  });

  //Case3 - Enter valid username and valid password
  it('STANDARD_USER - Case3 - Enter valid username and valid password', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
  });

//Case4 - Enter valid username and invalid password
it('STANDARD_USER - Case4 - Enter valid username and invalid password', () => {
  cy.visit('https://www.saucedemo.com/')
  cy.get('[data-test="username"]').type("standard_user");
  cy.get('[data-test="password"]').type("test");
  cy.get('[data-test="login-button"]').click();
  cy.get('[data-test="error"]').contains('Epic sadface: Username and password do not match any user in this service')
});

 //Case5 - Enter invalid username and valid password
 it('STANDARD_USER - Case5 - Enter invalid username and valid password', () => {
  cy.visit('https://www.saucedemo.com/')
  cy.get('[data-test="username"]').type("test");
  cy.get('[data-test="password"]').type("secret_sauce");
  cy.get('[data-test="login-button"]').click();
  cy.get('[data-test="error"]').contains('Epic sadface: Username and password do not match any user in this service')
}); 

//Case6 - Press login button without entering username and password
it('STANDARD_USER - Case6 - Press login button without entering username and password', () => {
  cy.visit('https://www.saucedemo.com/')
  cy.get('[data-test="login-button"]').click();
  cy.get('[data-test="error"]').contains("Epic sadface: Username is required");
}); 

 //Case7 - Enter username without password
 it('STANDARD_USER - Case7 - Enter username without password', () => {
  cy.visit('https://www.saucedemo.com/')
  cy.get('[data-test="username"]').type("standard_user");
  cy.get('[data-test="login-button"]').click();
  cy.get('[data-test="error"]').contains("Epic sadface: Password is required");

});

//Case8 - Enter password without username
it('STANDARD_USER - Case8 - Enter password without username', () => {
  cy.visit('https://www.saucedemo.com/')
  cy.get('[data-test="password"]').type("secret_sauce");
  cy.get('[data-test="login-button"]').click();
  cy.get('[data-test="error"]').contains("Epic sadface: Username is required");
});

//LOCKED_OUT_USER - Case1 - Enter valid username and valid password
it('LOCKED_OUT_USER - Case1 - Enter valid username and valid password', () => {
  cy.visit('https://www.saucedemo.com/')
  cy.get('[data-test="username"]').type("locked_out_user");
  cy.get('[data-test="password"]').type("secret_sauce");
  cy.get('[data-test="login-button"]').click();
  cy.get('[data-test="error"]').contains("Epic sadface: Sorry, this user has been locked out.");
});