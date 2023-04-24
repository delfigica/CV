const nombre = "Delfina Cañas";

const experiencia = [
  {
    lugar: "Trabajo freelance",
    periodo: "May 2022 - Actualidad",
    descripción:
      "He trabajado desarrollando software para diferentes clientes y en diferentes industrias. He utilizado varios lenguajes de programación y he trabajado en proyectos que involucran diseño, implementación y programación. He desarrollado habilidades para gestionar proyectos de manera autónoma, además de resolver problemas y tomar decisiones rápidamente.",
  },
  {
    lugar: "AguaZarca Inmobiliaria",
    periodo: "May 2018 - May 2022",
    descripción:
      "En mi trabajo como secretaria y social media manager desarrollaba tareas como la administración en redes sociales, ingresar propiedades a medios digitales, archivar documentos, pago y comprobación de deuda y atención a clientes. ",
  },
  {
    lugar: "Alto Brillo",
    periodo: "Mar 2016 -  Mar 2017",
    descripción:
      "En mi trabajo como vendedora hacía atención al publico, administración  del stock, llevaba el registro de productos y ventas para luego cargarlos al sistema",
  },
];

const estudios = [
  {
    lugar: "Nueva Escuela Juan Mantovani",
    periodo: "2011-2018",
    descripción: "Bachiller en Ciencias Naturales",
  },
];

const lenguajesActuales = [
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1024px-React.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
  "https://mui.com/static/logo.png",
  "https://www.cmswire.com/-/media/6f319f84dc3d4db69457aeda6ffc092f.ashx",
];

const lenguajesAprendiendo = [
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/visualstudio/visualstudio-plain.svg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Spring_Framework_Logo_2018.svg/245px-Spring_Framework_Logo_2018.svg.png",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-plain.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png?20170401104355",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/250px-Vue.js_Logo_2.svg.png",
];

// Cambia el nombre del H1 que con tiene el nombre del usuario
var nombreDOM = document.getElementById("name");
nombreDOM.innerText = nombre;

// Itineración que crea los items en "Experiencia"
for (i = 0; i < experiencia.length; i++) {
  var item = document.createElement("div");
  item.innerHTML = `<div class="d-flex justify-content-between mt-3">
    <span class="card-title h6 exp-title">${experiencia[i].lugar}</span>
    <span class="exp-date">${experiencia[i].periodo}</span>
    </div>
    <p>${experiencia[i].descripción}</p>`;
  document.getElementById("experiencia").appendChild(item);
}

// Itineración que crea los items en "Estudios"
for (i = 0; i < estudios.length; i++) {
  var item = document.createElement("div");
  item.innerHTML = `<div class="d-flex justify-content-between">
    <span class="card-title h6 exp-title">${estudios[i].lugar}</span>
    <span class="exp-date">${estudios[i].periodo}</span>
    </div>
    <p>${estudios[i].descripción}</p>`;
  document.getElementById("estudios").appendChild(item);
}

// Itineración que crea los items en "Lenguajes y programas"
for (i = 0; i < lenguajesActuales.length; i++) {
  var item = document.createElement("div");
  item.innerHTML = `<img class="languages" align="left" alt="JavaScript" width="40" src="${lenguajesActuales[i]}" />`;
  document.getElementById("lenguajes_actuales").appendChild(item);
}

// Itineración que crea los items en "Lenguajes y tecnologias aprendiendo"
for (i = 0; i < lenguajesAprendiendo.length; i++) {
  var item = document.createElement("div");
  item.innerHTML = `<img class="languages" align="left" alt="JavaScript" width="40" src="${lenguajesAprendiendo[i]}" />`;
  document.getElementById("lenguajes_aprendiendo").appendChild(item);
}

function printDiv(printable) {
  var printContents = document.getElementById(printable).innerHTML;
  var originalContents = document.body.innerHTML;

  document.body.innerHTML = printContents;

  window.print();

  document.body.innerHTML = originalContents;
}
