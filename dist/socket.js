import prisma from "./config/db.config.js";
export function setupSocket(io) {
    io.use((socket, next) => {
        const room = socket.handshake.auth.room || socket.handshake.room;
        if (!room) {
            return next(new Error("Invalid Room Please pass room Id"));
        }
        socket.room = room;
        next();
    });
    io.on("connect", (socket) => {
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
