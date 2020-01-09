socketIOListen('connect', function(data){
    console.log('connected');
});

socketIOListen('welcome', function(data){
    console.log(`status: ${data.ok} - Message: ${data.msg}`);
});

socketIOListen('tickets', function(data){
    validateButton(data);
});

function assign(){
    if(! validateBlankValue('name'))
        alert("Name is blank");
    else if(! validateBlankValue('number'))
        alert('Number Module blank');
    else{
        let name = getValue('name');
        let number = getValue('number');
        socketIOSendMessage('assignTicket',{name, number}, function(res){
            validateButton(res);
            alert(`Your assign is ticket ${res.assigns[res.assigns.length - 1].ticket.number}`);
        });
    }
}

function validateButton(data) {
    if(data.ok){
        if(data.tickets.length === 0)
            noTickets();
        else
            areTickets();
    }
    console.log(`status: ${data.ok} - tickets: ${JSON.stringify(data.tickets)}
             - assigns: ${JSON.stringify(data.assigns)} - control: ${JSON.stringify(data.control)}`);
}

function noTickets(){
    let button = document.getElementById('button');
    let message = document.getElementById('message');
    button.style.display="none";
    message.innerHTML="No tickets";
    message.style.display="block";
}

function areTickets(){
    let button = document.getElementById('button');
    let message = document.getElementById('message');
    button.style.display="block";
    message.style.display="none";
}