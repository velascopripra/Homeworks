import './styles/App.css'
import { Route, Routes, Navigate } from 'react-router-dom'
import Registro from './Registro'
import Login from './Login'
import { useSelector } from 'react-redux'
import Home from './Home'
import { Crud } from './Crud'
import DataComponent from './dataComponent'
import RealTimeMessages from "./RealTimeMessages"

function App() {
  const { stats } = useSelector((state) => state.auth);
  return (
    <Routes>
      <Route path="/" element={<Registro/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/Home" element={
        stats === "authenticated" ? <Home/> : <Navigate to="/Login"/>}></Route>
      <Route path="/crud" element={
        stats === "authenticated" ? <Crud/> : <Navigate to="/Login"/>}></Route>
        <Route path="/DataComponent" element={<DataComponent/>}></Route>
        <Route path="/realtimeDatabase" element={<RealTimeMessages/>}></Route>
    </Routes>
  )
}

export default App
