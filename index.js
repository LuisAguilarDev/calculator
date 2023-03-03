const express = require("express");

const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/calculate/:number1/:number2/:operation", (req, res, next) => {
  const { operation, number1, number2 } = req.params;
  let answer;
  if (operation === "+") {
    answer = +number1 + +number2;
  }
  if (operation === "-") {
    answer = +number1 - +number2;
  }
  if (operation === "*") {
    answer = number1 * +number2;
  }
  return res.json(answer);
});

const server = app.listen(3500, function () {
  let host = server.address().address;
  let port = server.address().port;
});
