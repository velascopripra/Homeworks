import { signOut } from "firebase/auth";
import { checkingCredentials, logout } from "./authSlice";
import { auth } from "../../firebase/config";

export const logoutAuth = () => {
    return async(dispatch) => {
        dispatch(checkingCredentials())
        try {
            await signOut(auth)
            dispatch(logout())
        } catch (error) {
            dispatch(logout({errorMessage: error.message}))
        }
    }
}