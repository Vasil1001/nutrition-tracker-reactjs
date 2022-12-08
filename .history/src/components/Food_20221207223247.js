import React from 'react'

function Food(props) {
    return (
        <div className="card">
            <h3>{props.name}</h3>
            <p>Serving: {props.serving}</>
            <p>Protein: {props.protein}</h4h4>
        </div>
    )
}

export default Food
