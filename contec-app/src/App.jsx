import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Login from './pages/login/login.jsx'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import Cadastro from './pages/register/register.jsx'
import Header from './components/header.jsx'

function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Layout />}/>
      </Routes>
    </Router>
  )
}

function Layout() {
  return (
    <div>
      {<Header />}
      <main>
        <Outlet /> {<Cadastro />}
      </main>
    </div>
  );
}

export default App;


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
