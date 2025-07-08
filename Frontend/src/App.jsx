import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Login from './pages/login/login.jsx'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import Header from './components/header/header.jsx'
import MenuLateral from './components/sideBar/menuLateral.jsx'
import Admin from './pages/admin/admin.jsx'
import HomePage from './pages/home/homePage.jsx'
import Ask from './pages/geminiChat/gemini.jsx'
import Programacao from './pages/schedule/programacao.jsx'
import Clientes from './pages/contacts/clientes.jsx'
import Orcamentos from './pages/budgets/orcamentos.jsx'
import Pedidos from './pages/orders/pedidos.jsx'


function App() {
  return (
    <Router>
      <Routes>
        {/* Rotas sem layout */}
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/ask" element={<Ask />} />

        {/* Rotas com layout */}
        <Route element={<Layout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/programacao" element={<Programacao />} />
          <Route path="/orcamentos" element={<Orcamentos />} />
          <Route path="/pedidos" element={<Pedidos />} />
          <Route path="/clientes" element={<Clientes />} />
        
      


        </Route>
      </Routes>
    </Router>
  );
}

function Layout() {
  return (
     <div className="layout-container">
      <Header />
      <main className="layout-content-container">
        <MenuLateral />

        <Outlet />

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
