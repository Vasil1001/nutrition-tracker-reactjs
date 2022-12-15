import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa';

function AddFood({ handleAddFoodItem }) {
  const [name, setName] = useState("")
  const [serving, setServing] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    handleAddFoodItem(name)
    setName("")
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">New Food</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        
        <input
          type="text"
          id="serving"
          value={serving}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>Add Food</button>
      </form>
      <h3>Add food </h3>
      <br></br>
      <h1><FaPlus /></h1>
    </div>
  )
}

export default AddFood