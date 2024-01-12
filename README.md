# jennykåberg.se - Frontend

## Description

I am studying Front End Developer at Medieinstitutet in Stockholm, Sweden. This project is my exam assignment.

My sister is a silversmith and metalworker and has her own workshop. She produces unique creations that are exclusively handmade. I wanted to make a website where she can display her products in a way that justifies their beauty and at the same time makes it easy for customers to place orders or reach out with questions.

The users are able to navigate through all pages and save products to their wishlist, place orders and ask questions about the products.

My goal was to create a visually appealing website where users can browse products and place requests that will be sent from the backend to an email address. These requests will also be stored in a database.

## Screenshots

![Home](https://raw.githubusercontent.com/maxtkarlsson/jk-se/main/public/screenshots/Home.webp)
![Products](https://raw.githubusercontent.com/maxtkarlsson/jk-se/main/public/screenshots/Products.webp)

## Tech-stack

#### Frontend

- ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
- ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
- ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
- ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
- ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
- ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

#### Backend

- ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
- ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
- ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
- ![Mongoose](https://img.shields.io/badge/Mongoose-880000.svg?style=for-the-badge&logo=Mongoose&logoColor=white)
- Cors
- SendGrid mail

#### Database

- ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

#### Testing

- ![Cypress](https://img.shields.io/badge/Cypress-69D3A7.svg?style=for-the-badge&logo=Cypress&logoColor=white)

## Backend

The backend for this project can be found in this repository:
https://github.com/maxtkarlsson/jk-se-backend

## Deployment

The deployment on Vercel can be found here:
https://jk-se.vercel.app/

## Project setup

To install all dependencies, run:

```
npm i
```

Setup and run the backend project:
https://github.com/maxtkarlsson/jk-se-backend

Create an .env file and add the following:

```
VITE_REACT_LOCAL_API_URL = http://localhost:4000/api/v1/
```

## Run project

To start the project, run:

```
npm run dev
```

In your browser, navigate to:

```
http://localhost:5173/
```

## Testing

To look at my testing, switch to branch "Testing-with-cypress"

## Commits

- (fix): - Fix bugs.
- (feat): - Add new feature.
- (refactor): - Refactor, change or remove functions or variables.
- (build): - Change file structure or install new packages.
- (docs): - Update documentation.
