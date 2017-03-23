
//Definimos variables
var num1 = 0;
var num2 = 0;
//esta variable es un array donde se van a guardar los elementos que se van a operar
var arrayOperacion = [];
//esta función agrega todos los caracteres a un array "display", concatena todo y lo envía al display de la calculadora
var muestraDisplay = function(valorDelBoton)
{
  document.getElementById('cajaResultado').value += valorDelBoton;
}

var botonSuma = function()
{
  var suma = 0;
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
    suma = Number(arrayOperacion[0]) + Number(arrayOperacion[1]);
    arrayOperacion = [];
    arrayOperacion[0] = suma;

    console.log(arrayOperacion);
  }
}

var botonResta = function()
{
  var resta = 0;
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
    resta = Number(arrayOperacion[0]) - Number(arrayOperacion[1]);
    arrayOperacion = [];
    arrayOperacion[0] = resta;

    console.log(arrayOperacion);
  }
}

var botonMultiplicacion = function()
{
  var multiplicacion = 1;
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
    multiplicacion = Number(arrayOperacion[0]) * Number(arrayOperacion[1]);
    arrayOperacion = [];
    arrayOperacion[0] = multiplicacion;

    console.log(arrayOperacion);
  }
}

var botonDivision = function()
{
  var division = 0;
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
    division = Number(arrayOperacion[0]) / Number(arrayOperacion[1]);
    arrayOperacion = [];
    arrayOperacion[0] = division;

    console.log(arrayOperacion);
  }
}

var botonPorcentaje = function()
{
  var porcentaje = 0;
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
    porcentaje = (Number(arrayOperacion[0])*Number(arrayOperacion[1])) / 100;
    arrayOperacion = [];
    arrayOperacion[0] = porcentaje;

    console.log(arrayOperacion);
  }
}

var botonModulo = function()
{
  var modulo = 0;
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
    modulo = Number(arrayOperacion[0]) % Number(arrayOperacion[1]);
    arrayOperacion = [];
    arrayOperacion[0] = modulo;

    console.log(arrayOperacion);
  }
}

var botonPotencia = function()
{
  var potencia = 0;
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
    potencia = Math.pow((arrayOperacion[0]), Number(arrayOperacion[1]));
    arrayOperacion = [];
    arrayOperacion[0] = potencia;

    console.log(arrayOperacion);
  }
}

var botonIgual = function()
{
  document.getElementById("cajaResultado").value = arrayOperacion[0].toFixed(3);
}
