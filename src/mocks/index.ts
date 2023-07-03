import express from "express";
import jsonServer from "json-server";

declare global {
  var server: { close: () => void };
}

const PORT: number = 4000;
global.server?.close();

const db = `${__dirname}/db.json`;

const server = jsonServer.create();
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();

const app: express.Application = express();

app.use(middlewares);
app.use("/api/v1", server.use(router));

global.server = app.listen(PORT, () => console.log(`listening ${PORT}`));
