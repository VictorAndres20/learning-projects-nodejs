main();

function main(){
    if(! validateSession()){
        console.log('No session');
        displaySession();
    }else {
        console.log('Yes session');
        displayChat();
    }
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

function validateSession(){
    if(getUser() == null)
        return false;
    else
        return true;
}