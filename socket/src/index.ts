const io = require("socket.io")(8900, {
  cors: {
    origins: "*:*",
  },
});

console.log("socket started has started");

var socketsStatus = {};
const users: any = {};

const socketToRoom: any = {};

io.on("connection", (socket: any) => {
  // listen to chatMessage
  socket.on("chatMessage", (msg: string,roomId : string) => {
    io.to(roomId).emit("message", msg);
  });

  // listen for event inn editor
  socket.on("editor", (val: string,roomId : string) => {
    io.to(roomId).emit("editor", val);
  });

  // listen for event in output editor
  socket.on("output", (val: string,roomId : string) => {
    io.to(roomId).emit("output", val);
  });

  socket.on("input", (val: string,roomId : string) => {
    io.to(roomId).emit("input", val);
  });

  socket.on("language", (val: string,roomId : string) => {
    io.to(roomId).emit("language", val);
  });

  socket.on("joinRoom", (roomId: string, userId: string) => {
    socket.join(roomId);
    io.in(roomId).emit("userConnected",userId,roomId);
  });

});
