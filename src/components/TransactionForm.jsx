import { useState } from "react";
import "../styles/TransactionForm.css";
import { useDispatch } from "react-redux";
import { registrarTransaccion } from "../store/slices/clientesSlice";

const TransactionForm = () => {
  const [nombre, setNombre] = useState("");
  const [tipo, setTipo] = useState("consulta");
  const [texto, setTexto] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre.trim() || !texto.trim()) return;
    dispatch(registrarTransaccion({ nombre, tipo, texto }));
    setNombre("");
    setTexto("");
    setTipo("consulta");
  };

  return (
    
    <div className="form-container">
      <h2>Registra tu solicitud</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
          <option value="consulta">Consulta</option>
          <option value="reclamo">Reclamo</option>
        </select>
        <textarea placeholder="Escribe aquí tu solicitud" value={texto} onChange={(e) => setTexto(e.target.value)} />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default TransactionForm;
