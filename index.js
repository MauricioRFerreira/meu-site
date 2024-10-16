const botaoLogin = document.getElementById("botao");
const checkbox = document.getElementById("check");

// Função para carregar os dados do localStorage
function carregarDados() {
    const usuarioSalvo = localStorage.getItem("usuarios") ? JSON.parse(localStorage.getItem("usuarios")) : {};
    
    const usuario = document.getElementById("usuario").value;
    if (usuarioSalvo[usuario]) {
        document.getElementById("usuario").value = usuario; // Preencher campo de usuário
    }
}

// Carregar dados ao abrir a página
window.onload = carregarDados;

botaoLogin.addEventListener("click", function(event) {
    event.preventDefault(); // Evitar que o formulário seja enviado

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha-login").value;

    const usuariosSalvos = localStorage.getItem("usuarios") ? JSON.parse(localStorage.getItem("usuarios")) : {};

    // Limpar mensagens anteriores
    const mensagemDiv = document.getElementById("mensagem-cadastro");
    mensagemDiv.innerText = "";

    // Verifica se os campos estão vazios
    if (usuario === "" || senha === "") {
        mostrarMensagem("Por favor, preencha todos os campos.", "red");
    } else if (!usuariosSalvos[usuario] || senha !== usuariosSalvos[usuario].senha) {
        mostrarMensagem("Usuário ou senha inválidos. Por favor, cadastre-se.", "red");
    } else {
        // Se os campos estiverem preenchidos corretamente, redireciona
        window.location.href = './pagina.html'; // Redireciona
    }
});

// Função para mostrar ou ocultar a senha
function mostrarSenha(inputId) {
    const input = document.getElementById(inputId);
    if (input.type === "password") {
        input.type = "text"; // Mostra a senha
    } else {
        input.type = "password"; // Oculta a senha
    }
}

// Função para mostrar mensagens
function mostrarMensagem(mensagem, cor) {
    const mensagemDiv = document.getElementById("mensagem-cadastro");
    mensagemDiv.innerText = mensagem;
    mensagemDiv.style.color = cor;
    mensagemDiv.style.textAlign = "center";
    mensagemDiv.style.marginTop = "10px";
}
