import { useContext} from "react"
import { UserContext } from "./UserContext"
import { useNavigate } from "react-router-dom"

export const Home = () => {
    const navigate = useNavigate()
    const {user, logged ,setLogged} = useContext(UserContext)
    console.log(logged)
    
    const logout = () => {
        setLogged(false)
        navigate("/", {replace: true})
    }

    return (
        <>
            <div>
                <p>Hola {user}, tu fake login ha sido exitoso, estás en la pantalla de inicio</p>
                <button onClick={logout}>Cerra sesión</button>
            </div>
        </>
    )
}

export default Home