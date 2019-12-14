/**
 * Understanding Callbacks
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

let getUser = (id, callback) => {

    let user = users.find( user => {
        return user.id === id;
    });

    if(!user)
        callback(`No existe un empleado con id ${id}`);
    else
        callback(null, user);
}

let getSalary = (user, callback) => {

    let salary = salaries.find(salary => {
        return salary.id === user.id;
    });

    if(!salary)
        callback(`No se encontró salario para usuario ${user.name}`);
    else
        callback(null, {name: user.name, salary: salary.salary});

}

getUser(4, (err, user) => {
    if(err)
        return console.log(err);

    getSalary(user, (err2, data) => {
        if(err2)
            return console.log(err2);
        
        console.log(data);
    });
});
