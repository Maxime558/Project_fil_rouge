import express from "express";
import http from "http";
const app = express();
import { Server } from "socket.io";
const server = http.Server(app);
const io = new Server(server);
const host = "127.0.0.1";
const port = "8000";
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

io.on("connection", (socket) => {
  socket.on("message", (data) => {
    console.dir(socket.id);
    console.dir(data);
    socket.broadcast.emit("resMessage", { data: data });
  });
});

server.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}`);
});
