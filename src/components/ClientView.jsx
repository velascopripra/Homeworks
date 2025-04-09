import { useState } from "react";
import "../styles/ClientView.css";
import { useSelector } from "react-redux";

const ClientView = () => {
  const clienteList = useSelector((state) => state.clientes.lista);
  const [actual, setActual] = useState(clienteList.head);
  const [mensajeAlerta, setMensajeAlerta] = useState("");

  const siguiente = () => {
    if (actual && actual.next) {
      setActual(actual.next);
    }
    else {
      setMensajeAlerta ("Ya no hay más clientes en la lista")
    }
  };

  return (
    <div className="client-container">
      <h2>CENTRO DE ATENCIÓN</h2>
      {actual ? (
        <div className="cliente-card">
          <h3>{actual.nombre}</h3>
          <div className="transacciones">
            <div>
            <h4>Consultas :</h4>
              {actual.consultas.getAll().length === 0 ? (
                <p className="mensaje-vacio">Este cliente no tiene consultas registradas.</p>
              ) : (
                <ul>
                  {actual.consultas.getAll().map((consulta, idx) => (
                    <li key={idx}>{consulta}</li>
                  ))}
                </ul>
              )}
      
            </div>
            <div>
              <h4>Reclamos :</h4>
              {actual.reclamos.getAll().length === 0 ? (
                <p className="mensaje-vacio">Este cliente no tiene reclamos registrados.</p>
              ) : (
              <ul>
                {actual.reclamos.getAll().map((reclamo, idx) => (
                  <li key={idx}>{reclamo}</li>
                ))}
              </ul>
              )}
            </div>
          </div>
          <button onClick={siguiente}>Siguiente Cliente</button>
          {mensajeAlerta && <p className="mensaje-alerta">{mensajeAlerta}</p>}
        </div>
      ) : (
        <p>No hay clientes registrados aún.</p>
      )}
    </div>
  );
};

export default ClientView;
