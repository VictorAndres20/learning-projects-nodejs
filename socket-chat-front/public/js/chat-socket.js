logout();

socketIOListen('connUsers', (data) => {
    saveObject(USERS_ID, data.data.users);
    //Render list users connected
    renderUsersConn(getUser(), data.data.users);
});

function enter(){
    let name = document.getElementById('name').value;
    if(name === "")
        alert('Please, enter your name.');
    else{
        console.log('enter');
        socketIOSendMessage('conn', {name}, (res) => {
            let {ok, msg, data} = res;
            if(! ok)
                alert(msg);
            else{
                loginChat(name, msg, data);
            }
        });
    }
}

function enterChat(name){
    console.log(`Chat with ${name}`);
}

function loginChat(name, msg, data){
    console.log(msg);
    saveUser(name);
    saveObject(USERS_ID, data.users);
    cleanChats();
    dismissSession();
    displayChat();
    //Render list users connected
    renderUsersConn(getUser(), data.users);
}

function logout(){
    console.log("Logout");
    removeUser();
    cleanChats();
    cleanUsers();
    dismissChat();
    displaySession();
}