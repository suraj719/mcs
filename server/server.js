const express = require("express");
const app = express();
const cors = require("cors");
const users = require("./route");

app.use(express.json());
app.use(cors());
app.use("/api/v1/", users);

app.get("/", (req, res) => {
  res.send("hello");
});
const port = process.env.PORT || 5000;
const start = async () => {
  try {
    app.listen(port, console.log(`server is listening to port ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();
