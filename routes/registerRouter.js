const express = require("express");
const registerRouter = express.Router();

registerRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Registered information will be sent to you");
  })
  .post((req, res) => {
    res.end(`User ${req.body.name} will be added`);
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /register");
  })
  .delete((req, res) => {
    res.statusCode = 403;
    res.end("DELETE operation not supported on /register");
  });

module.exports = registerRouter;
