const express = require("express");
const cors = require("cors");
const { sequelize } = require("./models");
require("pg");

const app = express();

app.use(express.json());
app.use(cors());

// serve static files from public
app.use(express.static(path.join(__dirname, "public")));

sequelize
  .authenticate()
  .then(() => console.log("DB Connected"))
  .catch((error) => console.log("Failed to connect to DB", error));

app.listen(3000, () => {
  console.log("Server is listening to port 3000");
});
