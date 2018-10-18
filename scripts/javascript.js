/*================================Boton Login*/
var modal = document.getElementById('id01');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/*================================a02*/
document.addEventListener("DOMContentLoaded", function () {

var juegoStr = '{"nombre":"ACA VA EL TITULO DEL JUEGO", "descripcion":"ACA VA LA DESCRIPCION DEL JUEGO - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "precio":"u$s 99,95"}'
var juego = JSON.parse(juegoStr);

document.getElementById("titulo").innerHTML = juego.nombre;
document.getElementById("descripcion").innerHTML = juego.descripcion;
document.getElementById("precio").innerHTML = juego.precio;
})

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

/*================================*/
