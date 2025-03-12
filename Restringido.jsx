import { useContext } from "react"
import { UserContext } from "./UserContext"
import { useNavigate,  } from "react-router-dom"

const Restringido = ({children}) =>{
    const navigate = useNavigate()
    const back = () =>{
        navigate("/", {
            replace: true
        })
    }
    const {logged} = useContext(UserContext)
    return logged ? children : <>Por favor inicia sesión para acceder al Home<br/> <button onClick={back}>Volver al Inicio</button></> 
}

export default Restringido