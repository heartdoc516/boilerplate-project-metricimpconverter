"use strict";

const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function (app) {
  let convertHandler = new ConvertHandler();
  app.get("/api/convert", (req, res, next) => {
    const queryRegexp =
      /^\d*\.?\d+(?:[Ll]|[Gg]al|[Kk][Mm]|[Mm][Ii]|[Ll][Bb][Ss]|[Kk][Gg])$/;
    if (queryRegexp.test(req.query.input)) {
      convertHandler.getNum(req.query.input);
      res.send("ok").status(200);
    }
  });
};
