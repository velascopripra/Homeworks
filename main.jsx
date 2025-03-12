import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FirstApp from './FirstApp'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FirstApp />
  </StrictMode>,
)