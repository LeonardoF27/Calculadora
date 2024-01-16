const display = document.getElementById("tela");

// ESCREVER NUMÉROS NA TELA
var numb  = document.querySelectorAll('.numero');
numb.forEach(function (button) {
    button.addEventListener("click", function () {
        display.innerHTML += button.innerText;
        });
});