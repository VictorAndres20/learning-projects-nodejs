function saveUser(name){
    sessionStorage.setItem('name', name);
}

function getUser(){
    sessionStorage.getItem('name');
}

function removeUser(){
    sessionStorage.removeItem('name');
}

function saveUsers(name){
    sessionStorage.setItem('name', name);
}

function getUsers(){
    sessionStorage.getItem('name');
}

function removeUserConn(){
    sessionStorage.removeItem('name');
}

function removeAll(){
    sessionStorage.clear();
}