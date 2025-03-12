import { useState } from "react"
import { UserContext } from "./UserContext";

export const Provider = ({children}) => {
    const [user, setUserValue] = useState(null)
    const [logged, setLogged] = useState(false)

    return <UserContext.Provider value={{user, setUserValue, logged, setLogged}}>
        {children}                
    </UserContext.Provider>
}