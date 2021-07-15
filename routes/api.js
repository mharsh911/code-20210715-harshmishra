const express = require("express");
const bmiRouter = express.Router();
const BmiController = require("../controllers/BmiController");

bmiRouter.get('/getbmidata', BmiController.getBmiData);
bmiRouter.get('/getcategorynumbers', BmiController.getCategoryNumbers);

module.exports = bmiRouter;
