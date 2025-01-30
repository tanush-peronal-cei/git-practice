# Vehicle Application

## Overview
This application demonstrates the use of Object-Oriented Programming (OOP) concepts in JavaScript, including inheritance and asynchronous operations. The application allows you to create different types of vehicles and fetch data from an API. This application uses the **Factory Pattern** to create different types of vehicles. The `createVehicle` function acts as a factory method to instantiate the appropriate vehicle class based on the type provided.

## Prerequisites
- Node.js installed on your machine
- A running local server at `http://127.0.0.1:3000/`

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/tanush-peronal-cei/git-practice.git
   ```
2. Checkout to the `coding-best-practices` branch:
   ```bash
   cd git-practice
   git checkout coding-best-practices
   ```
## API Endpoints
- `http://127.0.0.1:3000/car`: Endpoint for car data.
- `http://127.0.0.1:3000/cycle`: Endpoint for cycle data.
- `http://127.0.0.1:3000/aeroplane`: Endpoint for aeroplane data.

## Starting the Backend Server
1. Navigate to the project directory:
   ```bash
   cd git-practice
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   node server.js
   ```
4. Ensure the server is running at `http://127.0.0.1:3000/`.

## Running the Application
1. Open the `index.html` file in your browser.
2. Enter a color in the input field and click the button to create a vehicle.

## Code Structure
- **index.html**: Contains the HTML structure and input elements.
- **script.js**: Contains the JavaScript code for creating vehicles and fetching data from the API.

## Usage
### Creating a Car
1. Enter a color in the input field.
2. Click the "Create Car" button.
3. The application will fetch data from the API and display the result.

### Creating a Cycle
1. Enter a color in the input field.
2. Click the "Create Cycle" button.
3. The application will fetch data from the API and display the result.

### Creating an Aeroplane
1. Enter a color in the input field.
2. Click the "Create Aeroplane" button.
3. The application will fetch data from the API and display the result.

## Design Pattern
This application uses the **Factory Pattern** to create different types of vehicles. The `createVehicle` function acts as a factory method to instantiate the appropriate vehicle class based on the type provided.


