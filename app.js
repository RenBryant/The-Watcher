const { prompt } = require("inquirer");
const table = require ("console.table")

const {
    searchDepartments,
    searchRoles,
    searchEmployees,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployee,
} = require ("./connection")

async function questionPrompt() {
const response = await prompt({
    type: "list",
    name: "choice",
    message: "Which task?",
    choices: [
    {
        name: "Search Through Departments",
        value: "search_departments"
    },
    {
        name: "Search Through Roles",
        value: "search_roles"
    },
    {
        name: "Search Through Employees",
        value: "search_employees"
    },
    {
        name: "Add 1 Department",
        value: "add_department"
    },
    {
        name: "Add 1 Role",
        value: "add_role"
    },
    {
        name: "Add 1 Employee",
        value: "add_employee"
    },
    {
        name: "Update an Employee",
        value: "update_employee"
    },
    {
        name: "quit",
        value: "quit"
    },
    ]
})

    const choice = response.choice

    switch (choice) {
        case "search_departments":
            return searchDepartments();
        case "search_roles":
            return searchRoles();
        case "search_employees":
                return searchEmployees();
        case "add_department":
                return addDepartment();
        case "add_role":
            return addRole();
        case "add_employee":
                return addEmployee();            
        case "update_employee":
            return updateEmployee();
        case "quit":
                return quit();
    }
};