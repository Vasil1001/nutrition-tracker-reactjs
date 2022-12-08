/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
import './App.css';
import './styles/searchFood.css';

import CalculateNutrients from './components/CalculateNutrients';
import FoodList from './components/FoodList';
import Header from './components/Header';

const App = () => {
  const [foods, setFoods] = useState([
    {
        name: "Chicken Breast",
        size: "200g",
        protein: "25g",
        category: "lunch"
    }, {
        name: "Egg",
        size: "50g",
        protein: "6g"
    }, {
        name: "Protein Oats",
        size: "200g",
        protein: "15g"
    }, {
        name: "Protein Yogurt",
        size: "200g",
        protein: "25g"
    }, {
        name: "Protein Shake",
        size: "200ml",
        protein: "25g"
    }
 ]);

  return (
    <div className="container">
      <Header />

      <div className="wrapper-card">
        <h3>Wednesday, 7th December 2022</h3>
      </div>

      <div className="row">

        <div className="col-left">
          <div className="wrapper-card">
            <FoodList foods={foods}/>
          </div>
        </div>

        <div className="col-right">
          <div className="wrapper-card">
            <CalculateNutrients />
          </div>

          <div className="wrapper-card">
            Selected Item info
          </div>

        </div>

      </div>

    </div>
  );
}



export default App;
