var page = require('webpage').create();

var url = 'http://es.fakenamegenerator.com/gen-random-sp-sp.php'; //pagina que se esta abriendo

page.open(url, function (status){
  if (status !== "success") { //si falla la carga manda el mensaje y sale del navegador
    console.log("No se puede Acceder al sitio");
    phantom.exit();
  } else {

    var pnombre = page.evaluate(function(select){
      var nombre = ".address > h3:nth-child(1)"; //obtiene información de selector unico
      return document.querySelector(nombre).innerText.split(" ", 1);
    }, 'pnombre');

    var appellido = page.evaluate(function(select){
      var apellido = ".address > h3:nth-child(1)";
      var str = document.querySelector(apellido).innerText.split(" ", 1);
      return document.querySelector(apellido).innerText.split(str, 2);
    }, 'appellido');

    var posiblecorreo = page.evaluate(function(select){
      var correo = "dl.dl-horizontal:nth-child(11) > dd:nth-child(2)";
      return document.querySelector(correo).innerText;
    }, 'posiblecorreo');

    console.log("Nombre: " + pnombre, "\nApellidos: " + appellido, "\nCorreo: " + posiblecorreo + "@gmail.com" ); //muestra en consola

    phantom.exit(); //siempre se debera escribir salir del navegador de lo contrario nunca se cerrara
  }
});
