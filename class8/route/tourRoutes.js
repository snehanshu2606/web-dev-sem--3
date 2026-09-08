const express = require("express");
const app = express();
app.use(express.json());
const router = express.Router();
const tourController = require("../controller/tourController");

//get all tours
router.get("/tours", tourController.getALLTours)
router.get("/tours/:id", tourController.getTourById);
router.post("/tours", tourController.addTour);
router.delete("/tours/:id", tourController.deleteTourById);

module.exports = router;