const express = require("express");
const app = express();

app.get("/", (request, response) => {
  return response.send("Express JS");
});
app.listen(3000);

module.exports = app;
