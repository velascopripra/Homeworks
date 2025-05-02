import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fethFirebaseData, addDataToFirebase } from "./store/slices/firebaseThunk";

const DataComponent = () => {
    const dispatch = useDispatch()
    const {data, loading} = useSelector((state) => state.firebase)

    useEffect(() => {
        dispatch(fethFirebaseData())
    }, [dispatch])

    const handleAddData = () => {
        const newData = {name: "Nuevo dato", value: Math.random()}
        dispatch(addDataToFirebase(newData))
    }

    return (
        <div>
            <h2>Datos en Firebase</h2>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                data.map((item, index) => {
                    <p key={index}>
                        {item.name}: {item.value}
                    </p>
                })
            )}
            <button onClick={handleAddData}>Agregar Dato</button>
        </div>
    )
}

export default DataComponent