import { signInWithEmailAndPassword } from "firebase/auth";
import { checkingCredentials, login, logout } from "./authSlice";
import { auth } from "../../firebase/config";

export const loginAuth = ({ email, password }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());

        try {
            const res = await signInWithEmailAndPassword(auth, email, password);
            const { uid, displayName } = res.user;

            dispatch(login({ uid, email, displayName}));
        } catch (error) {
            dispatch(logout({ errorMessage: error.message }));
        }
    }
}