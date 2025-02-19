function iniciarSliderAutomatico() {
    const div_centro = document.getElementById("centro_index");
    const titulo_filme = document.getElementById("titulo_filme");
    const tipo_filme = document.getElementById("tipo_filme");

    const imagens = 
    [   "assets/img/filme5.png", 
        "assets/img/filme2.jpg",
        "assets/img/filme3.jpg",
        "assets/img/filme4.jpg",
        "assets/img/filme5.jpg",
        "assets/img/filme6.jpeg"];

    const titulos = 
    [   "Top Gun - Maverick",
        "Blade Runner 2045",
        "O criador",
        "Rogue One - Uma história star wars",
        "O Mandalorian",
        "A Víuva Negra"
    ];

    const tipos = 
    [   "Ação, Drama",
        "História, Drama",
        "Ficção-ciêntifica",
        "Ficção-ciêntifica",
        "Ação",
        "Ação"
    ];

    let indiceAtual = 0;

    function trocarImagem() {
        const novaImagem = imagens[indiceAtual];
        titulo_filme.innerHTML = titulos[indiceAtual];
        tipo_filme.innerHTML = tipos[indiceAtual];
        div_centro.style.backgroundImage = `linear-gradient(360deg, 
    rgba(15,17,43,1) 0%, 
    rgba(15,17,43,1) 0%, 
    rgba(4,0,65,0) 100%), url(/${novaImagem})`;
        indiceAtual = (indiceAtual + 1) % imagens.length; 
    }

    trocarImagem(); 
    setInterval(trocarImagem, 5000);
}

document.addEventListener("DOMContentLoaded", () => {
    iniciarSliderAutomatico();
});