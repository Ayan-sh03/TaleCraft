const express = require("express");
const cors = require("cors");
const connectDB = require("./db/connect");
const createTale = require("./controller/tales");
const route = require("./routes/route");

require("dotenv").config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.use("/api/v1/tales", route);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => console.log("Server is listening", PORT));
  } catch (err) {
    console.log(err);
  }
};

start();
