const mysql = require('mysql2');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: "localhost",
    // Your username
    user: "root",
    // Your password
    password: process.env.password,
    database: "employees_db"
  });
  
  connection.connect(function (err) {
    if (err) throw err;
  });
  
  module.exports = connection;