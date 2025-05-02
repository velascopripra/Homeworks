import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import { login } from "./authSlice";

export const registerAuth = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      const { uid } = response.user;

      dispatch(
        login({
          uid,
          email,
          displayName: null,
        })
      );
    } catch (error) {
      console.error("Error en el registro:", error.message);
    }
  };
};
