let painel_login = document.getElementById("painel-login-fundo");
let painel_cadastro = document.getElementById("painel-cadastro-fundo");

function mostrarLogin() {
  painel_login.style.display = "flex";
  painel_cadastro.style.display = "none";
}

function fecharLogin() {
  painel_login.style.display = "none";
}

function mostrarCadastro() {
  painel_cadastro.style.display = "flex";
  painel_login.style.display = "none";
}

function fecharCadastro() {
  painel_cadastro.style.display = "none";
}

// INICIALIZAÇÃO DO SWIPER

let swiper = new Swiper(".swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
        slidesPerView: 4,
        spaceBetween: 1
        },
        200: {
        slidesPerView: 4,
        spaceBetween: 1
        },
        1188: {
        slidesPerView: 7,
        spaceBetween: 1
        }
    }
  });