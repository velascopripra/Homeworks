import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ATM from './ATM.jsx'
import Books from "./Books.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ATM />
  </StrictMode>,
)