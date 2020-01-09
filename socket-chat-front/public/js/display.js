main();

function main(){
    displaySession();
}

function displaySession(){
    display('session');
}

function displayChat(){
    display('chat');
}

function dismissSession(){
    hide('session');
}

function dismissChat(){
    hide('chat');
}

function renderUsersConn(name, users){
    let content = `<div class="row"><div class="col-sm-12 text-center"><h5>Connected ${users.length - 1}</h5></div></div>`;
    users.map((user) => {
        if(user.name !== name)
            content += `<div class="row"><div class="col-sm-12 text-center">${user.name} <a onclick="enterChat('${user.name}')">chat</a></div></div><hr/>`;
    });
    document.getElementById('usersConnected').innerHTML = content;
}