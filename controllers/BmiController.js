const BmiService = require("../services/BmiService");

class BmiController {
    constructor() {
    }
}

BmiController.getBmiData = (req, res) => {
    const result = BmiService.findBmi();
    if (result.success) {
        res.send({status: 200, data: result.data});
    } else {
        res.send({ status: 500, message: result.message });
    }
}

BmiController.getCategoryNumbers = (req, res) => {
    const result = BmiService.categoryNumbers();
    if (result.success){
        res.send({status: 200, data: result.data});
    } else {
        res.send({status: 500, message: result.message});
    }
}

module.exports = BmiController;