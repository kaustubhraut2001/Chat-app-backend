import { Server } from "socket.io";

export function setupSocket(io: Server) {
  io.on("connect", (socket) => {
    console.log("Socket connected", socket.id);
    socket.on("message", (data) => {
      console.log("Received message from user: ", data);
      socket.broadcast.emit("message", data); // Broadcast the message to all connected users.
    });
    socket.on("disconnect", () => {
      console.log("User is disconnected", socket.id);
    });
  });
}
