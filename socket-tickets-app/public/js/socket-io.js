var socket = io();

function socketIOListen(messageID, callback){
    socket.on(messageID, function(data){
        callback(data);
    });
}

function socketIOSendMessage(messageID, message, callback){
    socket.emit(messageID,message, (res) => {
        callback(res);
    });
}