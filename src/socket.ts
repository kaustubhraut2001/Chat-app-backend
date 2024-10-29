import { Server, Socket } from "socket.io";
import prisma from "./config/db.config.js";

interface CustomSocket extends Socket {
  room?: string;
}
export function setupSocket(io: Server) {
  io.use((socket: CustomSocket, next) => {
    const room = socket.handshake.auth.room || socket.handshake.room;
    if (!room) {
      return next(new Error("Invalid Room Please pass room Id"));
    }
    socket.room = room;
    next();
  });

  io.on("connect", (socket: CustomSocket) => {
    socket.join(socket.room);

    console.log("Socket connected", socket.id);
    socket.on("message", async (data) => {
      console.log("Received message from user: ", data);
      await prisma.chats.create({
        data: data,
      });
      // socket.broadcast.emit("message", data); // Broadcast the message to all connected users.
      socket.to(socket.room).emit("message", data);
    });
    socket.on("disconnect", () => {
      console.log("User is disconnected", socket.id);
    });
  });
}
