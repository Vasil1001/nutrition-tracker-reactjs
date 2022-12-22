import React, { useEffect, useState } from 'react'

export default function SetTargets(targProtein) {
    const [targetProtein, setTargetProtein] = useState('');
    targProtein = targetProtein;
    const handleSubmit = (e) => {
        e.preventDefault()
        // handleAddFoodItem(name, serving, protein, calories, sugar)

        localStorage.setItem('targetProtein', JSON.stringify(targetProtein));
        setTargetProtein(localStorage.getItem('targetProtein') ? JSON.parse(localStorage.getItem('targetProtein'))
            : ("")
        );

        // setName("")
        // setServing("")
        // setProtein("")
        // setCalories("")
        // setSugar("")
    }
    useEffect(() => {

        setTargetProtein(localStorage.getItem('targetProtein') ? JSON.parse(localStorage.getItem('targetProtein'))
            : ("Set target")
        );
    }, []);
    return (

        <details style={{ display: 'flex', flexDirection: 'column', border: "1px solid #aaa", borderRadius: "4px", padding: "0.5em", marginTop: "8px" }}>
            <div style={{ display: 'flex', gap: "10px", marginTop: '10px', justifyContent: "left", alignItems: 'flex-end' }}>
                <form onSubmit={handleSubmit}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <h3>Protein</h3>
                        <input
                            type="text"
                            id="targetProtein"
                            value={targetProtein}
                            onChange={(e) => setTargetProtein(e.target.value)}
                        />

                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <h3>Calories</h3>
                        <input type="text" />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <h3>Sugar</h3>
                        <input type="text" />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                    </div>
                </form></div>
            <br></br>
            <h4>{targetProtein > 0 ? targetProtein : "Target Protein: Set a target"}</h4>

            <button type="submit" onClick={handleSubmit}
                style={{ backgroundColor: "#1f6e77", color: 'white', fontSize: "1rem", padding: "0.5rem", fontWeight: "bold", marginTop: "0.5rem", cursor: "pointer" }}>
                Set targets
            </button>

        </details>
    )
}