# Express.js Demo

This is a simple demo project demonstrating the use of [Express.js](https://expressjs.com/) framework to create an API with various routes and functionalities. 

## Setup

To run this project, follow these steps:

1. Clone the repository to your local machine.
2. Install the dependencies using `npm install`.
3. Run the server using `node index.js`.
4. Open your browser and go to `http://localhost:8000/` to see the homepage.

## Features

This project includes the following features:

- Application middleware
- Route middleware
- Routing
- Simple string response
- Response status code
- JSON response
- Response download
- Response redirect
- Response header
- Cookies
- URL query
- Get Request header
- Post method URL query
- Post Request header
- Post Request JSON
- Post Request multipart/formdata

## Routes

This project has the following routes:

- `/`: Displays "hello world!!!".
- `/contact`: Displays "this is contact!!!".
- `/about`: Displays "this is about!!!".
- `/terms`: Displays "this terms!!!".
- `/one`: Displays "this is simple text response".
- `/two`: Displays "this is simple text response".
- `/three`: Sends a response with status code 200 and the text "ok".
- `/four`: Sends a JSON response with an array of objects containing name, age, and city properties.
- `/five`: Initiates a file download of the "nature.jpeg" image file.
- `/six`: Redirects to `/seven`.
- `/seven`: Displays "This route /seven. Redirected from route /six".
- `/eight`: Sends a response with status code 201 and response headers with name, city, and age properties.
- `/nine`: Sets cookies with name, city, and age properties.
- `/ten`: Clears cookies with name, city, and age properties.
- `/eleven`: Sends a response with URL query parameters for firstName and lastName.
- `/twelve`: Sends a response with header values for firstName and lastName.
- `/thirteen`: Sends a response with URL query parameters for firstName and lastName.
- `/fourteen`: Sends a response with header values for userName and password.
- `/fifteen`: Sends a response with JSON data sent in the request body.
- `/sixteen`: Sends a response with JSON data sent in the request body and extracts the name and city properties.
- `/seventeen`: Sends a response with multipart/formdata sent in the request body.



## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
