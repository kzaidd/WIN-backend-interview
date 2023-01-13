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
- 

### Web Service

- Your service should implement several endpoints that accept POST, GET, PUT and DELETE requests. Also 1 endpoint that accepts GET all orders.
- Your service should handle edge cases appropriately and return appropriate HTTP status codes.
- Your service should return an error on creation/updating an order within 3 hrs of a pre-existing order.
- Your service should return JSON results.
- Your service should have at least one test.

## Sample Data

Below is some sample data you can use to populate your database. Feel free to extend or modify this data for your project:

Service Records

```json
[
  {
    "id": 123,
    "name": "Inspection"
  },
  {
    "id": 789,
    "name": "Testing"
  },
  {
    "id": 456,
    "name": "Analysis"
  }
]
```

Orders

```json
[
  {
    "id": "223",
    "datetime": "2022-11-01T11:11:11.111Z",
    "totalfee": 100,
    "services": [
        {
        "id": "123",
        }
    ]
  },
  {
    "id": "224",
    "datetime": "2022-11-01T11:11:11.111Z",
    "totalfee": 100,
    "services": [
        {
        "id": "789",
        }
    ]
  },
  {
    "id": "225",
    "datetime": "2022-11-01T11:11:11.111Z",
    "totalfee": 100,
    "services": [
        {
        "id": "456",
        }
    ]
  }
]
```

## Duration

Up to 2 hours.

## Submission
1.  Clone this repo
2.  Create Web Services and tests
3.  Submit a Pull Request (PR)
4.  In the PR, include a README that includes the following:
      - A description of your solution at a high-level, including language used, framework used, roughly how it works, etc.
      - What trade-offs you made
      - Any assumptions you made that affected your solution
      - What you would change if you built this for production
      - Brief instructions on how to setup the environment to run your project
      - What parts of the spec were completed, how much time you spent, and any particular problems you ran into

## Evaluation
We are looking for: 
1. Communication
2. Solution Design
3. Completeness
4. Code clarity / readability
