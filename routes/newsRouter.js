const express = require("express");
const newsRouter = express.Router();

newsRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("News information will be sent to you");
  })
  .post((req, res) => {
    res.statusCode = 403;
    res.end("POST operation not supported on /news");
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /news");
  })
  .delete((req, res) => {
    res.statusCode = 403;
    res.end("DELETE operation not supported on /news");
  });

module.exports = newsRouter;
