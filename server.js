const express = require("express");
const morgan = require("morgan");

const loginRouter = require("./routes/loginRouter");
const registerRouter = require("./routes/registerRouter");
const maintenanceRouter = require("./routes/maintenanceRouter");
const newsRouter = require("./routes/newsRouter");
const contactRouter = require("./routes/contactRouter");

const hostname = "localhost";
const port = 3000;

const app = express();
app.use(morgan("dev"));
app.use(express.json());

app.use("/login", loginRouter);
app.use("/register", registerRouter);
app.use("/maintenance", maintenanceRouter);
app.use("/news", newsRouter);
app.use("/contact", contactRouter);

app.use(express.static(__dirname + "/public"));

app.use((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>Citview Lofts App Server</h1></body></html>");
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
