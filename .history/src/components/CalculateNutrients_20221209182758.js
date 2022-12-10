import React from 'react'
import SearchFood from './SearchFood'

export default function CalculateNutrients({ mealItems, onAdd, onRemove}) {

    const itemsTotals = mealItems.reduce((acc, item) => acc + item.qty * item)
  // const {totalNutrients} = props;
  return (
    <div className="mealItems">
      {/* <SearchFood /> */}

      <h2>Total Nutrients</h2>
      <h5>Target: 2440 Cal, Dec 7, 2022</h5>
      <br></br>

      <div>
        {mealItems.length === 0 && <div>No meals added yet</div>}
      </div>

      <br></br>
      <div className="nutrient-totals">
        <p>Calories: 2440</p>
        <p>Protein: 120</p>
        <p>Fat: 120</p>
      </div>
    </div>
  )
}
