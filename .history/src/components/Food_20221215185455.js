import React from 'react'
import { MdDeleteForever } from 'react-icons/md';

export default function Food({ handleDeleteFoodItem, item, food, onAdd, onRemove }) {
    return (
        <div className="food-card">
            <div className="food-name">
                <div style={{ display: 'flex',justifyContent: 'space-between'}}>
                    <h4 ><strong>{food.name}</strong></h4>

                    <MdDeleteForever
                        onClick={() => handleDeleteFoodItem(food.id)}
                        className="delete-icon"
                        serving="1.3em" 
                        color="rgb(249, 152, 152)"
                        />
                </div>
                <p><small>Per <b>{food.size}g </b>serving </small></p>
            </div>

            {/* <img className="small" src={food.image} alt={food.name}></img> */}

            <div className="food-nutrients">

                <p><small>Protein</small> <b>{food.protein}g</b>  </p>
                <p><small>Calories</small> 800</p>
                <p><small>Sugar</small> 3g</p>

            </div>
            <div>
                {item ? (
                    <div>
                        <button onClick={() => onRemove(item)} className="food-remove">
                            -
                        </button>

                        &nbsp;&nbsp;
                        <span>{item.qty}</span>
                        &nbsp;&nbsp;

                        <button onClick={() => onAdd(item)} className="food-add">
                            +
                        </button>
                    </div>
                ) : (

                    <button onClick={() => onAdd(food)} className="add-btn">Add meal</button>
                )}
            </div>
        </div>
    )
}

Food.defaultProps = {
    name: "Enter Food",
    serving: "0g",
    protein: "0g"
}
