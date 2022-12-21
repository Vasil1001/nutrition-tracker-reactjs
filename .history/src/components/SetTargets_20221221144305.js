import React from 'react'

export default function SetTargets() {
    return (
        <details style={{ display: 'flex', flexDirection: 'column', border: "1px solid #aaa", borderRadius: "4px", padding: "0.5em", marginTop: "8px" }}>
            <div style={{ display: 'flex', gap: "10px", marginTop: '10px', justifyContent:"left", alignItems: 'flex-end' }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <label>Protein</label>
                    <input type="text" />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <label>Calories</label>
                    <input type="text" />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <label>Sugar</label>
                    <input type="text" />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <label></label>
                    <button style={{}}>Set targets</button>
                </div>
                <button style={{width: "5rem", height: "2rem", backgroundColor: "#1f6e77", color:'white', fontSize:}}>Set targets</button>
            </div>
        </details>
    )
}
