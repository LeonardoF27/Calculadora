const display = document.getElementById("tela");

// ESCREVER NUMÉROS NA TELA
let numb  = document.querySelectorAll('.numero');
numb.forEach(function (button) {
    button.addEventListener("click", function () {
        display.innerHTML += button.innerText;     
        });
});

//ESCREVER O PONTO
btnPonto = document.querySelectorAll('.ponto');
btnPonto.forEach(function (button) {
button.addEventListener("click", function () {
        display.innerHTML += button.innerText;
        
    })
});
// LIMPAR O DISPLAY
var limparDisplay = document.getElementById('limpar');
limparDisplay.addEventListener("click", limpar);
function limpar() {
    display.innerHTML = "";
}



