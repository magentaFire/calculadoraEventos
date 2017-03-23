
//Definimos variables
var num1 = 0;
var num2 = 0;
//esta variable es un array donde se van a guardar los elementos que se van a operar
var arrayOperacion = [];
var suma = function(arrayNums)
{
  return arrayNums[0] + arrayNums[1];
}
var resta = function(num1, num2)
{
  return num1 - num2;
}
var multiplicacion = function(num1, num2)
{
  return num1 * num2;
}
var division = function(num1, num2)
{
  return num1 / num2;
}
//esta función agrega todos los caracteres a un array "display", concatena todo y lo envía al display de la calculadora
var muestraDisplay = function(valorDelBoton)
{
  document.getElementById('cajaResultado').value += valorDelBoton;
}
//esta función
var botonesOperacion = function()
{
  var valorCaja = document.getElementById("cajaResultado").value;
  if (arrayOperacion[0] == undefined)
  {
    arrayOperacion[0] = valorCaja;
    document.getElementById("cajaResultado").value = "";
    console.log(arrayOperacion);
  }
  else
  {
    arrayOperacion.push(valorCaja);
    document.getElementById("cajaResultado").value = "";
    console.log(arrayOperacion);
  }
  
}
