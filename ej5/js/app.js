/*Una secuencia fibonaci comienza con los números 0 y 1 2 y 
a partir de estos,cada numero es la suma de los dos anteriores*/
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
fibonacci();