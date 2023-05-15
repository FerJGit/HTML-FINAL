// ----- Armo el HEADER para todas las páginas -----
var elem = document.getElementById("idheader");
elem.innerHTML = `
  <div class="header">
    <div id="logo">
        <a href="index.html"><img src="img/logo.png" alt="logo" width="220vw"></a>
    </div>
    <nav>
        <ul>
        <li><a href="index.html">Inicio</a></li>
        <li><a href="acerca.html">Acerca de</a></li>
        <li><a href="Novedades.html">Novedades</a></li>
        <li><a href="contacto.html">Contacto</a></li>
        </ul>
    </nav>
  </div>
`


// ----- Armo el FOOTER para todas las páginas -----
var elem = document.getElementById("idfooter");
elem.innerHTML = `
  <a href="https://twitter.com/" target="_blank"><i class="fa-brands fa-twitter fa-l social_networks">   Twitter</i></a> 
  <i class="fa-brands fa-linkedin-in fa-l social_networks">   Linkedin</i> 
  <p>Copyright &copy;2023 - Comisión 23004: Luciano, Fernado, Cecilia, Franco</p>
`


// ----- Validación para la pagina de contacto -----
function validarEmail() {
    let valor = document.getElementById('InputEmail').value;
    // Expresión regular para validar el correo electrónico
    var regex = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*[.]([a-z]{2,3})$/;
    if (regex.test(valor)){
      //alert("La dirección de email " + valor + " es correcta.");
      return true;
    } else {
      document.getElementById('InputEmail').focus();
      alert("La dirección de email " + valor + " es incorrecta.");
      return false;
    }
  }


