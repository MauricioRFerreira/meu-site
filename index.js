const botaoLogin = document.getElementById("botao");
const checkbox = document.getElementById("check");

// Função para carregar os dados do localStorage
function carregarDados() {
    const usuarioSalvo = localStorage.getItem("usuario");
    const senhaSalva = localStorage.getItem("senha");
    
    if (usuarioSalvo) {
        document.getElementById("usuario").value = usuarioSalvo; // Preencher campo de usuário
    }
}

// Carregar dados ao abrir a página
window.onload = carregarDados;

botaoLogin.addEventListener("click", function(event) {
    event.preventDefault(); // Evitar que o formulário seja enviado

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha-login").value;

    const usuarioSalvo = localStorage.getItem("usuario");
    const senhaSalva = localStorage.getItem("senha");

    // Limpar mensagens anteriores
    const mensagemDiv = document.getElementById("mensagem-cadastro");
    mensagemDiv.innerText = "";

    // Verifica se os campos estão vazios
    if (usuario === "" || senha === "") {
        mostrarMensagem("Por favor, preencha todos os campos.", "red");
    } else if (!usuarioSalvo || usuario !== usuarioSalvo || senha !== senhaSalva) {
        mostrarMensagem("Usuário inválido. Por favor, cadastre-se.", "red");
    } else {
        // Se os campos estiverem preenchidos corretamente, salva os dados
        salvarDados(); 
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

// Função para mostrar mensagens
function mostrarMensagem(mensagem, cor) {
    const mensagemDiv = document.getElementById("mensagem-cadastro");
    mensagemDiv.innerText = mensagem;
    mensagemDiv.style.color = cor;
    mensagemDiv.style.textAlign = "center";
    mensagemDiv.style.marginTop = "10px";
}
