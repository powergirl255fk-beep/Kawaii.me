const botaoLogin = document.getElementById("login_button");

botaoLogin.addEventListener("click", function(event) {

    event.preventDefault();

    const email = document.getElementById("username").value;
    const senha = document.getElementById("password").value;

    if (email === "" || senha === "") {
        alert("Preencha seu e-mail e sua senha!");
        return;
    }

    // Buscar usuário armazenado
    const usuario = JSON.parse(localStorage.getItem("usuario"));

    if (!usuario) {
        alert("Você ainda não possui cadastro!");
        window.location.href = "cadastro.html";
        return;
    }

    // Verificar e-mail e senha
    if (email === usuario.email && senha === usuario.senha) {

        alert("Login realizado com sucesso!");

        // Redirecionar para a próxima página
        // window.location.href = "home.html";

    } else {
        alert("E-mail ou senha incorretos!");
    }

});