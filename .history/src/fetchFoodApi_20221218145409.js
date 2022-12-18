import { useEffect, useState } from "react"
import React from 'react'

export default function FetchFoodApi() {
    const API_KEY = 'XlbmfvBoP5wat3i76hIV0RZzstoaPCp9M52WGasf'
    const [apiData, setApiData] = useState(null);
    const [typedFood, setTypedFood] = useState('');
    const [fetchedFood, setFetchedFood] = useState('');

    function fetchFoodData(typedFood) {
        fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${API_KEY}&${typedFood}`)
            .then((response) => response.json())
            .then((data) => {
                setFetchedFood(data);
            }.catch ((err) => {
                console.log(err.message);
        );
            }
        useEffect(() => {
            fetchFoodData();
        }, []);

        return (

            <div className="container">
                <div className="wrapper-card">
                    <button onClick={openModal}>Open Modal</button>
                    <Modal
                        isOpen={modalIsOpen}
                        onAfterOpen={afterOpenModal}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Example Modal" >
                        <div className="modal-title">
                            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
                            <button onClick={closeModal}>close</button>
                        </div>

                        <div>I am a modal</div>
                        <form>
                            <input />

                        </form>
                    </Modal>
                </div>

                <div className="wrapper-card-bot">
                    <footer style={{ color: 'rgb(95, 95, 95)' }}>
                        <br></br><br></br>
                        <small>Developed by <a href="https://github.com/Vasil1001">Vasil.</a></small>
                        <small>&nbsp;&nbsp;Illustration by Icons 8 from <a href="https://icons8.com/">Ouch!</a></small>
                    </footer>
                </div>
            </div>
        )
    }

// https://api.nal.usda.gov/fdc/v1/foods/search?query=apple&pageSize=2&api_key=XlbmfvBoP5wat3i76hIV0RZzstoaPCp9M52WGasf
