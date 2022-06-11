import express from "express";

const app: express.Application = express();

const port: number = 3000;

app.get("/", (req, res) => res.json({ ok: 200 }));
app.get("/hello", (req, res) => res.json({ hello: "world" }));

app.listen(port, () => console.log(`listening ${port}`));
