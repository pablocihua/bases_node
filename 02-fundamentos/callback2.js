let employees = [{
        id: 1,
        name: 'Luis'
    },
    {
        id: 2,
        name: 'Ramon'
    },
    {
        id: 3,
        name: 'Daniel'
    }
];

let salaries = [{
    id: 1,
    salary: 100
}, {
    id: 2,
    salary: 150
}];

let getEmployee = (id, callback) => {
        let employeeDb = employees.find(employee => employee.id === id);
        // console.log(employeeDb)
        if (employeeDb) {
            callback(null, employeeDb);
        } else {
            callback(`Does not exist a employee with the ID ${id}`);
        }
    },
    getSalaty = (employee, callback) => {
        let salaryDb = salaries.find(salary => employee.id === salary.id);
        if (salaryDb) {
            let found = {
                name: employee.name,
                salary: salaryDb.salary
            };
            callback(null, found);
        } else {
            callback(`Did not find a salary for a employee ${employee.name}`);
        }
    }


getEmployee(1, (err, employee) => {
    if (err) {
        return console.log(err);
    } else {
        console.log(employee);
        getSalaty(employee, (err, result) => {
            if (err) {
                return console.log(err);
            } else {
                console.log(`The salay of ${result.name} is ${result.salary}`);
            }
        });
    }
});