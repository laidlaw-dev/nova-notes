# Copilot Instructions

## Repository Overview

This repository contains the source code and documentation for the Nova Notes project. The project aims to provide a seamless note-taking experience for users, allowing them to create, organize, and manage their notes efficiently. It is built using TypeScript and follows best practices for software development, including modular architecture and comprehensive testing.

User authentication and authorization are implemented using AWS Cognito, ensuring secure access to user data. The application is designed to be scalable and maintainable, with a focus on performance and user experience.

The Server side is built using Node.js and Express connected to a Postgres SQL database.
The Client side is developed using React with Vite.
The project also includes a robust testing suite to ensure code quality and reliability using Vitest.

## Repository Structure

- client/: Contains the frontend code for the Nova Notes web application, built with React and TypeScript.
- server/: Contains the backend code, including API endpoints and database interactions, built with Node.js, Express and TypeScript.

## Server Technologies
- TypeScript
- Node.js
- Express
- ESLint
- Prettier

## Server Structure
- src/server.ts: Entry point for the server application.
- src/app.ts: Sets up the Express application, middleware, and routes.
- src/routes/: Contains route definitions for the API endpoints.
- src/controllers/: Contains controller functions that handle requests and responses.
- src/services/: Contains business logic and interactions with the database.
- src/middlewares/: Contains custom middleware functions for request processing.
- src/types/: Contains TypeScript type definitions and interfaces.

## Client Technologies
- TypeScript
- React 19
- Vite
- ESLint
- Prettier

## Coding Standards
- Use TypeScript for all code.
- Use ESLint and Prettier for code formatting and linting.
- Use meaningful variable and function names.
- Write modular and reusable code.
- Write comments and documentation for complex code.
- Follow best practices for security and performance.
- Use arrow functions.
- Use const and let instead of var.
- Use async/await for asynchronous code.
- Use template literals for string concatenation.
- Use destructuring for objects and arrays.
- Use spread operator for copying and merging objects and arrays.
- Use optional chaining and nullish coalescing.
- Use array methods like map, filter, reduce instead of for loops.
- Use interfaces and types for type definitions.
- Keep functions small and focused on a single task. Functions should not be more than 20 lines long.
- Use React functional components and hooks.
- Avoid using any type. Use unknown if the type is not known.
- Use ESLint and Prettier to enforce coding standards. Do not disable ESLint rules unless absolutely necessary. If a rule is disabled, add a comment explaining why.
- Write code that is easy to read and understand. Prioritize readability over cleverness or brevity.
- Use consistent indentation and spacing.

## Testing
- For the server use Vitest.
- For the client use Vitest and React Testing Library.
- Put test files in the same folder as the file they are testing.
- Name test files with a .test.ts or .test.tsx suffix.
- Use global imports. Do not import describe, it, test, expect or vi into test files.
- Use describe blocks to group related tests. Name describe blocks with the name of the function or component being tested.
- Mock react-i18next t function in client tests when useTranslation is used by the component under test.
- Use fake timers when testing code that uses setTimeout or setInterval or uses the current date time.
- Test the behavior of functions and components. Do not test implementation details or component appearance.
- Use node-mocks-http for testing Express request and response objects.
- Mock functions should named with the name of the function being mocked prefixed by mock_, e.g. mock_getUserById.
- When calling a mock function, call it through a variable named with the name of the function being mocked prefixed by mock_, e.g. mock_getUserById(). Call it using a function. E.g.
```
const mock_useAuth = vi.fn();
vi.mock('react-oidc-context', () => ({
  useAuth: () => mock_useAuth(),
}));
```

## Translations
- Use useTranslation hook from react-i18next to get t function.
- Put translation files in client/public/locales/{lng}/translation.json
- Add translations keys to appropriate namespace in nested structure.
- Use namespaces to organize translation keys.
- Use i18n.t('key') for translations outside of React components.
- Use t('key') for translations inside React components.
- use interpolation for dynamic values in translations, e.g. "welcome": "Welcome, {{name}}!"
- use plurals for handling singular and plural forms, e.g. "item": "You have {{count}} item", "item_plural": "You have {{count}} items"
- Add english language keys to locales/en/translation.json. Only add keys to locales/en-gb/translation.json if they are specific to British English. Only add keys to locales/en-us/translation.json if they are specific to American English.
- Use lowerCaseLng option in i18n.ts to handle language codes in lowercase.
- Only add translations for English (en), British English (en-gb) and American English (en-us) at this time.

## Date and Time
- Use Luxon for date and time handling.

## CSS
- Use Tailwind CSS for styling.
- Use Tailwind version 4. There is no tailwind.config.js file in the project.
- Follow Tailwind CSS best practices.
- Use semantic HTML elements.
- Use className attribute for adding Tailwind classes to React components.
- Use utility classes for styling.
- Avoid custom CSS unless absolutely necessary. If custom CSS is necessary, use it sparingly and document its purpose.
- For color classes use semantic names, e.g. bg-primary, text-on-secondary, defined in client/src/index.css.
