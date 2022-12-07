import React from 'react'

function Food(props) {
    return (
        <div className="card">
            <h2>{props.name}</h2>
            <h5>{props.serving}</h5>
            <p>Protein: 10g</p>
        </div>
    )
}

export default Food