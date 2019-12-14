/**
 * Understanding async await
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

let getUser = async (id) => {

    let user = users.find( user => {
        return user.id === id;
    });

    if(!user)
        throw new Error(`No existe un empleado con id ${id}`);
    
    return user;
}

let getSalary = async (user) => {

    let salary = salaries.find(salary => {
        return salary.id === user.id;
    });

    if(!salary)
        throw new Error(`No se encontró salario para usuario ${user.name}`);
    
    return {name: user.name, salary: salary.salary};

}

let getData = async (id) => {
    let user = await getUser(id);
    let obj = await getSalary(user);
    console.log(`Salario de ${obj.name} es de $ ${obj.salary}`);
}

getData(10)
.catch((err) => {
    console.log(err.message);
});