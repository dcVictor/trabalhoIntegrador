import { useState } from 'react';
import Cadastro from '../../register/register';
import './admin.css';

function Admin(){
    const [taAberto, portao] = useState(false);
    return(

        
        <div className='layout-container'>
        <header>
            <div class="logo-wrapper">
                <div class="logo-square"></div>
                <div class="logo-text">CONTEC</div>
            </div>
            <div class="page-title">Administração de Usuários</div>
        </header>
    

            <div class="layout-content-container">
    
      
    
        <nav class="sidebar">
            <div class="menu-items">
                <ul>
                    <li><a href="/register"><i class="fas fa-arrow-left menu-icon"></i>Voltar</a></li>
                </ul>
            </div>
        </nav>

 
        <main class="content">
            <div class="admin-actions">
                <button id="addUserBtn" class="action-button" onClick={() => portao(true)}>
                    <i class="fas fa-user-plus"></i> Novo Usuário
                </button>
               


            </div>

            <Cadastro open={taAberto} onFechado={() => portao(false)} />

            <div class="dashboard-content">
                <div class="users-table-container">
                    <table class="users-table">
                        <thead>
                            <tr>
                                <th>Usuário</th>
                                <th>Nome</th>
                                <th>Grupo</th>
                                <th>Status</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody id="usersTableBody">
                        
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    </div>

        </div>
    )

}

export default Admin