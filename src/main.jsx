import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { FoodProvider } from './context/FoodContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <FoodProvider>
    <App />
    </FoodProvider>
  </React.StrictMode>,
)
