// Verificar se o usuário está logado
if (!sessionStorage.getItem('loggedUser')) {
    window.location.href = 'index.html';
}

const loggedUser = sessionStorage.getItem('loggedUser');
const userGroup = sessionStorage.getItem('userGroup');

// Exibir informações do usuário no cabeçalho
document.getElementById('userName').textContent = loggedUser;
document.getElementById('userGroup').textContent = userGroup.charAt(0).toUpperCase() + userGroup.slice(1);

// Definir os menus disponíveis para cada grupo
const menuPermissions = {
    admin: ['relatorios', 'pedidos', 'orcamentos', 'clientes', 'manutencoes', 'administrador', 'instalacoes'],
    vendas: ['relatorios', 'pedidos', 'orcamentos', 'clientes'],
    instalacao: ['relatorios', 'manutencoes', 'instalacoes']
};

// Função para mostrar apenas os menus permitidos
function updateMenuVisibility() {
    const allowedMenus = menuPermissions[userGroup] || [];
    document.querySelectorAll('.sidebar a').forEach(link => {
        const menuItem = link.parentElement;
        // Se for o link de logout, sempre mostra
        if (link.id === 'logout') {
            menuItem.style.display = 'block';
            return;
        }
        // Para os outros itens do menu, verifica as permissões
        const section = link.getAttribute('href').replace('#', '');
        menuItem.style.display = allowedMenus.includes(section) ? 'block' : 'none';
    });
}

// Gerenciar o logout
document.getElementById('logout').addEventListener('click', function(e) {
    e.preventDefault();
    sessionStorage.removeItem('loggedUser');
    sessionStorage.removeItem('userGroup');
    window.location.href = 'index.html';
});

// Gerenciar cliques no menu
document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.id !== 'logout') {
            e.preventDefault();
            const section = this.getAttribute('href').replace('#', '');
            
            // Redirecionar para a página de administração
            if (section === 'administrador') {
                if (userGroup === 'admin') {
                    window.location.href = 'admin.html';
                } else {
                    alert('Acesso restrito a administradores.');
                }
                return;
            }

            updateContent(section);
        }
    });
});

// Função para atualizar o conteúdo baseado na seção selecionada
function updateContent(section) {
    const content = document.querySelector('.dashboard-content');
    content.innerHTML = `<h2>${section.charAt(0).toUpperCase() + section.slice(1)}</h2>
                        <p>Conteúdo da seção ${section} será carregado aqui.</p>`;
}

// Inicializar a visibilidade do menu
updateMenuVisibility(); 