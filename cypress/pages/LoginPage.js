class LoginPage {

    elements = {

      cy,get([data-testid="email"]),

        passwordInput: () => cy.get('[data-testid="senha"]'),

      loginButton: () => cy.get('[data-testid="entrar"]'),

      logoutButton: () => cy.get('a[href="/logout"]'),
    }

    visit() {

        cy.visit('/login')

    }

    fillEmail(email) {

        this.elements.emailInput().type(email)

    }

    fillPassword(password) {

        this.elements.passwordInput().type(password)

    }

    clickLogin() {

        this.elements.loginButton().click()

    }

    login(email, password) {

        this.fillEmail(email)

        this.fillPassword(password)

        this.clickLogin()

    }

}

export default new LoginPage()
