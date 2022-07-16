use employees;

INSERT INTO department
    (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Sales Lead', 100000, 1),
    ('Software Engineer', 120000, 2),
    ('Accountant', 125000, 3),
    ('Lawyer', 190000, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Phil', 'Watson', 1),
    ('Wilbur', 'Soot', 2, NULL),
    ('Alex', 'Blade', 3),
    ('Tom', 'Simons', 4, NULL),