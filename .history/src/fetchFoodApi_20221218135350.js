import { useEffect, useState } from "react"
import React from 'react'

export default function FetchFoodApi() {
    const API_KEY = 'XlbmfvBoP5wat3i76hIV0RZzstoaPCp9M52WGasf'
    const [apiData, setApiData] = useState(null);

    useEffect(() => {
        fetch('https://api.nal.usda.gov/fdc/v1/foods/search?api_key="{`API_KEY`}&query=Cheddar%20Cheese')
    }, []);

    return (
        <div>fetchFoodApi</div>
    )
}

// https://api.nal.usda.gov/fdc/v1/foods/search?query=apple&pageSize=2&api_key=XlbmfvBoP5wat3i76hIV0RZzstoaPCp9M52WGasf
