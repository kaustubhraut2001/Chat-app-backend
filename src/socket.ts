import { Server } from "socket.io";

export function setupSocket(io: Server) {
  io.on("connect", (socket) => {
    console.log("Socket connected", socket.id);
    socket.on("disconnect", () => {
      console.log("User is disconnected", socket.id);
    });
  });
}
