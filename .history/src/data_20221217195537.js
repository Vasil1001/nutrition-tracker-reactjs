import { nanoid } from "nanoid";
const food_data_file = [
        {
            id: nanoid(),
            name: "Chicken Breast",
            serving: 100,
            calories: 240,
            protein: 27,
            category: "lunch",
            sugar: 0,
        }, {
            id: nanoid(),
            name: "Egg",
            calories: 75,
            serving: 50,
            protein: 6.5,
            sugar: 4,
            category: "breakfast",
        }, {            
            id: nanoid(),
            name: "Protein Oats Cup",
            calories: 181,
            serving: 50,
            protein: 12,
            sugar: 6.2,
            category: "breakfast",
        }, {
            id: nanoid(),
            name: "Protein Yogurt",
            calories: 75,
            serving: 200,
            protein: 25,
            sugar: 6.3,
            category: "breakfast",
        }, {
            id: nanoid(),
            name: "Protein Shake",
            calories: 30,
            serving: 30,
            protein: 25,
            sugar: 4,
            category: "lunch",

        }
    ];


export default food_data;