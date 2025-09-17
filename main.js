const nombre = "M. Delfina";

const experience = [
  {
    position: "Frontend developer",
    place: "codeCave",
    time: "Jun 2022 - Now",
    description:
      "I have worked developing software for various clients and across different industries. I have utilized several programming languages and have worked on projects involving design, implementation, and programming. I have developed skills to manage projects autonomously, as well as to solve problems and make decisions quickly.",
  },
  {
    place: "AguaZarca Inmobiliaria",
    position: "Secretary & Social Media Manager",
    time: "May 2019 - Jun 2022",
    description:
      "In my role as a secretary and social media manager, I carried out tasks such as social media administration, posting properties on digital platforms, document filing, payment verification and debt reconciliation, and customer service.",
  },
  {
    position: "Saleswoman",
    place: "Alto Brillo",
    time: "Mar 2016 -  Mar 2017",
    description:
      "In my role as a salesperson, I provided customer service, managed stock inventory, maintained records of products and sales, and subsequently inputted them into the system.",
  },
];

const estudios = [
  {
    lugar: "Univesidad Siglo XXI",
    periodo: "2025-now",
    descripción: "Bachelor's degree in artificial intelligence and robotics",
  },
  {
    lugar: "Nueva Escuela Juan Mantovani",
    periodo: "2011-2018",
    descripción: "Bachelor in natural sciences",
  },
];

const skills = [{
  group: 'Frontend',
  skills: 'HTML, CSS, JavaScript, TypeScript, React, Next.js, Material UI, Vue, Nuxt, Nuxt UI'
},
{
  group: 'Tools and others',
  skills: 'Git/GitHub, Strapi, SEO, Responsive Web Designs'
}]

// Change the name of the H1 that has the user's name
let nombreDOM = document.getElementById("name");
nombreDOM.innerText = nombre;

// Itineration that creates the items in "EXPERIENCE"
for (i = 0; i < experience.length; i++) {
  let item = document.createElement("div");
  item.innerHTML = `<span class="exp-position">${experience[i].position}</span>
  <div class="d-flex align-items-center">
    <span class="exp-title mr-2">${experience[i].place} </span> 
    <p></p>
    <span class="exp-date">${"| "} ${experience[i].time}</span>
    </div>
    <p>${experience[i].description}</p>`;
    
  document.getElementById("experiencia").appendChild(item);
}

// Itineration that creates the items in "EDUCATION & CERTIFICATIONS"
for (i = 0; i < estudios.length; i++) {
  let item = document.createElement("div");
  item.innerHTML = `<div class="d-flex justify-content-between">
    <span class="card-title h6 exp-title">${estudios[i].lugar}</span>
    <span class="exp-date">${estudios[i].periodo}</span>
    </div>
    <p>${estudios[i].descripción}</p>`;
  document.getElementById("estudios").appendChild(item);
}

// Itineration that creates the items in "technical skills TECHNICAL SKILLS"
for(i= 0; i < skills.length; i++) {
  let item = document.createElement("div");
  item.innerHTML = `<div>
  <p><b class="text-uppercase">${skills[i].group}</b>: ${skills[i].skills}</p>
  </div>`;
  document.getElementById("skills").appendChild(item)
}

function printDiv(printable) {
  let printContents = document.getElementById(printable).innerHTML;
  let originalContents = document.body.innerHTML;

  document.body.innerHTML = printContents;

  window.print();

  document.body.innerHTML = originalContents;
}
