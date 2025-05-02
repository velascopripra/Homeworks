import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { loginAuth } from "./store/slices/loginAuth";
import { useNavigate } from "react-router-dom";
import { googleAuth } from "./store/slices/googleAuth";
import "./styles/Login.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { stats, errorMessage } = useSelector((state) => state.auth);

  const onLogin = (event) => {
    event.preventDefault();
    dispatch(loginAuth({ email, password }));
  };

  const onGoogleLogin = (event) => {
    event.preventDefault();
    dispatch(googleAuth());
  };

  const goToRegister = () => {
    navigate("/");
  };

  useEffect(() => {
    if (stats === "authenticated") {
      navigate("/Home");
    }
  }, [stats, navigate]);

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1 className="auth-title">Iniciar Sesión</h1>
        <form onSubmit={onLogin} className="auth-form">
          <input
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Correo"
          />
          <input
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
          />
          <button type="submit">Acceder</button>
        </form>
  
        {errorMessage && <p className="error-msg">{errorMessage}</p>}
  
        <button className="google-btn" onClick={onGoogleLogin}>Iniciar con Google</button>
        <button className="secondary-btn" onClick={goToRegister}>¿No tienes cuenta? Regístrate</button>
      </div>
    </div>
  );
  
};

export default Login;
