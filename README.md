# Backend Development - Assessment 2
This repository contains the second and final assessment for the course Backend Development.

## Installation

To run this project, you need to follow a couple of steps.

1. Make sure you have the latest Node version running. The app uses a lot of modern JavaScript features like `async/await` ([Read more about that here](https://javascript.info/async-await)) and [Arrow Functions](https://javascript.info/function-expressions-arrows).

2. Clone this repository to your local drive.
    ```sh
    $ git clone https://github.com/SadisticSun/BE-assessment-2.git
    ```
3. Install dependencies.
    ```sh
    $ npm install
    ```
4. Create a .env file containing database credentials. See `example.env` in the project folder. The .env file is used to connect to the database.
5. Start app.
    ```sh
    $ npm run start
    ```
    Or, if you have Nodemon installed
    ```sh
    $ npm run watch
    ```
6. Create an account.
7. Login with your new account.
8. Add new guitar documents by clicking the Upload link. There are no documents in the Database by default.

## About the application

### General
The application is a simple CRUD-app. The user can register an account and log in. After logging in, the index page shows a list of electric guitars.

![The index page](/readme-img/screenshot1.png)

### Features
#### Details
When the user clicks on one of the guitar model names, a detail page is rendered showing more details about that specific guitar.

![The detail page](/readme-img/screenshot2.png)

#### Upload a new guitar
Aside from showing guitar information, the user can upload new guitars to the database or remove an existing one.

![The upload page](/readme-img/screenshot3.png)

### Why Guitars?
Aside from being a developer, I enjoy music and the creation of it.
I have played electric guitar for about 10-ish years now and I decided on guitars as a subject for this application. It would be cool to expand the application to contain a lot more guitar details like video's, sound clips and more images.

## Technologies
### Backend 
The backend is created with [NodeJS](https://nodejs.org/en/) and the [Express](!https://expressjs.com/) framework. 
* NodeJS is a very fast ecosystem for building webapplications based on JavaScript as a main language. It is fast, flexible and very scalable. 
* Express is the industry-standaard backend framework built upon NodeJS. It is a (relatively) lightweight and extensible framework for building API's.

### Database
For this application I used [MongoDB](https://www.mongodb.com/), a NoSQL, document-driven database that is based on JSON documents. I have worked with Mongo before in personal and professional projects and I like the way it works. Combined with [Mongoose](http://mongoosejs.com/), a modelling system for Mongo Documents, it is a pleasure to work with. 

Besides ease of use, MongoDB is famous for its insanely fast performance compared to standard SQL databases. I could have opted for a SQL or PostgreSQL database, but those excel in relational data. Since this application contains no relational data, Mongo was a great choice too.

### Frontend
The app runs completely without client-side JavaScript.
For styling, I used the fabulous [Bulma](https://bulma.io/) prototyping CSS framework for simple styling as the focus of this course was not on styling and frontend development. Bulma works great for quick prototypes like this application, but lacks a bit of the robustness that Bootstrap or Foundation have.
## What have I learned?

### Implementing MVC
Since I had some prior experience with Express and MongoDB, I decided I wanted to challenge myself a bit by experimenting with the [Model-View-Controller architecture](https://blog.codinghorror.com/understanding-model-view-controller/). 

![MVC explained](/readme-img/mvc.png)
> Image Source: [Wikipedia - Model-view-controller](https://nl.wikipedia.org/wiki/Model-view-controller-model)

I had heard of MVC before since it is quite prevalent in our field. MVC is a pattern the backend developers at my company use all the time and they advised me to dive into it and experiment with it. This way I would be more prepared for professional work in case I decided to take on backend work as well.

#### Result
The result is quite to my liking. While using this pattern I found that a bit more code is required, but in exchange you get a more refined structure in the codebase.

### Working with Classes and ES7 Async/Await
#### Object-Oriented Programming
I started working with (true) [Object-Oriented Programming](https://en.wikipedia.org/wiki/Object-oriented_programming) during my internship. All developers at the company I worked at were big fans of OOP and I picked it up relatively easy.

I implemented OOP by working with ES6' class syntax, combined with the MVC pattern.
Small example:
```js
const Controller = require('./Controller')

class ErrorController extends Controller {
    
    /** Throw supplied error
     * @param {any} error // An error object or string to throw
     */
    static throw(error) {
        throw error
    }
}

module.exports = ErrorController
```

#### Async/Await
Using promises for asynchronous functions was something I already do in my daily programming. However, ES7 gave the world something a lot more refined: `async/await`.
Instead of creating new Promise objects, a function can get the `async` keyword, indicating it is an asynchronous function. The `await` keyword is then used within the new function scope to tell the compiler to 'wait' for a certain async function to complete. 

Example:

```js
const doSomething = async function(callback) {
    const asyncData = await anotherAsyncFunction()
    return callback(asyncData)
}
```

Normally, the `return` statement would have been executed immediately after the constant `asyncData` was defined. But thanks to the magic of `await`, the compiler 'waits; for `anotherAsyncFunction()` to have finished.

All this basically allows us to write more beautiful code when working with async functions. [Read all about async/await here](https://javascript.info/async-await).

## Wishlist
There are some features missing that I would have liked to add.

1. Add multiple images to documents
2. Add videos to documents
3. Add sound clips to documents
4. Client-side form validation (with messages)
5. Responsive design
6. Filtering system
7. Search system
8. Database seeding
9. More unique design

## Closing words
I would like to thank Titus Wormer for setting up this course, all the assignments and the assessments. They have helped me a lot in refreshing my knowledge and even updating it. I have a more solid understanding of backend development than I did before.

## Contribution
I always encourage contributing to my projects, so feel free to check it out and supply me with feedback or new feature ideas.

