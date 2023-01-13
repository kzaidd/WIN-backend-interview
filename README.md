# WIN Backend Engineering Interview

## Language Used

- JavaScript

## Frameworks used

- Express.Js

## Runtime

- Node.Js

## How to setup the project

- Clone this repo
- Use "npm i" or "npm install" to install all the required packages.
- Use "npm start" to start the server.
- Extra --
- Change scripts > start to "nodemon index.js" from "node index.js" to use nodemon in package.json.

## Overview of the solution
- Used mongoose library to manage data and define schema. 
- Server uses routers for different HTTP methods like GET, POST, PUT and DELETE.
- Contains 2 get methods 1 for acccessing single document and other for all the documents.
- Update or Creating an order would require 3 hours of cooldown from the previous one.


## How it works!
- Getting all the orders would require calling a GET method which would give out all the orders without any filteration. 'Mongo _id_' is required to get specific order.
- Creating an Order requires POST method with JSON body to be sent via request.
- Updating an Order requires PUT method with 'mongo _id_' of that specific order with fields requiring to be updated. Note - This does not cannot multiple updates at once.
- Deleting also requires 'mongo _id_' to delete a specific order. 
-

## Changes to be made for production
- More mongo fields for justifying the requirements/needs of and order.
- jwt authorization, Login authentication to access database. 
- Multiple mongo schemas for mapping of the order.
- Add filters like date, more recent, unfulfilled orders instead of getting all the data at once.
- Database layer

## USAGE
- Use "http://localhost:40000/api" . Change base url accordingly.
- GET method would require just the URL above to access all the orders. Add mongo "_id_" after "/api" to get specific results for e.g. "http://localhost:40000/api/_id".
- Post method would require json object same as a the schema to create an order 
 for e.g. 
 ```json -
 {
    "totalFee" : 47657320,
    "services":[ {
        "id": "230"
        }
    ],
    "customerName": "customer1",
    "phoneNumber": "999999999",
    "countryCode": "91",
}
 ```
- For updating an order state mongo "_id_" would be needed in url params and fields which needs to be updatedin json body.
``` json 
{
 "name": "newCustomer2"
 }
 ```
 - Deleting an order would only require to pass mongo "_id_" url param.
