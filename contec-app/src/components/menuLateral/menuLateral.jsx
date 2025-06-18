import './menuLateral.css'

function MenuLateral(){
    return(
       <div>
        <nav class="sidebar">
            <div class="menu-items">
                <ul>
                    <li><a href="#relatorios"><i class="fas fa-chart-bar menu-icon"></i>Relatórios</a></li>
                    <li><a href="#instalacoes"><i class="fas fa-hard-hat menu-icon"></i>Instalações</a></li>
                    <li><a href="#manutencoes"><i class="fas fa-tools menu-icon"></i>Manutenções</a></li>
                    <li><a href="#pedidos"><i class="fas fa-clipboard-list menu-icon"></i>Pedidos</a></li>
                    <li><a href="#orcamentos"><i class="fas fa-file-invoice-dollar menu-icon"></i>Orçamentos</a></li>
                    <li><a href="#clientes"><i class="fas fa-users menu-icon"></i>Clientes</a></li>
                </ul>
            </div>
            <div class="bottom-menu">
                <div class="admin-option">
                    <a href="/admin"><i class="fas fa-user-shield menu-icon"></i>Administrador</a>
                </div>
                <div class="logout-container">
                    <a href="/" id="logout"><i class="fas fa-sign-out-alt menu-icon"></i>Logout</a>
                </div>
            </div>
        </nav>
       </div>
    )
} 

export default MenuLateral;