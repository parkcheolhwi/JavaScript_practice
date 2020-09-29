var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on ( 'connection' , (socket) => { 
  socket.on ( 'chat message' , (data) => { 
    io.emit ( 'chat message' , data); 
  }); 
});

http.listen(1337, () => {
  console.log('listening on *:1337');
});