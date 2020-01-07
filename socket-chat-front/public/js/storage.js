function saveUser(name){
    sessionStorage.setItem('name', name);
}

function getUser(){
    sessionStorage.getItem('name');
}

function removeUser(){
    sessionStorage.removeItem('name');
}