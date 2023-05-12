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


// ----- Interacción con la API de JIKAN V4 AWANTIIIIAAAAAA -----
const uri = 'https://api.jikan.moe/v4/anime?q=';

var btnSearch = document.getElementById("btnSearch");
btnSearch.style.cursor="pointer";
btnSearch.addEventListener("click", getData);  
  
var ultimoDiv = "";
  
//document.getElementById("searchTitulo").focus();
 
function getData() {
  /*
  // Borro el último Div creado para mostrar luego el nuevo
  if (ultimoDiv != ""){
    try{
      document.getElementById('card_API').removeChild(ultimoDiv);
    }catch(error){
      console.log(error);
    }
  }
  */

  //console.log("Entre a getData");
  const nombrePelicula = document.getElementById("searchTitulo").value;
  //alert(nombrePelicula);
  const buscarPeli = uri + nombrePelicula + "&limit=1";
  //alert(buscar);
    
  fetch(buscarPeli)
    .then(response => response.json())
    .then(json => {
      if (json){
        // alert("A mostrar");
        //console.clear();
        console.log(json);
        for (elem in json.data)
          muestroData(json.data[elem]);
      }
    })
  .catch(error => alert(error));
}
  
function muestroData(elemento){
  /*
  console.clear();
  console.log("Imagen: " + elemento.images.jpg.image_url);
  console.log("Título: " + elemento.title);        
  console.log("URL: " + elemento.url);
  console.log("ID: " + elemento.mal_id);
  console.log("Año: " + elemento.year);
  console.log("Duración: " + elemento.duration);
  console.log("Clasificación: " + elemento.rating);
  console.log("Ranking: " + elemento.rank);
  let generos = "";
  for(let i=0;i<elemento.genres.length;i++)
  {
    // console.log(elemento.genres[i].name);
    generos += elemento.genres[i].name + " / ";
  }
  console.log("Género/s: " + generos.substring(0,generos.length-3));
*/
  let estudios = "";
  for(let i=0;i<elemento.studios.length;i++)
  {
    // console.log(elemento.studios[i].name);
    estudios += elemento.studios[i].name + " / ";
  }
/*  
  console.log("Estudio/s: " + estudios.substring(0,estudios.length-3));

  let productores = "";
  for(let i=0;i<elemento.producers.length;i++)
  {
    // console.log(elemento.producers[i].name);
    productores += elemento.producers[i].name + " / ";
  }
  // console.log("Productor/es: " + productores.substring(0,productores.length-3));
 
  let licencias = "";
  for(let i=0;i<elemento.licensors.length;i++)
  {
    // console.log(elemento.licensors[i].name);
    licencias += elemento.licensors[i].name + " / ";
  }
  //console.log("Licencia/s: " + licencias.substring(0,licencias.length-3));
      
  console.log("Trailer: " + elemento.trailer.embed_url);
  console.log("Resumen: " + elemento.synopsis);
  console.log("Información: " + elemento.background);
  console.log("______________________________________________");
  console.log(" ");
  
  const animeDataDiv = document.createElement('div');
  animeDataDiv.innerHTML = `
    <div class="card-result">
    <img src ="${elemento.images.jpg.image_url}" alt="${elemento.title}">
    <h3>${elemento.title}</h3>
    <p>Estudio/s: ` + estudios.substring(0,estudios.length-3) + `</p>`
    if (elemento.year != null)
      animeDataDiv.innerHTML +=`<p>Año: ${elemento.year}</p>`
    if (elemento.trailer.embed_url != null)
      animeDataDiv.innerHTML +=`<p><a href="${elemento.trailer.embed_url}" target="_blank">Ver trailer</a></p>`
    animeDataDiv.innerHTML += `</div>`;
  
  document.getElementById('card_API').appendChild(animeDataDiv);
  ultimoDiv = animeDataDiv;
  */

document.getElementById("img_API").setAttribute("src",`${elemento.images.jpg.image_url}`);
document.getElementById("img_API").setAttribute("alt",`${elemento.title}`);
document.getElementById("h3_API").innerHTML = `${elemento.title}`;
estudios = estudios.substring(0,estudios.length-3);
if (estudios != "")
  document.getElementById("pDir_API").innerHTML = "Estudio/s: " + estudios;
else
  document.getElementById("pDir_API").innerHTML = "";
if (elemento.year != null)
  document.getElementById("pAnio_API").innerHTML = "Año: " + `${elemento.year}`;
else
  document.getElementById("pAnio_API").innerHTML = "";
if (elemento.trailer.embed_url != null){
  document.getElementById("aTrailer_API").setAttribute("href",`${elemento.trailer.embed_url}`);
  document.getElementById("aTrailer_API").innerHTML = "Ver trailer";
}else
  document.getElementById("aTrailer_API").innerHTML = "";
}
// ----- Fin interacción API de JIKAN -----

