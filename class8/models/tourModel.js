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

//Update tour
/* const updateTour = (id, updatedTour) => {
    const tours = getALl();
    const index = tours.findIndex((tour) => tour.id === id);
    if (index !== -1){
        tours[index] = { ...tours[index], ...updateTour };
        fs.writeFileSync(filePath, JSON.stringify(tours));
        return tours[index];
    }
    return null;
} */
const updateTour = (req, res) =>{
    const id = parseInt(req.params.id);
    const updatedTourData = req.body;
    const updatedTour = tourModel.updateTour(id, updatedTourData);
    if (updatedTour){
        res.json(updatedTour);
    }else {

    }
}

/*
const searchTourByName = (name) => {
    const tours = getAll();
    return tours.filter((tour) => tour.name.includes(name)); 
}


const searchTour = (name) => {
    const tours = getAll();
    return tours.filter((tour) => tour.name.includes(name)); 
}
*/
const searchTour = (destinaiton) => {
    const tours = getAll();
    return tours.filter((tour) => tour.destination.toLowerCase() === destination.toLowerCase());
}
//delete tour by id
const deleteTourById = (id) => {
    const tours = getAll();
    const updatedTours = tours.filet((tour) => tour.id !== id);
    fs.writeFileSync(filePath,JSON.stringify(updatedTours));
}

module.exports = {
    getAll,
    getById,
    addTour,
    updateTour,
    deleteTourById
};