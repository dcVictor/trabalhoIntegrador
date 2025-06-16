import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Login from './pages/login/login.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cadastro from './pages/register/register.jsx'

function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Cadastro />}/>
      </Routes>
    </Router>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
