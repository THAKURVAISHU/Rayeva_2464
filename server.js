require("dotenv").config();
const express = require("express");
const connectDB = require("./db/connect");
const apiRoutes = require("./routes/api");
const app = express();
app.use(express.json());

app.use("/api",apiRoutes);

const PORT = process.PORT ||5000;
connectDB();
app.listen(PORT,()=>console.log(` 🌩️  server running on port${PORT}`));
