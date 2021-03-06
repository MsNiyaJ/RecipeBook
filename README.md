# Recipe Collection App

This app was created as a way to store all of my favorite recipes in one place!


## Tech Stack
This project uses:

- React JS
- Tailwind CSS
- db.json: A database completely in json

## Functionality:

- Create a new recipe
- View a recipe
- Edit a recipe
- Delete a recipe
- Create an account (in progress)

## How To Run The Project Locally

In the project directory, you can run:

1. Make sure to install JSON server: `npm install -g json-server`
2. Get the node modules: `npm install`

### `npm run dev`

Concurrently runs the app in the development mode\
and starts the JSON Server.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3001](http://localhost:3001) to view it in your browser. You will not see any data until the JSON server is running.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `json-server --watch db.json`

Starts the JSON server.\
Open [http://localhost:3000/recipes/](http://localhost:3000/recipes/) to view the recipe list API in your browser.\
When you add or modify a recipe this page will update.
