import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Registro from './Registro.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.jsx'
import Login from './Login.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Crud } from './Crud.jsx'
import RealTimeMessages from './RealTimeMessages.jsx'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <BrowserRouter>
        <RealTimeMessages />
      </BrowserRouter>
    </Provider>
      
)
