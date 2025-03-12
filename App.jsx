import './App.css'
import {Routes, Route} from "react-router-dom"
import { Ingresar } from './Ingreso'
import Login from './Login'
import { Provider } from './Provider'
import Home from './Home'
import Privado from './Restringido'

function App() {
    return (
        <Provider>
            
            <Routes>
                {/* rutas públicas */}
                <Route path="/" element={<Ingresar/>}></Route>
                <Route path="/Login" element={<Login/>}></Route>
                

                {/* rutas restringidas */}
                <Route path="/Home" element={
                    <Privado>
                        <Home />
                    </Privado>
                } />
            </Routes>
        </Provider>

    )
}

export default App
