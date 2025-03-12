import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { UserContext } from "./UserContext";

export const Login = () => {
    const { setUserValue, setLogged } = useContext(UserContext);
    const navigate = useNavigate();

    // Estado para usuario, contraseña y mensaje de error
    const [input, setInput] = useState({
        usuario: "",
        contraseña: ""
    });
    const [error, setError] = useState(""); 

    const log = () => {
        if (input.usuario.trim() === "" || input.contraseña.trim() === "") {
            setError("⚠️ Debes ingresar usuario y contraseña.");
            return; 
        }

        setError(""); 
        setUserValue(input.usuario);
        setLogged(true);
        navigate("/Home", { replace: true });
    };

    return (
        <>
            <div>
                <input
                    type="text"
                    placeholder="Ingresa tu Usuario"
                    onChange={(e) => setInput({ ...input, usuario: e.target.value })}
                    value={input.usuario}
                />
                <br /><br />
                <input
                    type="password"
                    placeholder="Ingresa tu Contraseña"
                    onChange={(e) => setInput({ ...input, contraseña: e.target.value })}
                    value={input.contraseña}
                />
                <br /><br />
                
                {error && <p style={{ color: "red" }}>{error}</p>} {}

                <button onClick={log}>
                    Inicia Sesión
                </button>
            </div>
        </>
    );
};

export default Login;
