# Playwright + Cucumber SauceDemo E2E

Automatización de prueba técnica para SauceDemo usando Playwright + Cucumber en TypeScript.

## Estructura del proyecto

- `features/` - archivos `.feature` con escenarios Gherkin.
- `step_definitions/` - definición de steps con TypeScript.
- `support/` - hooks, world y page objects.
- `support/data/` - datos de test parametrizados (usuarios, productos, formularios).
- `reports/` - reportes HTML, videos y screenshots.

## Instalación

```bash
npm install
npm run prepare
```

## Ejecución

- Ejecutar todos los tests:

```bash
npm test
```

- Ejecutar solo los tests con tag `@smoke`:

```bash
npm run test:smoke
```

- Ejecutar solo los tests con tag `@regression`:

```bash
npm run test:regression
```

- Ejecutar visible en el browser:

```bash
npm run test:show
```

- Ejecutar solo `@smoke` visible en el browser:

```bash
npm run test:smoke:show
```

- Ejecutar solo `@regression` visible en el browser:

```bash
npm run test:regression:show
```

- Ejecutar lento (1 segundo entre acciones):

```bash
npm run test:slow
```

- Ejecutar visible y lento:

```bash
npm run test:show:slow
```

- Ejecutar solo `@smoke` lento:

```bash
npm run test:smoke:slow
```

- Ejecutar solo `@smoke` visible y lento:

```bash
npm run test:smoke:show:slow
```

## Datos de test parametrizados

Los datos de usuarios, productos y formularios están centralizados en `support/data/test-data.ts` para facilitar el mantenimiento:

- **Usuarios**: `TEST_USERS` - credenciales por clave (standard, locked, problem, etc.)
- **Productos**: `PRODUCTS` - información de productos por clave (backpack, bikeLight, etc.)
- **Checkout**: `CHECKOUT_DATA` - datos de formulario por clave (default, alternative)
- **Mensajes**: `EXPECTED_MESSAGES` - textos esperados en la UI

Para agregar nuevos datos, edita el archivo `test-data.ts` y usa las claves en los features.

## Reportes y evidencia

- Reporte HTML generado en `reports/cucumber-report.html`.
- Videos de cada scenario en `reports/videos/`.
- Screenshots automáticos solo cuando un scenario falla en `reports/screenshots/`.

Para abrir el reporte en macOS:

```bash
npm run test:report
```

## Notas

- Los timeouts globales se configuran en `support/hooks.ts`.
- El proyecto usa `@playwright/test` para el browser driver y `@cucumber/cucumber` para BDD.
- No se suben videos ni screenshots al repositorio; son artefactos locales generados en `reports/`.
