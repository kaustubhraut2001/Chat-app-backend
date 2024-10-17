export function setupSocket(io) {
    io.on("connect", (socket) => {
        console.log("Socket connected", socket.id);
        socket.on("disconnect", () => {
            console.log("User is disconnected", socket.id);
        });
    });
}
