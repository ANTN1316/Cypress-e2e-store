import loginPage from '../../pages/LoginPage'

describe('Funcionalidade: Login', () => {

    it('Deve realizar login com sucesso', () => {

        loginPage.visit()

        loginPage.login(
            'seu_email@teste.com',
            '123456'
        )

        cy.get('a[href="/logout"]').should('be.visible')

    })

})
