const express = require("express");
const app = express();
app.use(express.json());
const router = express.Router();
const tourController = require("..controller.getAllTours");

//get all tours
router.get("/tours", tourController.getALLTours)
router.get("/tours/:id", tourController.getTourById);
router.post("/tours", tourController.addTour);

module.exports = router;