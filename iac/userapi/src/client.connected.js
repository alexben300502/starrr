// Assuming 'client' is a WebSocket client
if (client.connected) {
    // The client is connected, safe to send/receive data
    client.send("Hello, server!");
} else {
    // The client is not connected
    console.log("Connection is closed.");
}
