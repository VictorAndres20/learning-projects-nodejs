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

function displaySendMessage(){
    display('chatSendMessage');
}

function dismissSession(){
    hide('session');
}

function dismissChat(){
    hide('chat');
}

function dismissSendMessage(){
    hide('chatSendMessage');
}

function renderUsersConn(name, users){
    let content = `<div class="row"><div style="margin-top: 20px;" class="col-sm-12 text-center"><h6>Users online <span class="badge badge-success">${users.length - 1}</span></h6></div></div><hr/>`;
    users.map((user) => {
        if(user.name !== name){
            content += `<h5><a onclick="enterChat('${user.clientID}','${user.name}')" class="badge badge-light"><i class="fas fa-user" aria-hidden="true"></i> ${user.name}</a></h5><hr/>`;
        }
    });
    document.getElementById('usersConnected').innerHTML = content;
}

function renderChats(chatObj, me){
    let {name,chats} = chatObj;
    let content = "";
    chats.map((chat) => {
        let {owner, message} = chat; 
        if(owner === me)
            content += `<p style="background-color: #ddd"><strong>You: </strong>${message}</p>`;
        else
            content += `<p><strong>${owner}: </strong>${message}</p>`;
    });
    document.getElementById('chatUser').innerHTML = `Chatting with ${name}`;
    document.getElementById('chatScreen').innerHTML = content;
    displaySendMessage();
}