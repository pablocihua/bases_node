let  employees = [
    {
        id: 1,
        name: "Pablo"
    }, {
        id: 2,
        name: "Luis"
    }, {
        id: 3,
        name: "Maria"
    }
];

let  salaries = [
    {
        id: 1,
        salary: 100
    }, {
        id: 2,
        salary: 150
    }
];

/** Sin el 'async' pero con promesa */
let getEmployee_ = ( id ) => {
    return new Promise(( resolve, reject ) => {
        let employeeDb = employees.find( employee => employee.id === id );
        if( employeeDb ){
            resolve( employeeDb );
        } else {
            reject(`The employee does not exist with the ID ${ id }`);
        }
    });
},
/** Con el async, ya sin promesa */
getEmployee = async ( id ) => {
    let employeeDb = employees.find( employee => employee.id === id );
    if( employeeDb ){
        return employeeDb;
    } else {
        throw new Error(`The employee does not exist with the ID ${ id }`);
    }
}, 
/** Sin el 'async' pero con promesa */
getSalary_ = ( employee ) => {
    return new Promise(( resolve, reject ) => {
        let salaryDb = salaries.find( salary => salary.id === employee.id );
        if( salaryDb ){
            let result = {
                employee: employee.name,
                salary: salaryDb.salary,
                id: employee.id
            };
            resolve( result );
        } else {
            reject(`Does not exists an salary for employee ${ employee.name}`);
        }
    });
},
getSalary = async ( employee ) => {
    let salaryDb = salaries.find( salary => salary.id === employee.id );
    if( salaryDb ){
        let resp = {
            employee: employee.name,
            salary: salaryDb.salary,
            id: employee.id
        };

        return resp;
    } else {
        throw new Error(`Does not exist an salary for employee ${ employee.name}`);
    }
}

let getInformation = async ( id ) => {
    let employee = await getEmployee( id );
    let resp = await getSalary( employee );

    return `The employee ${ resp.employee } has a salary of $ ${ resp.salary }`
}
 
getInformation(4)
.then(( message ) => console.log( message))
.catch( err => console.log( err ));