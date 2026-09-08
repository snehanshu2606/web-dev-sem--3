const express = require("express");
const app = express();
app.use(express.json());
const router = express.Router();
const tourController = require("..controller.getAllTours");

//get all tours
router.get("/tours", tourController.getALLTours)
module.exports = router;