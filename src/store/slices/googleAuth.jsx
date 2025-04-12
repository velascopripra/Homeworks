import { provider, auth } from "../../firebase/config"
import { signInWithPopup } from "firebase/auth"
import { login, logout, checkingCredentials } from "./authSlice"

export const googleAuth = () =>{
    return async (dispatch) => {
        dispatch(checkingCredentials())

        try{
            const res = await signInWithPopup(auth, provider)
            const {uid, displayName, email} = res.user

            dispatch(login({ uid, displayName, email}));
        }catch(error){
            dispatch(logout({errorMessage: error.message}))
        }
    }
}