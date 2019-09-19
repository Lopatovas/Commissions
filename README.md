# Commission Calculator

A simple application for calculating cash withdraw and deposit commission fees.

### Prerequisites

This application requires Node.js and Node package manager (npm) to be installed on your local device.

You can check if you have Node.js installed by typing in the following command into your terminal:
```
node -v
```
To check if you have NPM installed, type in the following command in the terminal:
```
npm -v
```
### Installing

* Clone the repository.
* Navigate to the repository folder using your preferred terminal
* Type in ``npm install`` to install the required dependencies

## Running the application

This application was written using ES6 syntax and is converted to ES5 at build/runtime.

You can use the ``npm run build`` command to build the application.
To start the application you can use the ``npm run launch`` command. This command will also convert the ES6 syntax into ES5 automatically.

To run the application, a parameter must be passed to the ``launch`` command. The accepted parameter is a path to a json file, from which the app will receive the data. The JSON file should contain an array of objects.
Example:
``npm run launch ./input.json``

## Running the tests

This application is shipped with automated unit tests written using Mocha and Chai libraries.
To run the tests, you must first build the project using ``npm run build``
Then simply execute the following command: ``npm run test``

## Built With

* The project was built using ES6
* Babel
* Node.js
* Chai and Mocha

## Authors

Edgaras Lopatovas

## License

MIT
