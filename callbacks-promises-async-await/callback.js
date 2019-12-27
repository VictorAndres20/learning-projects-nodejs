/**
 * Callbacks
 */

//  setTimeout(() => {
//     console.log("Hola");
//  }, 3000);

let getUserById = (id, callback) => {

    let user = {
        name: "Victor",
        id
    }

    if(id === 20)
        callback(`El usuario con id ${id} no existe`);
    else
        callback(null, user);

}

getUserById(1, (err, user) => {
    if(err)
        return console.log(err);

    console.log("Usuario ", user);
});