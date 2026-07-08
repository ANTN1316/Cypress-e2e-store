import loginPage from '../../pages/LoginPage'

describe('Funcionalidade: Login', () => {

    it('Deve realizar login com sucesso', () => {

        loginPage.visit()

        loginPage.login(
            'antoniorec2017@gmail.com',
            'Geder0426!'
        )

     cy.url().should('include', '/home')
    })

})
