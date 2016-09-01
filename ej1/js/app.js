/*
Ejercicio 1
var numero = parseInt(prompt("Ingresa un N°"));
function sucesion(numero) {
  for (var m = 1; m <= numero; m++) {
   document.write(m +"<br>");
  }
}
sucesion(numero);*/


/*
Ejercicio 2
var numero = parseInt(prompt("Introduce un número"));
function sucesion(numero) {
for (var i = numero; i >= 1; i--) {
    document.write(i +"<br>");
  }
}
sucesion(numero);*/


/*
Ejercicio 3
var numero = parseInt(prompt("Introduce un número"));
function sucesion(numero) {
for (var i = 0; i <= numero; i+=2) {
    document.write(i +"<br>");
    }
}
sucesion(numero);*/

/*
Ejercicio 4
var numero = parseInt(prompt("Introduce un número"));
function sucesion(numero) {
for (var i = 2; i <= numero; i+=2) {
    document.write(i +"<br>");
    }
}
sucesion(numero);*/


/*
Ejercicio 5
var numero = parseInt(prompt("Introduce un número"));
function primo(numero){
    var esPrimo = true;
    for (var i = 2; i <= numero ; i++){
        esPrimo = true;
        for (var j = 2; j < i; j++){
            if ( i % j === 0){
                esPrimo = false;
            }
        }
        if(esPrimo){
            document.write(i);
        }
    }
}
primo(numero);*/


/*
var numero = parseInt(prompt("Introduce un número"));
function primos(numero){
	var dividiendo = 0;
	for (var i = 1; i <= numero; i++){
	for (var j = 1; j <= i; j++){
		if(i % j == 0)
			dividiendo++;
	}
	if(dividiendo == 2) 
		document.write(i +"<br>")
	dividiendo = 0;
	}
}
	primos(numero);*/


/*
Ejercicio 6
Una secuencia fibonaci comienza con los números 0 y 1 2 y 
a partir de estos,cada numero es la suma de los dos anteriores
//0 , 1 , 1 , 2 , 3 , 5 , 8 , 13 
//Ejemplo : 1+1=[2] 3+2=[5] 5+3=[8] 8+5=[13] 
function fibonacci(numero)
{
//declaro variables  y asignando 2 primeros valores que siempre inician en la serie fibonnaci
  var a=0,b=1,fibo; 
 numero=parseInt(prompt("Ingresa un Numero"));
 document.write(a +"\n");
 document.write(b +"\n");
 for(i=3; i<=numero; i++)
 {
   fibo=(a+b);
   document.write(fibo+ "\n");
   a=b; // ahora a vale b
   b=fibo; // y b toma el valor de mi calculo fibo
 }
}
fibonacci();*/

/*
var n = parseInt(prompt("cuenta los asteriscos"));
function asteriscos(n){
	for(var i = 1; i <= n; i++){
		for(var j = 1; j <= i; j++){
			document.write(" * ");
		}
		document.write("<br>");
	}
}
asteriscos(n)
*/

/*
var n = parseInt(prompt("cuenta los asteriscos"));
function asteriscos(n){
	for(var i = n; i >= 1; i--){
		for(var j = 1; j <= i; j++){
			document.write(" * ");
		}
		document.write("<br>");
	}
}
asteriscos(n)
*/


/*
var n = parseInt(prompt("cuenta los asteriscos"));
function asteriscos(n){
	for(var i = n; i >= 1; i--){
		for(var j = 1; j < i; j++){
			document.write("&nbsp;&nbsp;");
		}
		for(var k = 1; k <= n-j+1; k++){
			document.write("*");
		}
		document.write("<br>");
	}
}
asteriscos(n)
*/

/*
var numero = parseInt(prompt("cuenta los asteriscos"));
function asteriscos(numero){
	for(var j = 0; j < numero; j++){
		for(var i = 0; i < numero; i++){
		{ 
			if (i < j) {
			document.write("&nbsp;&nbsp;")
			else {
				document.write("*")
			}
			document.write("<br>")
		}
		}
		}
numero()
*/
function numero (n){
	for (var i = 1; i <= n; i++){
		for(var j = 1; n >= j; j++){
			if(i > j)
				document.write("&nbsp;&nbsp;");
			else{
				document.write("*")
			}
			document.write("<br>")
		}
	}
}
numero (5);