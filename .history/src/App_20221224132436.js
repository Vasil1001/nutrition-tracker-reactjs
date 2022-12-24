/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
import './App.css';
import './styles/searchFood.css';
import food_data_json from './data';
import CalculateNutrients from './components/CalculateNutrients';
import FoodList from './components/FoodList';
import { nanoid } from 'nanoid';
import SearchFood from './components/SearchFood';
import FetchFoodApi from './FetchFoodApi';
import SaveDailyMealCard from './components/SavedMeals/SavedMealsList';
import SetTargets from './components/SetTargets';

function App() {
  const [searchText, setSearchText] = useState('');
  const [foods, setFoods] = useState(food_data_json);
  const [mealItems, setMealItems] = useState([]); //totalNutrients is [] empty array

  const [targetProtein, setTargetProtein] = useState('');
  const [targetCalories, setTargetCalories] = useState('');
  const [targetSugar, setTargetSugar] = useState('');
  // Add an item from Food List using add meal btn to right column calculate nutrients tab
  const handleAddTargets = (prot, cal) => {
    const target = {
      prot = prot;
    }
  }
  const handleAddFoodItem = (name, serving, protein, calories, sugar) => { //get a meal and add to mealItems
    console.log("in func")
    const food = {
      id: nanoid(),
      name: name,
      serving: serving,
      protein: protein,
      calories: calories,
      sugar: sugar,
      category: "lunch"
    }
    const newFoods = [...foods, food]
    setFoods(newFoods); //'
    localStorage.setItem('foods', JSON.stringify(newFoods));
    console.log(newFoods)
  };

  const handleDeleteFoodItem = (id) => {
    const removeFoodItem = foods.filter((food) => food.id !== id);
    setFoods(removeFoodItem);
    localStorage.setItem('foods', JSON.stringify(removeFoodItem));
  };

  useEffect(() => {

    setFoods(localStorage.getItem('foods') ? JSON.parse(localStorage.getItem('foods'))
      : (food_data_json)
    );
  }, []);
  // Add an item from Food List using add meal btn to right column calculate nutrients tab
  const onAdd = (meal) => { //get a meal and add to mealItems
    const exists = mealItems.find((x) => x.id === meal.id);

    if (exists) { //increase it by 1 qty
      const newMealItems = mealItems.map((x) =>
        x.id === meal.id ? { ...exists, qty: exists.qty + 1 } : x //if meal in calc is == to meal id else don't change qty
      );
      setMealItems(newMealItems);
      localStorage.setItem('mealItems', JSON.stringify(newMealItems));
      // console.log(mealItems);
    } else {
      const newMealItems = [...mealItems, { ...meal, qty: 1 }];
      setMealItems(newMealItems);
      localStorage.setItem('mealItems', JSON.stringify(newMealItems));
    }
  };

  // Remove an item from mealItems using minus meal btn inside right column calculate nutrients tab
  const onRemove = (meal) => {
    const exists = mealItems.find((x) => x.id === meal.id);

    if (exists.qty === 1) {
      const newMealItems = mealItems.filter((x) => x.id !== meal.id);
      setMealItems(newMealItems);
      localStorage.setItem('mealItems', JSON.stringify(newMealItems));
    } else {
      const newMealItems = mealItems.map((x) =>
        x.id === meal.id ? { ...exists, qty: exists.qty - 1 } : x
      );
      setMealItems(newMealItems);
      localStorage.setItem('mealItems', JSON.stringify(newMealItems));
    }
  };

  useEffect(() => {
    setMealItems(localStorage.getItem('mealItems') ? JSON.parse(localStorage.getItem('mealItems'))
      : []
    );
  }, []);
  //let today = new Date().toLocaleDateString()
  var d = (new Date()).toString().split(' ').splice(1, 3).join(' ');

  return (
    <div className="container">
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div className="wrapper-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2>Track today's meals</h2>
            <h3>{d}</h3>
          </div>
          {/* <img src={'src/Images/bubble-gum-baguette-and-salad-in-a-paper-bag-tomatoes-on-a-plate-and-olive-oil.png'} alt='bubble'></img> */}

          <SetTargets  />
          {SetTargets()}
        </div>

        <div className="row">
          <div className="col-left">
            <div className="wrapper-card-food-list">
              <SearchFood
                handleSearchFood={setSearchText}
              />
              <FoodList
                food_data={foods.filter((food) => food.name.toLowerCase().includes(searchText))}
                onAdd={onAdd} onRemove={onRemove}
                mealItems={mealItems}
                handleAddFoodItem={handleAddFoodItem} handleDeleteFoodItem={handleDeleteFoodItem}
              />
            </div>

          </div> {/* left col */}

          <div className="col-right">
            <div className="wrapper-card-calculate-rightCol" >
              <CalculateNutrients onAdd={onAdd} onRemove={onRemove}
                mealItems={mealItems} countMealItems={mealItems.length}
                targets={targetProtein}
              />

            </div>

          </div> {/* bottom long col */}
          <div className="col-bot">
            <div className="wrapper-card">
              <FetchFoodApi />
            </div>
          </div>

          <div className="col-bot">
            <div className="wrapper-card">
              <SaveDailyMealCard />
            </div>
          </div>
        </div> {/* container end */}

      </div> {/* row end */}
      <footer style={{ color: 'gray', borderRadius: '0px', marginBottom: '1rem' }}>
        <br></br><br></br>
        <small>Developed by <a href="https://github.com/Vasil1001">Vasil.</a></small>
        <small>&nbsp;&nbsp;Illustration by Icons 8 from <a href="https://icons8.com/">Ouch!</a></small>
      </footer>
    </div>
  );
}
export default App;

