function enter(){
    let name = document.getElementById('name').value;
    if(name === "")
        alert('Please, enter your name.');
    else{
        console.log('enter');
        // Validate name doesnt existe
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

function loginChat(name, msg, data){
    console.log(msg);
    saveUser(name);
    saveUsers(data);
    dismissSession();
    displayChat();
}