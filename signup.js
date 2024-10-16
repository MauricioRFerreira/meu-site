// Função para mostrar ou ocultar a senha
function mostrarSenha(inputId) {
    const input = document.getElementById(inputId);
    if (input.type === "password") {
        input.type = "text"; // Mostra a senha
    } else {
        input.type = "password"; // Oculta a senha
    }
}

// Carrega os dados do localStorage ao abrir a página
window.onload = function() {
    document.getElementById('cadastro-nome').value = localStorage.getItem('cadastro-nome') || '';
    document.getElementById('cadastro-email').value = localStorage.getItem('cadastro-email') || '';
    document.getElementById('cadastro-senha').value = localStorage.getItem('cadastro-senha') || '';
    document.getElementById('cadastro-confirma-senha').value = localStorage.getItem('cadastro-confirma-senha') || '';
}

// Salva os dados no localStorage sempre que eles mudarem
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', function() {
        localStorage.setItem(this.id, this.value);
    });
});

// Evento para o botão de cadastro
document.getElementById('botao-cadastro').addEventListener('click', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Captura os valores dos campos
    const nome = document.getElementById('cadastro-nome').value;
    const email = document.getElementById('cadastro-email').value;
    const senha = document.getElementById('cadastro-senha').value;
    const confirmaSenha = document.getElementById('cadastro-confirma-senha').value;

    // Verifica se as senhas são iguais
    if (senha != confirmaSenha) {
        document.getElementById('mensagem-cadastro').innerText = 'As senhas não coincidem.';
        return;
    }

    // Exibe a mensagem de sucesso
    const mensagem = document.getElementById('mensagem-cadastro');
    mensagem.innerText = 'Cadastro efetuado com sucesso!';
    mensagem.style.color = 'green';

    // Redireciona após um tempo (por exemplo, 2 segundos)
    setTimeout(() => {
        window.location.href = "index.html"; // Altere para o URL da página de login
    }, 2000);
});
