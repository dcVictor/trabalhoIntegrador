// Verificar se o usuário está logado e é administrador
if (!sessionStorage.getItem('loggedUser') || sessionStorage.getItem('userGroup') !== 'admin') {
    alert('Acesso restrito a administradores.');
    window.location.href = 'dashboard.html';
}

// Simulação de banco de dados (em produção, isso viria do backend)
let users = [
    { id: 1, username: 'admin', fullName: 'Administrador', group: 'admin', status: 'active' },
    { id: 2, username: 'victor.conto', fullName: 'Victor Conto', group: 'vendas', status: 'active' }
];

// Elementos do DOM
const modal = document.getElementById('userModal');
const modalTitle = document.getElementById('modalTitle');
const userForm = document.getElementById('userForm');
const addUserBtn = document.getElementById('addUserBtn');
const closeModal = document.querySelector('.close-modal');
const cancelButton = document.querySelector('.cancel-button');

// Estado da aplicação
let editingUserId = null;

// Funções auxiliares
function showModal(title = 'Novo Usuário') {
    modalTitle.textContent = title;
    modal.style.display = 'block';
}

function hideModal() {
    modal.style.display = 'none';
    userForm.reset();
    editingUserId = null;
}

function formatGroup(group) {
    const groups = {
        admin: 'Administrador',
        instalacao: 'Instalação',
        vendas: 'Vendas'
    };
    return groups[group] || group;
}

function createStatusBadge(status) {
    return `<span class="status-badge status-${status}">
        ${status === 'active' ? 'Ativo' : 'Inativo'}
    </span>`;
}

// Renderizar tabela de usuários
function renderUsers() {
    const tbody = document.getElementById('usersTableBody');
    tbody.innerHTML = users.map(user => `
        <tr>
            <td>${user.username}</td>
            <td>${user.fullName}</td>
            <td>${formatGroup(user.group)}</td>
            <td>${createStatusBadge(user.status)}</td>
            <td>
                <div class="table-actions">
                    <i class="fas fa-edit action-icon" onclick="editUser(${user.id})"></i>
                    <i class="fas fa-trash-alt action-icon" onclick="deleteUser(${user.id})"></i>
                </div>
            </td>
        </tr>
    `).join('');
}

// Operações CRUD
function addUser(userData) {
    const newId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
    users.push({ id: newId, ...userData });
    renderUsers();
}

function updateUser(id, userData) {
    const index = users.findIndex(u => u.id === id);
    if (index !== -1) {
        users[index] = { ...users[index], ...userData };
        renderUsers();
    }
}

function deleteUser(id) {
    if (confirm('Tem certeza que deseja excluir este usuário?')) {
        users = users.filter(u => u.id !== id);
        renderUsers();
    }
}

function editUser(id) {
    const user = users.find(u => u.id === id);
    if (user) {
        editingUserId = id;
        const form = document.getElementById('userForm');
        form.username.value = user.username;
        form.fullName.value = user.fullName;
        form.group.value = user.group;
        form.status.value = user.status;
        form.password.required = false;
        showModal('Editar Usuário');
    }
}

// Event Listeners
addUserBtn.addEventListener('click', () => {
    userForm.password.required = true;
    showModal();
});

closeModal.addEventListener('click', hideModal);
cancelButton.addEventListener('click', hideModal);

userForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = {
        username: e.target.username.value,
        fullName: e.target.fullName.value,
        group: e.target.group.value,
        status: e.target.status.value
    };

    if (editingUserId) {
        if (e.target.password.value) {
            formData.password = e.target.password.value;
        }
        updateUser(editingUserId, formData);
    } else {
        formData.password = e.target.password.value;
        addUser(formData);
    }

    hideModal();
});

// Fechar modal se clicar fora dele
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        hideModal();
    }
});

// Inicializar a tabela
renderUsers(); 