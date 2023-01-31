import React from 'react'
import SavedMealCard from './SavedMealItem'

export default function SavedMealsList({ countMealItems, mealItems }) {
  return (
    <div>
    <div className="foodList" style = {{padding:'1rem'}}>
      <SavedMealCard
        countMealItems={countMealItems}
        mealItems={mealItems}
      />
      </div>
    </div>
  )
}
