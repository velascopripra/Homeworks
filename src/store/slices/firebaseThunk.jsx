import { datab, ref, onValue, push, set } from "../../firebase/config";
import { setData, setLoading } from "./firebaseSlice";

export const fethFirebaseData = () => (dispatch) => {
    dispatch(setLoading())
    const dbRef = ref(datab, "mensajes")
    onValue(dbRef, (snapshot) => {
        const data = snapshot.val()
        dispatch(setData(data ? Object.values(data) : []))
    })
}

export const addDataToFirebase = (newData) => (dispatch) => {
    const dbRef = ref(datab, "mensajes")
    const newEntry = push(dbRef,newData)
    set(newEntry, newData)
}