// server.js
import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

let activeTabs = 0;

io.on("connection", (socket) => {
  activeTabs++;
  io.emit("activeTabs", activeTabs);

  socket.on("disconnect", () => {
    activeTabs--;
    io.emit("activeTabs", activeTabs);
  });
});

app.use(cors());
app.get("/products", async (req, res) => {
  const prodcuts = await fetch("http://localhost:3001/products").then((q) =>
    q.json()
  );
  res.send(prodcuts);
});
app.get("/products/:id", async (req, res) => {
  const id = req.params.id;
  const prodcut = await fetch(`http://localhost:3001/products/${id}`).then(
    (q) => q.json()
  );
  res.send(prodcut);
});

app.get("/orders", async (req, res) => {
  const orders = await fetch("http://localhost:3001/orders").then((q) =>
    q.json()
  );
  res.send(orders);
});

app.get("/orders/:id", async (req, res) => {
  const id = req.params.id;
  const order = await fetch(`http://localhost:3001/orders/${id}`).then((q) =>
    q.json()
  );
  res.send(order);
});

app.delete("/orders/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const order = await fetch(`http://localhost:3001/orders/${id}`, {
      method: "DELETE",
    }).then((q) => q.json());
    res.send(order);
  } catch (error) {
        console.log(error);
  }
});

server.listen(3000, () => {
  console.log("Listening on port 3000");
});
