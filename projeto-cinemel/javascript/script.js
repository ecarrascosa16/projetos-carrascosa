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

//-------- DESKTOP VERSON --------

let desktopCards1 = document.getElementById('desktop-seccao-cards1')
let desktopCards2 = document.getElementById('desktop-seccao-cards2')
let desktopStep = document.getElementById('next-step')
let desktopBack = document.getElementById('back-step')

function avancarPagina() {
    desktopCards1.style.display = 'none'
    desktopCards2.style.display = 'flex'
}

function voltarPagina() {
    desktopCards1.style.display = 'flex'
    desktopCards2.style.display = 'none'
}



//-------- MOBILE VERSON --------

let cards1 = document.getElementById('seccao-cards1')
let cards2 = document.getElementById('seccao-cards2')
let cards3 = document.getElementById('seccao-cards3')
let cards4 = document.getElementById('seccao-cards4')
let cards5 = document.getElementById('seccao-cards5')
let step1 = document.getElementById('next-step1')
let step2 = document.getElementById('next-step2')
let step3 = document.getElementById('next-step3')
let step4 = document.getElementById('next-step4')
let step5 = document.getElementById('next-step5')
let back1 = document.getElementById('back-step1')
let back2 = document.getElementById('back-step2')
let back3 = document.getElementById('back-step3')
let back4 = document.getElementById('back-step4')
let back5 = document.getElementById('back-step5')

function avancarPagina1() {
    cards1.style.display = 'none'
    cards2.style.display = 'flex'
    step1.style.display = 'none'
    step2.style.display = 'block'
    back1.style.display = 'none'
    back2.style.display = 'block'
}

function voltarPagina2() {
    cards1.style.display = 'flex'
    cards2.style.display = 'none'
    step1.style.display = 'block'
    step2.style.display = 'none'
    back1.style.display = 'block'
    back2.style.display = 'none'
}

function avancarPagina2() {
    cards2.style.display = 'none'
    cards3.style.display = 'flex'
    step2.style.display = 'none'
    step3.style.display = 'block'
    back2.style.display = 'none'
    back3.style.display = 'block'
}

function voltarPagina3() {
    cards2.style.display = 'flex'
    cards3.style.display = 'none'
    step2.style.display = 'block'
    step3.style.display = 'none'
    back2.style.display = 'block'
    back3.style.display = 'none'
}

function avancarPagina3() {
    cards3.style.display = 'none'
    cards4.style.display = 'flex'
    step3.style.display = 'none'
    step4.style.display = 'block'
    back3.style.display = 'none'
    back4.style.display = 'block'
}

function voltarPagina4() {
    cards3.style.display = 'flex'
    cards4.style.display = 'none'
    step3.style.display = 'block'
    step4.style.display = 'none'
    back3.style.display = 'block'
    back4.style.display = 'none'
}

function avancarPagina4() {
    cards4.style.display = 'none'
    cards5.style.display = 'flex'
    step4.style.display = 'none'
    step5.style.display = 'block'
    back4.style.display = 'none'
    back5.style.display = 'block'
}

function voltarPagina5() {
    cards4.style.display = 'flex'
    cards5.style.display = 'none'
    step4.style.display = 'block'
    step5.style.display = 'none'
    back4.style.display = 'block'
    back5.style.display = 'none'
}
