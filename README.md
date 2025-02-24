# NestJS Project Base

Este repositorio proporciona una base para crear un proyecto con NestJS, TypeScript y Prisma. Incluye configuraciones iniciales, herramientas de desarrollo y una estructura básica para la autenticación.

## Características

- **TypeScript**: Configuración inicial del proyecto con TypeScript.
- **NestJS**: Framework para construir aplicaciones del lado del servidor.
- **Prisma**: ORM para la gestión de la base de datos.
- **Linter**: Configuración de ESLint para mantener un código limpio y consistente.
- **Husky**: Precommit hooks para proteger las ramas `main` y `dev`.
- **Decoradores y Guardias**: Implementación de decoradores y guardias de autenticación.
- **Logger**: Configuración de `pino` para el registro de peticiones HTTP.
- **Interceptors y Filtros**: Interceptor de respuestas y filtro de excepciones.

## Estructura del Proyecto

```plaintext
nest-init:.
├───prisma
│       schema.prisma
├───src
│   │   app.controller.ts
│   │   app.module.ts
│   │   main.ts
│   │   service.ts
│   ├───core
│   │       prisma.service.ts
│   ├───decorators
│   │       responseMessage.decorator.ts
│   ├───lib
│   │       AllExceptionsFilter.ts
│   │       ConfigLoader.ts
│   │       Logger.ts
│   │       ResponseInterceptor.ts
│   ├───modules
│   │   └───auth
│   │       │   auth.controller.ts
│   │       │   auth.module.ts
│   │       │   auth.service.ts
│   │       │
│   │       ├───decorators
│   │       │       auth.decorator.ts
│   │       │       session.decorator.ts
│   │       │
│   │       ├───dto
│   │       │       login.dto.ts
│   │       │       register.dto.ts
│   │       │
│   │       ├───guards
│   │       │       jwt-auth.guard.ts
│   │       │       roles.guard.ts
│   │       │
│   │       └───strategies
│   │               jwt.strategy.ts
│   │
│   └───types
│           config.ts
│           express.d.ts
│   .env.example
│   .eslintrc.js
│   .gitignore
│   .lintstagedrc.json
│   .prettierrc
│   nest-cli.json
│   package-lock.json
│   package.json
│   README.md
│   tsconfig.build.json
│   tsconfig.json
```

## Ejecución

```bash
npm install
npx prisma db push
npm run dev
```