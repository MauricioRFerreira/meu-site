const botaoLogin = document.getElementById("botao");
const checkbox = document.getElementById("check");

// Função para carregar os dados do localStorage
function carregarDados() {
    const usuarioSalvo = localStorage.getItem("usuario");
    const senhaSalva = localStorage.getItem("senha");
    
    if (usuarioSalvo) {
        document.getElementById("usuario").value = usuarioSalvo; // Preencher campo de usuário
    }
    
    if (senhaSalva) {
        document.getElementById("senha-login").value = senhaSalva; // Preencher campo de senha
    }
}

// Função para salvar os dados no localStorage
function salvarDados() {
    if (checkbox.checked) { // Salvar apenas se o checkbox estiver marcado
        localStorage.setItem("usuario", document.getElementById("usuario").value);
        localStorage.setItem("senha", document.getElementById("senha-login").value);
    } else {
        localStorage.removeItem("usuario"); // Remover se o checkbox não estiver marcado
        localStorage.removeItem("senha");
    }
}

// Carregar dados ao abrir a página
window.onload = carregarDados;

botaoLogin.addEventListener("click", function(event) {
    event.preventDefault(); // Evitar que o formulário seja enviado

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha-login").value; // Corrigido o ID aqui

    if (usuario === "" || senha === "") {
        alert("Por favor, preencha todos os campos."); // Mensagem de erro
    } else {
        salvarDados(); // Salvar os dados ao clicar no botão de login
        // Se os campos não estiverem vazios, redireciona
        window.location.href = './pagina.html';
    }
});

function mostrarSenha() {
    var senha = document.getElementById("senha-login"); // Corrigido o ID aqui
    if (senha.type === "password") {
        senha.type = "text"; // Exibir a senha
    } else {
        senha.type = "password"; // Ocultar a senha
    }
}