# Swypes

Swypes is a website for a meal planning company that is currently under construction. It was built with MongoDB, Express, React, and Node.js. 

## Table of Contents

- [Getting Started](#getting-started)
- [Usage](#usage)
- [Testing](#testing)


## Getting Started

To get started with Swypes, clone this repository to your local machine and run `npm install` to install the necessary dependencies. You will also need to create a `.env` file with your MongoDB connection string and password and other environment variables. See the `.env.example` file for an example.

## Usage

Swypes uses Vite to bundle and serve the client-side code. To start the development server for the client, run `npm run client:dev`. This will start the Vite dev server at `http://localhost:3000`.

To start the development server for the server-side code, run `npm run server:dev`. This will start the server at `http://localhost:5000`.

You can also run both servers concurrently using `npm run dev`.

To build the client-side code for production, run `npm run client:build`. This will generate a production-ready build in the `dist` directory.

To build the server-side code for production, run `npm run server:build`. This will compile the code in `src` using Babel and output the result in `dist`.

To start the production server, run `npm start`.

## Testing

Swypes uses Cypress for end-to-end testing. To run the tests, run `npm test`. This will open the Cypress test runner, where you can select and run tests.


