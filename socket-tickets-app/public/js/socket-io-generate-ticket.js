socketIOListen('connect', function(data){
    console.log('connected');
});

socketIOListen('welcome', function(data){
    console.log(`status: ${data.ok} - Message: ${data.msg}`);
});

function generate(){
    if(! validateBlankValue('name'))
        alert("Name is blank");
    else{
        let name = getValue('name');
        socketIOSendMessage('generateTicket',{name}, function(res){
            if(res.ok){
                alert(`Your tunr is: ${res.ticket.number}`);
                cleanValue('name');
            }
            else
                alert(`Please, try again`);
        });
    }
}