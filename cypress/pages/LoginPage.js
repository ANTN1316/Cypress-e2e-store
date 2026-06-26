class LoginPage {

    elements = {

        emailInput: () => cy.get('[data-qa="login-email"]'),

        passwordInput: () => cy.get('[data-qa="login-password"]'),

        loginButton: () => cy.get('[data-qa="login-button"]')

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
