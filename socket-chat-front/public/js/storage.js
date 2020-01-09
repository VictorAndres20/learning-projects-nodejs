function addUserConnected(id, name){
    let users = getObject(USERS_ID);
    users.push({id, name});
    return saveObject(USERS_ID,users);
}

function addChat(name, ownerMessage, message){
    let chats = getObject(CHATS_ID);
    let chatsFiltered = chats.filter((chat) => chat.name === name);
    if(chatsFiltered.length !== 0){
        let newChat = chatsFiltered[0];
        newChat.chats.push(buildMessage(ownerMessage, message));
        chats = removeChat(name);
        chats.push(newChat);
        chats = saveObject(CHATS_ID, chats);
    }    
    return chats;
}

function removeUserConnected(name){
    let users = getObject(USERS_ID);
    users.map((user, key) => {
        if(user.name === name)
            users.splice(key, 1);
    });
    return saveObject(USERS_ID,users);
}

function removeChat(name){
    let chats = getObject(CHATS_ID);
    chats.map((chat , key) => {
        if(chat.name === name)
            chats.splice(key, 1);
    });
    return saveObject(CHATS_ID, chats);
}

function getChat(name){
    let chats = getObject(CHATS_ID);
    chats = chats.filter((chat) => chat.name === name);
    if(chats.length === 0)
        return [];
    return chats[0].chats;
}

function buildEmpyChat(id, name){
    return {id, name, chats: []};
}

function saveObject(id, data){
    sessionStorage.setItem(id, JSON.stringify(data));
    return data;
}

function getObject(){
    return JSON.parse(sessionStorage.getItem(id));
}

function removeObject(){
    sessionStorage.removeItem(id);
}

function saveUser(name){
    sessionStorage.setItem(USER_ID, name);
}

function getUser(){
    return sessionStorage.getItem(USER_ID);
}

function removeUser(){
    sessionStorage.removeItem(USER_ID);
}