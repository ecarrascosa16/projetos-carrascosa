function cadastrar() {
    let iusuario = document.getElementById("iusuario")
    let cadastro = iusuario.value
    
    sessionStorage.setItem("cadastro", cadastro)
    window.location.href = '../html/principal.html';

}

function carregarNome() {
    let cadastro = sessionStorage.getItem("cadastro");
    if (cadastro) {
        document.getElementById("nomeusuario").textContent = cadastro
    }
}

if (document.getElementById("nomeusuario")) {
    carregarNome();
}


let painel_login = document.getElementById('painel-login-fundo')
let painel_cadastro = document.getElementById('painel-cadastro-fundo')

function mostrarLogin() {
    painel_login.style.display = 'flex'
    painel_cadastro.style.display = 'none'
}



function fecharLogin() {
    painel_login.style.display = 'none'
}

function mostrarCadastro() {
    painel_cadastro.style.display = 'flex'
    painel_login.style.display = 'none'
}

function fecharCadastro() {
    painel_cadastro.style.display = 'none'
}
