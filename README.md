# Penalty-ACML project:
*Project for the ACML GUC Course that aims help users and their friends stick to their habits and provides a series punishment for the users which is a payment for charity.
* This project complies with the most important factors of the 12 factor concept such as
* 1- README.MD in the frontend/backend
* 2- This project is hosted in a private repositry
* 3- The dependancies are managed in nodeJS via npm (node package manager) which isolates all dependances and prevents any kind of conflicts
* 4- The project contains a docker file to run off using docker containers
* 5- Environment variables are used to avoid hardcoding API keys/Database URLS


# How To Run :
* This project can be run using only docker install
* Navigate to the docker-compose.yml file and run docker-compose up



# Technologies Used
* Angular 5
* Express
* MongoDB
* NodeJS

# Backing Services Used
* PayPal payment system
* MongoDB
* Social Login
* Toastr Notifications

# Config File
Create a config.js file in the backend directory with the mongo DB url, in our case since we are using docker it will be
"mongodb://database/nodejs-to-do"
