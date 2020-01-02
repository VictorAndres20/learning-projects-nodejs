var socket = io();
start();


function start(){
    //Listen when connection stablished
    socket.on('connect', function() {
        console.log('Connected to server');
    });

    //Listen message from server with listenerID 'message'
    socket.on('message', function(message) {
        console.log(`Message server: ${message.msg}`);
    })

    // Listen when disconnect server
    socket.on('disconnect', function() {
        console.log('Lost connection');
    });
}

function sendMessage(message){
    socket.emit('message',message, (res) => {
        console.log(`Server response: status:${res.ok} - message:${res.msg}`);
    });
}