const botaoCadastro = document.getElementById("login_button");

botaoCadastro.addEventListener("click", function(event) {

    event.preventDefault();

    const email = document.getElementById("username").value;
    const senha = document.getElementById("password").value;
    const confirmarSenha = document.getElementById("confirm_password").value;

    if (email === "" || senha === "" || confirmarSenha === "") {
        alert("Preencha todos os campos!");
        return;
    }

    if (senha.length < 6) {
        alert("A senha precisa ter pelo menos 6 caracteres!");
        return;
    }

    if (senha !== confirmarSenha) {
        alert("As senhas não são iguais!");
        return;
    }

    // Verificar se já existe uma conta
    let usuario = JSON.parse(localStorage.getItem("usuario"));

    if (usuario && usuario.email === email) {
        alert("Este e-mail já está cadastrado!");
        return;
    }

    // Salvar usuário no navegador
    const novoUsuario = {
        email: email,
        senha: senha
    };

    localStorage.setItem("usuario", JSON.stringify(novoUsuario));

    alert("Cadastro realizado com sucesso!");

    // Voltar para a tela de login
    window.location.href = "index.html";

});