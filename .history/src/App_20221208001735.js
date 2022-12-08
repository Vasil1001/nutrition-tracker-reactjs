/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
import './App.css';
import './styles/searchFood.css';

import CalculateNutrients from './components/CalculateNutrients';
import FoodList from './components/FoodList';
import Header from './components/Header';


const App = () => {

  const [Foods, setFoods] = useState[
    {
        avatarUrl: "http://via.placeholder.com/100",
        name: "Chicken Breast",
        size: "200g",
        protein: "25g"
    },
    {
        avatarUrl: "http://via.placeholder.com/100",
        name: "Chicken Breast",
        size: "200g",
        protein: "25g"
    }, {
        avatarUrl: "http://via.placeholder.com/100",
        name: "Chicken Breast",
        size: "200g",
        protein: "25g"
    }, {
        avatarUrl: "http://via.placeholder.com/100",
        name: "Chicken Breast",
        size: "200g",
        protein: "25g"
    }, {
        avatarUrl: "http://via.placeholder.com/100",
        name: "Chicken Breast",
        size: "200g",
        protein: "25g"
    }
];

  return (
    <div className="container">
      <Header />

      <div className="wrapper-card">
        <h3>Wednesday, 7th December 2022</h3>
      </div>

      <div className="row">

        <div className="col-left">
          <div className="wrapper-card">
            <FoodList Foods />
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
