/*================================Boton Login*/
var modal = document.getElementById('id01');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/*================================a02JS*/
var juegoStr = '{"nombre":"ACA VA EL TITULO DEL JUEGO", "descripcion":"ACA VA LA DESCRIPCION DEL JUEGO - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "precio":" 99"}'
var juego = JSON.parse(juegoStr);


document.addEventListener("DOMContentLoaded", function () {


                  /*==========JSON==========*/
    document.getElementById("titulo").innerHTML = juego.nombre;
    document.getElementById("descripcion").innerHTML = juego.descripcion;
    document.getElementById("precio").innerHTML = "u$s "+ juego.precio;
                  /*========================*/
    var direccion = document.getElementById('direccion');
    var canti = document.getElementById('canti');
    var cantidad = document.getElementById('articulos');
    var valor = juego.precio;
    var costoenvio = 0;
    var envio = document.getElementById('envio');
    var enviovalor = document.getElementById('valorenvio');
    var enviop = 0;
    var totalcompra = document.getElementById('total');
    var resultadoTotal = 0;

    enviovalor.addEventListener("change", function(){
      valorenvio = parseInt(enviovalor.value);
      enviop = valorenvio * resultadoTotal;
      costoenvio = enviop/1000;
      envio.innerHTML = "$" + costoenvio;

      var numeroNaN = canti.value;
      var numero = parseInt(numeroNaN);
      var total = document.getElementById('costo');
      cantidad.innerHTML = numero;
      resultadoTotal = valor * numero;
      total.innerHTML = "$" + resultadoTotal;
      var iva = document.getElementById('iva');
      var ivaresultado = resultadoTotal * 0.22;
      iva.innerHTML = "$" + ivaresultado;

      var compraresultado = resultadoTotal + ivaresultado + costoenvio;
      totalcompra.innerHTML = compraresultado.toFixed(2);

      if (costoenvio != 0) {
        direccion.style.display = "block";
      }
      else {
        direccion.style.display = "none";
      };

    });

    canti.addEventListener("change", function(){
      valorenvio = parseInt(enviovalor.value);
      enviop = valorenvio * resultadoTotal;
      costoenvio = enviop/1000;
      envio.innerHTML = "$" + costoenvio;

      var numeroNaN = canti.value;
      var numero = parseInt(numeroNaN);
      var total = document.getElementById('costo');
      cantidad.innerHTML = numero;
      resultadoTotal = valor * numero;
      total.innerHTML = "$" + resultadoTotal;
      var iva = document.getElementById('iva');
      var ivaresultado = resultadoTotal * 0.22;
      iva.innerHTML = "$" + ivaresultado;

      var compraresultado = resultadoTotal + ivaresultado + costoenvio;
      totalcompra.innerHTML = compraresultado.toFixed(2);

    });
});

/*==============================a02*/

document.addEventListener("DOMContentLoaded", function () {

  document.getElementById("gamelist").innerHTML = "<li><a href='a03.html'><img src='img/index02/04.jpg'></a></li>" +
                                                  "<li><a href='a03.html'><img src='img/index02/05.jpg'></a></li>" +
                                                  "<li><a href='a03.html'><img src='img/index02/0.jpg'></a></li>" +
                                                  "<li><a href='a03.html'><img src='img/index02/06.jpg'></a></li>" +
                                                  "<li><a href='a03.html'><img src='img/index02/07.jpg'></a></li>" +
                                                  "<li><a href='a03.html'><img src='img/index02/08.jpg'></a></li>" +
                                                  "<li><a href='a03.html'><img src='img/index02/09.jpg'></a></li>" +
                                                  "<li><a href='a03.html'><img src='img/index02/10.jpg'></a></li>" +
                                                  "<li><a href='a03.html'><img src='img/index02/11.jpg'></a></li>" +
                                                  "<li><a href='a03.html'><img src='img/index02/12.jpg'></a></li>" +
                                                  "<li><a href='a03.html'><img src='img/index02/13.jpg'></a></li>" +
                                                  "<li><a href='a03.html'><img src='img/index02/14.jpg'></a></li>" +
                                                  "<li><a href='a03.html'><img src='img/index02/15.jpg'></a></li>" +
                                                  "<li><a href='a03.html'><img src='img/index02/16.jpg'></a></li>" +
                                                  "<li><a href='a03.html'><img src='img/index02/17.jpg'></a></li>" +
                                                  "<li><a href='a03.html'><img src='img/index02/18.jpg'></a></li>" +
                                                  "<li><a href='a03.html'><img src='img/index02/19.jpg'></a></li>" +
                                                  "<li><a href='a03.html'><img src='img/index02/20.jpg'></a></li>" +
                                                  "<li><a href='a03.html'><img src='img/index02/21.jpg'></a></li>" +
                                                  "<li><a href='a03.html'><img src='img/index02/22.jpg'></a></li>" +
                                                  "<li><a href='a03.html'><img src='img/index02/23.jpg'></a></li>";
})

/*================================a03*/
var slideIndex = 1; showDivs(slideIndex); function plusDivs(n) {showDivs(slideIndex += n);}
  function currentDiv(n) {showDivs(slideIndex = n);}
  function showDivs(n) {
var i;
var x = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
  x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {dots[i].className = dots[i].className.replace(" w3-white", "");}
  x[slideIndex-1].style.display = "block"; dots[slideIndex-1].className += " w3-white";}
