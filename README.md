# The-Watcher

## Table of Contents

  * [Acceptance Criteria](#acceptance-criteria)
  * [Installation](#installation)
  * [Links](#links)  
  * [Usage](#usage)
  * [Technologies](#technologies)
  * [Repo Data](#repo)

## Acceptance Criteria

GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database

### Hints

You might want to use a separate file that contains functions for performing specific SQL queries you'll need to use. A constructor function or class could be helpful for organizing these. You might also want to include a seeds.sql file to pre-populate your database, making the development of individual features much easier.

const cTable = require('console.table');


## Installation
To install the necessary dependencies, run the following command:

```
npm i
```

in the package.json file which is located in the root directory.

### Running the application

Use the command npm start in the root folder!


## Links
![Video](./)
[Deployed Application]()


## Usage
In this application, the user is able to update employee information in a mySQL database.


## Technologies
The application contains the following technologies:

```
console.table
mysql2
inquirer

```


## Repo Data
This repo was contributed by RenBryant. I am a computer science student, a full-time worker, and a coding enthusiast! I love learning new things about computers and how they work and enjoy working on projects. Here is my GitHub Profile! [RenBryant](https://github.com/RenBryant). Thank you for checking out this project!