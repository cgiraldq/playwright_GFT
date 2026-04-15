Feature: Compras en SauceDemo

  @smoke @critical
  Scenario: Happy Path - compra exitosa
    Given que estoy en la página de login de SauceDemo
    When ingreso con usuario "standard" y contraseña por defecto
    Then debería ver el catálogo de productos

  @negative @regression
  Scenario: Login fallido con usuario bloqueado
    Given que estoy en la página de login de SauceDemo
    When ingreso con usuario "locked" y contraseña por defecto
    Then debería ver el mensaje de error de usuario bloqueado
