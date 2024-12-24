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

let mostrandologin = document.getElementById('seccao-login')

function mostrarLogin() {
    mostrandologin.style.display = 'block'
}

function fecharLogin() {
    mostrandologin.style.display = 'none'
}
