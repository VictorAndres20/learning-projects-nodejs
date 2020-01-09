socketIOListen('connect', function(data){
    console.log('connected');
});

socketIOListen('disconnect', function(data){
    console.log('Disconnected');
    alert("Disconnected");
});

socketIOListen('welcome', function(data){
    console.log(`status: ${data.ok} - Message: ${data.msg}`);
});

socketIOListen('tickets', function(data){
    loadScreen(data);
});

restart = () => {
    socketIOSendMessage('restart',{}, (res) => {
        loadScreen(res);
    })
}

loadScreen = (data) => {
    let tickets = data.tickets;
    let assigns = data.assigns;
    if(assigns.length != 0){
        loadActualTicket(assigns[assigns.length -1]);
    }
    else{
        loadActualTicket(null);
    }
    loadTickets(tickets);
    loadAssigns(assigns);
}

loadTickets = (tickets) => {
    let content = document.getElementById("tickets");
    if(tickets.length == 0)
        content.innerHTML = "No tickets";
    else{
        let dataHtml = "";
        tickets.map((ticket) => {
            let contentHtml = `Name: ${ticket.name} - Turn: ${ticket.number}`;
            dataHtml += buildDivRow(contentHtml);
        });
        content.innerHTML = dataHtml;
    }    
}

loadActualTicket = (assign) => {
    let content = document.getElementById("ticketCalled");
    if(assign == null)
        content.innerHTML = "No assign";
    else
        content.innerHTML = `Turn: ${assign.ticket.number} - Module: ${assign.module.number}`;
}

loadAssigns = (assigns) => {
    let content = document.getElementById("assigns");
    if(assigns.length == 0)
        content.innerHTML = "No Assigns";
    else{
        let dataHtml = "";
        assigns.map((assign) => {
            let contentHtml = `Turn: ${assign.ticket.number} - Module: ${assign.module.number}`;
            dataHtml += buildDivRow(contentHtml);
        });
        content.innerHTML = dataHtml;
    }    
}

buildDivRow = (content) => {
    return `<div class="row"><div class="col-sm-12 text-center">${content}</div></div>`;
}