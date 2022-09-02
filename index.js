// Para el fallo de CORS
const cors = require("cors");

const dotenv = require("dotenv").config();
// Para poder contestar a las llamadas del front.
const express = require("express");
// Para llamar a la base de datos de MongoDB.
const mongoose = require("mongoose");

// Conexión a base de datos con login.
mongoose
  .connect(
    "mongodb+srv://" +
      process.env.USERNAME_DB +
      ":" +
      process.env.PASSWORD_DB +
      "@cluster0.mncurlr.mongodb.net/Hayile?retryWrites=true&w=majority",
  )
  .catch((err) => console.log("Bad Mongo Connection:\n" + err));

const app = express();

app.use(express.json());
app.use(cors());

// const usersRouter = require('./api/users/users.router');
// app.use('/api/users' , usersRouter)

const shortcutsRouter = require("./api/shortcuts/shortcuts.router");
app.use("/api/shortcuts", shortcutsRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
