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

let getEmployee = (id) => {
    return new Promise((resolve, reject) => {
        let employeeDb = employees.find(employee => employee.id === id);
        // console.log(employeeDb)
        if (employeeDb) {
            resolve(employeeDb);
        } else {
            reject(`Does not exist a employee with the ID ${id}`);
        }
    });
}

let getSalary = (employee) => {
    return new Promise((resolve, reject) => {
        let salaryDb = salaries.find(salary => salary.id === employee.id)
        if (salaryDb) {
            let result = {
                employee: employee.name,
                salary: salaryDb.salary
            };
            resolve(result);
        } else {
            reject(`Did not find a salary for employee ${employee.name}`)
        }
    });
};

/* getEmployee(10)
.then((employee) => {
    // console.log(`Employee db ${employee.name}`);
    getSalary(employee)
    .then(
        (result) => {
            console.log(`The salary for employee ${ result.employee} is of ${result.salary}`);
        },
        err => {
            console.log(err)
        }
    );
}).catch((err) => {
    console.log(err)
}); */

getEmployee(1)
    .then((employee) => {
        return getSalary(employee);
    })
    .then((resp) => {
        console.log(`The salary for employee ${ resp.employee} is of ${resp.salary}`);
    })
    .catch((err) => {
        console.log(err)
    });