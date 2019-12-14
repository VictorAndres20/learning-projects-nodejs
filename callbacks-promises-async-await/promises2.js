/**
 * Cain promises
 */

let users = [
    {
        id:1,
        name: "Victor Andres"
    },
    {
        id: 2,
        name: "Paula Andre"
    },
    {
        id: 3,
        name: "Ana Carolina"
    },
    {
        id: 4,
        name: "Pepito Lamprea"
    }
];

let salaries = [
    {
        id: 1,
        salary: 20000000
    },
    {
        id: 2,
        salary: 25000000,
    },
    {
        id: 3,
        salary: 30000000
    }
]

let getUser = (id) => {

    return new Promise((resolve, reject) => {
        let user = users.find( user => {
            return user.id === id;
        });
    
        if(!user)
            reject(`No existe un empleado con id ${id}`);
        else
            resolve(user);
    });
    
}

let getSalary = (user) => {

    return new Promise((resolve, reject) => {
        let salary = salaries.find(salary => {
            return salary.id === user.id;
        });
    
        if(!salary)
            reject(`No se encontró salario para usuario ${user.name}`);
        else
            resolve({name: user.name, salary: salary.salary});
    });

}

getUser(10)
.then((user) => {
    console.log(`Usuario encontrado ${user.name}`);
    return getSalary(user);
})
.then((obj) => {
    console.log(`Salario de ${obj.name} es de $ ${obj.salary}`);
})
.catch((err) => {
    console.log(err);
})