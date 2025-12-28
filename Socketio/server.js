import express from 'express'
import {Server} from "socket.io";
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { createServer } from 'node:http';
const app = express()
const server=createServer(app);
const io = new Server(server);
const __dirname = dirname(fileURLToPath(import.meta.url));

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});



io.on('connection', (socket) => {
  console.log('a user connected',socket.id);
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
     io.emit('chat message', msg);
  });
  socket.on("joinRoom1",(Room1)=>{
    socket.join(Room1);
    console.log(`User with ID: ${socket.id} joined room: ${Room1}`);
  })
  socket.on("messageRoom1",()=>{
    io.to("Room1").emit("messageRoom1","Hello Room1 members!");
    });
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(3000, () => {
  console.log(`Example app listening on port 3000`)
})

