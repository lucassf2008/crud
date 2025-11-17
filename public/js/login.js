function login() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if (!email || !senha) {
        alert("Preencha os campos!");
        return;
    }

    fetch('http://localhost:3000/pessoas')
        .then(res => res.json())
        .then(dados => {
            const usuario = dados.find(u => u.email === email && u.senha === senha);

            if (usuario) {
                localStorage.setItem('usuarioNome', usuario.nome);
                localStorage.setItem('usuarioEmail', usuario.email);

                // Se for admin → vai para admin.html
                if (email === 'admin@romanceflix.com') {
                    window.location.href = 'html/admin.html';
                } 
                // Usuário normal → boasvindas
                else {
                    window.location.href = 'html/boasvindas.html';
                }

            } else {
                alert('Email ou senha incorretos!');
            }
        })
        .catch(() => alert('Erro ao realizar login.'));
}
