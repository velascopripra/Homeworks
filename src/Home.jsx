import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logoutAuth } from "./store/slices/logoutAuth";
import { useNavigate } from "react-router-dom";
import "./styles/Home.css";

const Home = () => {
    const { displayName, email,} = useSelector((state) => state.auth);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onLogout = () => {
        dispatch(logoutAuth())
        navigate("/Login")
    }

    return (
        <div className="home-container">
          <div className="home-box">
            <h2 className="home-title">Bienvenido, {displayName || "Juan V."}!</h2>
            <p className="home-email">Email: {email}</p>
            <button className="logout-btn" onClick={onLogout}>Cerrar sesión</button>
          </div>
        </div>
      );
      
};

export default Home;
