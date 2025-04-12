import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerAuth } from "./store/slices/registerAuth";
import { useNavigate } from "react-router-dom";
import "./styles/Registro.css";

const Registro = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    email: '',
    password: ''
  });

  const [successMsg, setSuccessMsg] = useState("");

  const log = () => {
    navigate("/Login");
  };

  const onInputChange = (evt) => {
    const { name, value } = evt.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await dispatch(registerAuth(formState.email, formState.password));
      setSuccessMsg("Usuario registrado correctamente");
      setFormState({ email: "", password: "" });
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1 className="auth-title">Registro</h1>
        <hr />
        <form onSubmit={onSubmit} className="auth-form">
          <input
            name="email"
            type="email"
            placeholder="Correo"
            onChange={onInputChange}
            value={formState.email}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Contraseña"
            onChange={onInputChange}
            value={formState.password}
            required
          />
          <button type="submit">Registrarse</button>
        </form>
        {successMsg && <p className="success-msg">{successMsg}</p>}
        <button className="secondary-btn" onClick={log}>Ir al Login</button>
      </div>
    </div>
  );
  
};

export default Registro;
