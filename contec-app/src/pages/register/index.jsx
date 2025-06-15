import './style.css'
import Api from '../../services/api'

function Cadastro() {

  return (

    <div className="login-container">
      <div className="login-box">
        <div className="logo">
          <div className="logo-wrapper">
            <div className="logo-square"></div>
            <div className="logo-text">CONTEC</div>
          </div>
        </div>
        <h1>Login</h1>
        <form id="loginForm" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Usuário"
              required
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
     
          </div>
          <div className="input-group">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Senha"
              required 
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
 
          </div>
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>

  )
}

export default Cadastro
