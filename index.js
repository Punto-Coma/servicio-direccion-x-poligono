const express = require("express");

const PORT = 3001;

const app = express();

app.use(express.json());

app.use("/address", require("./routes/address"));

app.listen(3001, () => {
  console.log(`Listening on port: ${PORT}`);
});