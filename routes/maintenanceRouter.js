const express = require("express");
const maintenanceRouter = express.Router();

maintenanceRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Request information will be sent to you");
  })
  .post((req, res) => {
    res.end(`Maintenance Request from ${req.body.name} will be added`);
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /maintenance");
  })
  .delete((req, res) => {
    res.statusCode = 403;
    res.end("DELETE operation not supported on /maintenance");
  });

module.exports = maintenanceRouter;
