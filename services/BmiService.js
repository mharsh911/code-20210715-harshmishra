const { bmiJsonData, bmiCategoryHealthRisk } = require('../store/bmiData');
const uuid = require('uuid');

class BmiService {
    constructor(){

    }
}

BmiService.findBmiCategoryHealthRisk = (data) => {
    for (let key in bmiCategoryHealthRisk) {
        const upperRange = parseFloat(key.split('-')[1]);
        const lowerRange = parseFloat(key.split('-')[0]);
        if (data.bmi >= lowerRange && data.bmi <= upperRange) {
            data['category'] = bmiCategoryHealthRisk[key][0];
            data['healthRisk'] = bmiCategoryHealthRisk[key][1];
            break;
        }
    }
}

BmiService.findBmi = () => {
    if (bmiJsonData) {
        bmiJsonData.map(data => {
            data["id"] = uuid.v1();
            const heightInM = data.HeightCm * 0.01
            let bmi = data.WeightKg / (heightInM * heightInM);
            data["bmi"] = bmi;
            BmiService.findBmiCategoryHealthRisk(data);
        })
        return { success: true, data: bmiJsonData };
    } else {
        return { success: false, message: "some error has occured!" };
    }
}

BmiService.categoryNumbers = () => {
    const result = BmiService.findBmi();
    let underweightCount = 0;
    let overweightCount = 0;
    let normalweightCount = 0;
    let moderatelyobeseCount = 0;
    let severelyobeseCount = 0;
    let veryseverelyobeseCount = 0;
    if (result.success) {
        bmiJsonData.map(data => {
            if (data.category === "Under weight") {
                underweightCount += 1;
            } else if (data.category === "Normal weight") {
                normalweightCount += 1;
            } else if (data.category === "Overweight") {
                overweightCount += 1;
            } else if (data.category === "Moderately obese") {
                moderatelyobeseCount += 1;
            } else if (data.category === "Severely obese") {
                severelyobeseCount += 1;
            } else if (data.category === "Very severely obese") {
                veryseverelyobeseCount += 1;
            }
        })
        return {
            success: true,
            data: {
                underweightCount: underweightCount,
                overweightCount: overweightCount,
                normalweightCount: normalweightCount,
                moderatelyobeseCount: moderatelyobeseCount,
                severelyobeseCount: severelyobeseCount,
                veryseverelyobeseCount: veryseverelyobeseCount
            }
        }
    } else {
        return { success: false, message: result.message };
    }
}

module.exports = BmiService