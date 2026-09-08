const tourModel = require("../model/tourModel");

//get all tours
const getAllTours = (req, res) => {
    const tours = tourModel.getAll();
    res.json(tours)
};

module.exports = {
    getAllTours
}








const packages = require("./data/tour")
app.get("/", (req, res) => {
    res.status(200).res.send("Hello, World");
});

app.get("/packages", (req, res) => {
    const destination = req.query.destination;
    if (!destination){
        res.status(200).res.json(packages);
    }
    const filteredPackages = packages.filter((pkg) => pkg.destination === destination);
    
    res.status(200).res.json(filteredPackages);
});
app.get("/packages/:id", (req, res) => {
    const packageId = parseInt(req.params.id);
    const tourPackage = packages.find((pkg) => pkg.id === packageId);
    res.status(200).res.send(tourPackage);
});

app.post("/packages", (req, res) => {
    const newPackage = req.body;
    packages.push(newPackage);
    res.status(201).json(newPackage);
});

app.post("/packages", (req, res) => {
    const newPakag
})