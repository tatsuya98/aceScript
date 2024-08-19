import express from "express";
import next from "next";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const server = express();

app.prepare().then(() => {
  // Custom API route
  server.get("/api/data", (req, res) => {
    res.json({ message: "Hello, world!" });
  });

  // Fallback to Next.js's handler for all other routes
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err?: any) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});

export default server;
