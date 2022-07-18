const propiedadesJSON = [
  {
    nombre: "Casa de campo",
    descripcion: "Un lugar ideal para descansar de la ciudad",
    src:
      "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
    cuartos: 2,
    metros: 170
  },
  {
    nombre: "Casa de playa",
    descripcion: "Despierta tus días oyendo el oceano",
    src:
      "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
    cuartos: 2,
    metros: 130
  },
  {
    nombre: "Casa en el centro",
    descripcion: "Ten cerca de ti todo lo que necesitas",
    src:
      "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    cuartos: 1,
    metros: 80
  },
  {
    nombre: "Casa rodante",
    descripcion: "Conviertete en un nómada del mundo sin salir de tu casa",
    src:
      "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    cuartos: 1,
    metros: 6
  },
  {
    nombre: "Departamento",
    descripcion: "Desde las alturas todo se ve mejor",
    src:
      "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    cuartos: 3,
    metros: 200
  },
  {
    nombre: "Mansión",
    descripcion: "Vive una vida lujosa en la mansión de tus sueños ",
    src:
      "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    cuartos: 5,
    metros: 500
  }
];
let propiedades = document.querySelector(".propiedades");
document.querySelector("#buscar").addEventListener("click", fnBuscar);

function template(departamento) {
  return `<div class="propiedad">
    <div class="img"
      style="background-image: url(${departamento.src})">
    </div>
    <section>
      <h5>${departamento.nombre}</h5>
      <div class="d-flex justify-content-between">
        <p>Cuartos: ${departamento.cuartos}</p>
        <p>Metros: ${departamento.metros}</p>
      </div>
      <p class="my-3">${departamento.descripcion}</p>
      <button class="btn btn-info ">Ver más</button>
    </section>
  </div>`;

}
function fnBuscar() {
  let cuartos = document.querySelector("#cuartos").value;
  let minMetros = document.querySelector("#minMetros").value;
  let maxMetros = document.querySelector("#maxMetros").value;
  if (cuartos && minMetros && maxMetros) {
    let filtro = "";
    for (depto of propiedadesJSON) {
      if (depto.cuartos >= cuartos && (depto.metros >= minMetros && depto.metros <= maxMetros)) {
        filtro += template(depto);
      }
      propiedades.innerHTML = filtro;
      document.querySelector("#conteo").innerHTML = propiedades.childElementCount;
    }
  }
  else {
    alert("Debe ingresar los cuartos y el rango de metros");

  }
}
function cargaInicial() {
  let html = "";
  for (departamento of propiedadesJSON)
    html += template(departamento);
  propiedades.innerHTML = html;
}
cargaInicial();