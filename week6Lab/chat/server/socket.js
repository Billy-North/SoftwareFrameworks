module.exports = {
    connect: function(io, PORT) {
        let currentRoom;
        io.on('connection',(socket) => {
            console.log('User has connected on port ' + PORT + ' : ' + socket.id);

            socket.on('room', function(room) {
                currentRoom = room
                socket.join(room);
            });

            socket.on('message',(message) => {
                io.to(currentRoom).emit('message',message);
            })
        })
    }
}

