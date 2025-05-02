document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Validação dos logins permitidos com seus respectivos grupos
    const users = {
        'admin': { password: 'admin', group: 'admin' },
        'victor.conto': { password: '1234', group: 'vendas' },
        'raiel.babinski': { password: '1234', group: 'instalacao' }
    };

    const user = users[username];
    if (user && user.password === password) {
        // Armazena o usuário logado e seu grupo
        sessionStorage.setItem('loggedUser', username);
        sessionStorage.setItem('userGroup', user.group);
        // Redireciona para o dashboard
        window.location.href = 'dashboard.html';
    } else {
        alert('Usuário ou senha inválidos!');
    }
}); 