import express from "express";
import configDotenv from "./src/config/dotenv";
import router from "./src/routes/routes";
import * as path from "path";
// import cors from 'cors';
// import routes from './src/routes/routes';

configDotenv();

const app = express();
const port = process.env.PORT;

// Defina o diretório onde os vídeos estão armazenados
const videosPath = path.join(__dirname, "/uploads");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(cors());
app.use("/videos", express.static(videosPath));
app.use(router);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(
    `${process.env.APP_NAME} app listening at http://localhost:${port}`
  );
});