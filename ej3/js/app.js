var numero = parseInt(prompt("Introduce un número"));
function sucesion(numero) {
for (var i = 0; i <= numero; i+=2) {
    document.write(i +"<br>");
    }
}
sucesion(numero);