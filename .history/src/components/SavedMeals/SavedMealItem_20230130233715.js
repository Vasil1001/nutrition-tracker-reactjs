import React from 'react'

export default function SavedMealCard({ countMealItems,mealItems={mealItems},  totalProtein, totalCal, totalSugar }) {
  return (
    <div>
      <div>
       <h2>Saved Diary Card</h2>
        <p>Foods eaten: {countMealItems}</p>

      </div>
    </div>
  )
}