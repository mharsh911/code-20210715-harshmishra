const bmiJsonData = [
    { "Gender": "Male", "HeightCm": 171, "WeightKg": 96 },
    { "Gender": "Male", "HeightCm": 161, "WeightKg": 85 },
    { "Gender": "Male", "HeightCm": 180, "WeightKg": 77 },
    { "Gender": "Female", "HeightCm": 166, "WeightKg": 62 },
    { "Gender": "Female", "HeightCm": 150, "WeightKg": 70 },
    { "Gender": "Female", "HeightCm": 167, "WeightKg": 82 }
];
const bmiCategoryHealthRisk = {
    "0-18.4": ["Under weight", "Malnutrition risk"],
    "18.5-24.9": ["Normal weight", "Low risk"],
    "25-29.9": ["Overweight", "Enhanced risk"],
    "30-34.9": ["Moderately obese", "Medium risk"],
    "35-39.9": ["Severely obese", "High risk"],
    "40-100": ["Very severely obese", "Very high risk"]
};

module.exports = { bmiJsonData, bmiCategoryHealthRisk }