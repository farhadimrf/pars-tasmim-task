# Introduction

This repository contains my submission for the assessment task for a front-end position, developed using Next.js 14:

- Implementing Irancell's top-up (charge) service.

##### This service allows users to recharge their SIM cards by selecting the card type, choosing an amount, selecting a bank, and then completing the payment. After payment, the user is directed to a results page to see the transaction ID. The workflow is implemented to closely resemble the one used by shop.irancell.

## Recharge Card System

In the first part of the assessment, I utilized several technologies to implementing this task:

### TypeScript

TypeScript is a typed superset of JavaScript that adds static typing to your code. It helps catch errors at compile time, improving code reliability and reducing runtime bugs. By providing features like type annotations, interfaces, and advanced tooling, TypeScript enhances developer productivity and makes the codebase more maintainable and easier to understand. This ensures a robust development process and a higher-quality end product.

### ESLint and Prettier

ESLint is a tool that analyzes your JavaScript code to find and fix problems according to the coding standards you set, ensuring consistent code quality across your project. Prettier is an opinionated code formatter that automatically formats your code to adhere to a consistent style. I configured ESLint and Prettier to work together, allowing ESLint to catch potential issues while Prettier ensures a uniform code style. This setup enhances code readability, reduces stylistic debates, and maintains a clean, error-free codebase.

### Husky, Lint-stage and Commitizen

Husky, lint-staged, and Commitizen are tools that streamline and enforce best practices in Git workflows. Husky manages Git hooks, allowing you to run scripts (e.g., tests, linters) before committing code. Lint-staged works with Husky to only lint and fix staged files, ensuring clean code before commits. Commitizen guides you in writing standardized, consistent commit messages, improving project history and communication. Together, these tools help maintain code quality and consistency in your project.

### Tailwind CSS

Tailwind CSS is a utility-first CSS framework that provides a set of pre-designed classes to rapidly build custom user interfaces. I leveraged Tailwind CSS to style the form components and ensure a consistent and visually appealing layout.

### React Hook Form

React Hook Form is a library for managing form state in React applications using hooks. It offers a simple and efficient way to handle form validation, submission, and error handling. I integrated React Hook Form to manage the state and validation logic of the dynamic form, enabling seamless user interactions and validation feedback.

### Zod Validator

Zod is a TypeScript-first schema declaration and validation library. It allows defining robust schemas for data validation and ensures type safety at compile time. I utilized Zod to define the schema for the form data and validate user inputs against the specified schema. This helped maintain data integrity and enforce validation rules, improving the reliability of the form submission process.

## Installation

To get started with the assessment task, follow these steps:

1. **Clone Repository**:

   - Clone the repository from GitHub to your local machine:
     ```
     git clone https://github.com/farhadimrf/pars-tasmim-task
     ```

2. **Install Dependencies**:

   - Navigate to the project directory and install the necessary dependencies using npm:
     ```
     cd pars-tasmim-task
     npm install
     ```

3. **Run the Application**:
   - Once the dependencies are installed, you can run the application locally.
     ```
     npm run dev
     ```
   - The application will start running on port `3000` by default. Open your web browser and navigate to `http://localhost:3000` to view the UI.
   -
4. **Visit on vercel**:
   - Also you can see on vercel [vercel link](https://pars-tasmim-task.vercel.app)
