import { useState } from "react";
import Colas from "./Colas";
import "./ATM.css";

const initialData = [
  { name: "Carlos Herrera", amount: 320 },
  { name: "Luisa Fernández", amount: 150 },
  { name: "Andrés López", amount: 500 },
  { name: "Valeria Ruiz", amount: 80 },
  { name: "Jorge Martínez", amount: 240 }
];

const ATM = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [queue] = useState(new Colas());
  const [personas, setPersonas] = useState(initialData);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!name.trim() || amount <= 0) return;
    const newPerson = { name, amount: Number(amount) };
    queue.enqueue(newPerson);
    setPersonas([...personas, newPerson]);
    setName("");
    setAmount("");
  };

  return (
    <div className="atm-container">
      <h1 className="atm-title">Bienvenido al Cajero ATM</h1>

      <form className="atm-form" onSubmit={handleAdd}>
        <input
          placeholder="Nombre completo"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Monto a retirar"
          type="number"
          required
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Agregar a la cola</button>
      </form>

      <h2 className="queue-title">Cola actual:</h2>
      <ul className="queue-list">
        {personas.map((person, idx) => (
          <li key={idx}>
            <strong>{person.name}</strong> — <span>${person.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ATM;
