Feature: Compras en SauceDemo

  @smoke @critical
  Scenario: Happy Path - compra exitosa
    Given que estoy en la página de login de SauceDemo
    When ingreso con usuario "standard" y contraseña por defecto
    Then debería ver el catálogo de productos
    When agrego el producto "backpack" al carrito
    And voy al carrito
    And procedo al checkout
    And completo el formulario con datos de "default"
    And finalizo la compra
    Then debería ver el mensaje de confirmación de orden

  @regression
  Scenario: Compra con datos alternativos
    Given que estoy en la página de login de SauceDemo
    When ingreso con usuario "standard" y contraseña por defecto
    Then debería ver el catálogo de productos
    When agrego el producto "bikeLight" al carrito
    And voy al carrito
    And procedo al checkout
    And completo el formulario con datos de "alternative"
    And finalizo la compra
    Then debería ver el mensaje de confirmación de orden

  @negative @regression
  Scenario: Login fallido con usuario bloqueado
    Given que estoy en la página de login de SauceDemo
    When ingreso con usuario "locked" y contraseña por defecto
    Then debería ver el mensaje de error de usuario bloqueado

  @regression
  Scenario Outline: Data Driven con diferentes usuarios
    Given que estoy en la página de login de SauceDemo
    When ingreso con usuario "<userKey>" y contraseña por defecto
    Then debería ver el catálogo de productos
    When agrego el primer producto al carrito
    Then el carrito debería tener 1 producto

    Examples:
      | userKey     |
      | standard    |
      | problem     |
      | performance |
      | error       |
      | visual      |
