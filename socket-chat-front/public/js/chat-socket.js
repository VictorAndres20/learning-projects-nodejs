function enter(){
    let name = document.getElementById('name').value;
    if(name === "")
        alert('Please, enter your name.');
    else{
        console.log('enter');
        // Validate name doesnt existe
        //connect or launch alert
        //save session
        dismissSession();
        displayChat();
    }
}