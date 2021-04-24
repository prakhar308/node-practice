const express = require("express");
const apiRoutes = require("./routes/festival");

const app = express();
const port = 3000;

app.use(express.json());
app.use("/", apiRoutes);

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
})