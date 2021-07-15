const { findBmi, categoryNumbers } = require("../services/BmiService");

class BmiController {
    constructor() {
    }
}

BmiController.getBmiData = (req, res) => {
    const result = findBmi();
    if (result.success) {
        res.send(result.data);
    } else {
        res.send({ message: "failed in fetching data" });
    }
}

BmiController.getCategoryNumbers = (req, res) => {
    const result = categoryNumbers();
    if (result.success){
        res.send(result.data);
    } else {
        res.send(result.message);
    }
}

module.exports = BmiController;