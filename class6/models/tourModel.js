const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/tour.json");

//getting all 
const getAll = () => {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
}

//getting by id 
const getById = (id) => {
    const tours = getAllTours();
    return tours.find((tour) => tour.id === id)
}

//add new tour
const addTour = (newTour) => {
    const tours = getAllTours();
    tours.push(newTour);
    fs.writeFileSync(filePath, JSON.stringify(tours));
    return newTour;
}

module.exports = {
    getAll,
    getById,
    addTour
};