import {Routes, Route} from 'react-router-dom'
import './App.css'
import Songs from './Songs'
import Pages from './Pages'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Songs/>}></Route>
      <Route path="/Pages" element={<Pages/>}></Route>
    </Routes>
  )
}

export default App
