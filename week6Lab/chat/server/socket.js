module.exports = {
    connect: function(io, PORT) {
        let currentRoom;
        io.on('connection',(socket) => {
            console.log('User has connected on port ' + PORT + ' : ' + socket.id);

            socket.on('room',(room) => {
                currentRoom = room
                console.log("Recieved join room: ", room)
                socket.join(room);
            });

            socket.on('message',(message) => {
                console.log("Recieved message:", message, " in room ", currentRoom)
                //io.to(currentRoom).emit('message',message);
                io.in(currentRoom).emit('message', message);

            })
        })
    }
}

