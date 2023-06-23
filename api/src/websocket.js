import { io } from "./app.js";

io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("setRoom", (room) => {
    socket.data.room = room;
  });
  socket.on("setUsername", (username) => {
    socket.data.username = username;
    console.log(socket.data.username, "username recebido");
  });

  socket.on("message", (text) => {
    io.emit("receivedMessage", text);
  });
  socket.on("disconnect", (reason) => {
    console.log("user disconnected", reason);
    //  obs: "disconnect" é uma palavra reservada para o evento de desconexão no socket (assim como "connection" para conexão)
  });
});
