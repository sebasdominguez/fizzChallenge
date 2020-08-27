
<div align="center"><strong>CHALLENGE HOMEPAGE PARA ECOMMERCE</strong></div>
<div align="center">SEBASTIAN DOMINGUEZ</div>
<dl>

  <dt>CONEXION CON API DE LA EMPRESA</dt><br />

  <dd>Esta app se comunica en cada acción para recuperar y renderizar datos.</dd>


  <dt>VIDEOS DEMO</dt><br />
  <dd>* <a href="https://www.dropbox.com/s/07ufmanti9o9a1b/vidWeb.mov?dl=0">Versión Web</a></dd>
  <dd>* <a href="https://www.dropbox.com/s/9mzswszthrh0v9z/vidMobile.mov?dl=0">Versión Mobile</a></dd>

</dl>


## Techs & Herramientas Utilizadas

* React.<br />
* React-Redux.<br />
* React-Hooks.<br />
* Styled Components.<br />
* Sass.<br />
* Express.<br />
* Webpack.<br />
* Axios.<br />
* Docker.<br />


### Instalación / Start Point</dt>

Ante todo, dependiendo como arribaste a este proyecto, Forkeá-Cloná / Descargá el repositorio.

* Opción óptima (con Docker):
1. Poné a correr Docker en tu ordenador.
2. En la Terminal, posicionarse en la carpeta /Front y ejecutar `docker build -t nombre .` (nombre: elegí el que desees)
3. Cuando finalice de construir la 'imagen', ejecutar `docker run -p 1337:1337 fizzchallengesebas`
4. La App te espera en el browser: <a href="http://localhost:1337/">PUERTO 1337</a>

* Opción sin Docker:
1. En la Terminal, posicionado sobre el root, ejecutar `npm -i`.
2. Luego ejecutar `npm start`.
3. La App te espera en el browser: <a href="http://localhost:1337/">PUERTO 1337</a>



### Consideraciones

1. Icos: para abarcar mayores herramientas, implementé 2 distintas formas de utilizar IcoMoon. 
* Através de la hoja de estilos (pj: componente "Products").
* Atraves del .json (pj: componente "Header").

2. React-Redux: hago uso del Store de Redux simplemente para dejar preparada la app entendiendo que el proyecto real debe contener demás secciones. De no haberlo pensado de esta manera, tranquilamente se resolvía todo con los estados locales de los respectivos componentes.

3. Filtros: implementé el mayor grado de filtro posible. Consideré una logica relacional, y no inclusiva. Es decir, se muestras productos por pantalla siempre y cuando se cumpla:
* Filtros con 1 solo "field": inclusivo (recolecta todos los productos que al menos cumplan con 1 filtro de dicho field.
* Filtros con + de 1 "field" (en nuestro caso Marcas y Categorías): los productos a mostrar deben cumplir al menos 1 campo de cada field pedidos.

4. WebApp: está diseñado para Web, como también para Mobile (ver videos Demo)
