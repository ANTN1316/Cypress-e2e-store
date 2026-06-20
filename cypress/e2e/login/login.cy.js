describe('Funcionalidade: Login', () => {
  
  it('Deve realizar login com sucesso', () => {
    // 1. Visitar a página de login
    cy.visit('https://automationexercise.com/login' )

    // 2. Preencher o email (Use um email que você cadastrou)
    cy.get('[data-qa="login-email"]').type('seu_email@teste.com')

    // 3. Preencher a senha
    cy.get('[data-qa="login-password"]').type('123456')

    // 4. Clicar no botão de login
    cy.get('[data-qa="login-button"]').click()

    // 5. Verificar se o login funcionou (Ex: procurar o botão de Logout)
    cy.get('a[href="/logout"]').should('be.visible')
  })

})
