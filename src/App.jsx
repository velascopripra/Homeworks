import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TransactionForm from "./components/TransactionForm";
import ClientView from "./components/ClientView";
function App() {
  return (
    <Router>
      <nav style={{ textAlign: "center", margin: "1rem" }}>
        <Link to="/">Registrar</Link> | <Link to="/clientes">Clientes</Link>
      </nav>
      <Routes>
        <Route path="/" element={<TransactionForm />} />
        <Route path="/clientes" element={<ClientView />} />
      </Routes>
    </Router>
  );
}
export default App;