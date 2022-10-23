// https://cdn.contentful.com/spaces/xypr5bnerj28/environments/desafioMod4/entries?access_token=7ItMCimSTK16irUsJsdMo5VvzRbG5UckrK44DK_vQd4&content_type=desafioMod4

function welcome() {
  return fetch(
    "https://cdn.contentful.com/spaces/xypr5bnerj28/environments/master/entries?access_token=7ItMCimSTK16irUsJsdMo5VvzRbG5UckrK44DK_vQd4&content_type=bienvenida"
  )
    .then((res) => res.json())
    .then((data) => welcomeResp(data));

  function welcomeResp(data) {
    const templateEl = document.querySelector("#welcome-template");
    const containerEl = document.querySelector(".welcome");
    const clone = templateEl.content.cloneNode(true);

    clone.querySelector(".welcome__titulo").textContent =
      data.items[0].fields.tituloBienvenida;
    containerEl.appendChild(clone);

    // console.log(titleEl);
  }
}

function sobreMi() {
  return fetch(
    "https://cdn.contentful.com/spaces/xypr5bnerj28/environments/master/entries?access_token=7ItMCimSTK16irUsJsdMo5VvzRbG5UckrK44DK_vQd4&content_type=quienSoy"
  )
    .then((res) => res.json())
    .then((data) => sobreMiResp(data));
  // .then((data) => console.log(data))

  function sobreMiResp(data) {
    const templateSobreMiEl = document.querySelector("#sobreMi-template");
    const containerSobreMiEl = document.querySelector(".sobreMi");
    const clone = templateSobreMiEl.content.cloneNode(true);

    clone.querySelector(".sobreMi__titulo").textContent =
      data.items[0].fields.quienSoyTitulo;

    clone.querySelector(".sobreMi__texto").textContent =
      data.items[0].fields.quienSoyTexto.content[0].content[0].value;

    clone.querySelector(".sobreMi__image").src =
      data.includes.Asset[0].fields.file.url;

    containerSobreMiEl.appendChild(clone);
  }
}

// function misServiciosUno() {
//   return fetch(
//     "https://cdn.contentful.com/spaces/xypr5bnerj28/environments/master/entries?access_token=7ItMCimSTK16irUsJsdMo5VvzRbG5UckrK44DK_vQd4&content_type=misServicios"
//   )
//     .then((res) => res.json())
//     .then((data) => misServiciosResp(data));

//   async function misServiciosResp(data) {
//     const templateMisServiciosEl = document.querySelector(
//       "#misServicios__template"
//     );
//     const containerMisServiciosEl = document.querySelector(
//       ".misServicios__container"
//     );

//     const clone = templateMisServiciosEl.content.cloneNode(true);

//     clone.querySelector(".misServicios__img").src =
//       data.includes.Asset[0].fields.file.url;

//     clone.querySelector(".misServicios__container-titulo").textContent =
//       data.items[0].fields.serviciosSub;

//     clone.querySelector(".misServicios__container-texto").textContent =
//       data.items[0].fields.serviciosTexto.content[0].content[0].value;

//     containerMisServiciosEl.appendChild(clone);
//   }
// }

// function misServiciosDos() {
//   return fetch(
//     "https://cdn.contentful.com/spaces/xypr5bnerj28/environments/master/entries?access_token=7ItMCimSTK16irUsJsdMo5VvzRbG5UckrK44DK_vQd4&content_type=misServicios2"
//   )
//     .then((res) => res.json())
//     .then((data) => misServiciosDosRes(data));

//   function misServiciosDosRes(data) {
//     const templateMisServiciosEl = document.querySelector(
//       "#misServicios__template"
//     );
//     const containerMisServiciosEl = document.querySelector(
//       ".misServicios__container"
//     );

//     const clone = templateMisServiciosEl.content.cloneNode(true);

//     clone.querySelector(".misServicios__img").src =
//       data.includes.Asset[0].fields.file.url;

//     clone.querySelector(".misServicios__container-titulo").textContent =
//       data.items[0].fields.serviciosSub;

//     clone.querySelector(".misServicios__container-texto").textContent =
//       data.items[0].fields.serviciosTexto.content[0].content[0].value;

//     containerMisServiciosEl.appendChild(clone);
//   }
// }

// function misServiciosTres() {
//   return fetch(
//     "https://cdn.contentful.com/spaces/xypr5bnerj28/environments/master/entries?access_token=7ItMCimSTK16irUsJsdMo5VvzRbG5UckrK44DK_vQd4&content_type=misServicios3"
//   )
//     .then((res) => res.json())
//     .then((data) => misServiciosTresRes(data));

//   function misServiciosTresRes(data) {
//     const templateMisServiciosEl = document.querySelector(
//       "#misServicios__template"
//     );
//     const containerMisServiciosEl = document.querySelector(
//       ".misServicios__container"
//     );

//     const clone = templateMisServiciosEl.content.cloneNode(true);

//     clone.querySelector(".misServicios__img").src =
//       data.includes.Asset[0].fields.file.url;

//     clone.querySelector(".misServicios__container-titulo").textContent =
//       data.items[0].fields.serviciosSub;

//     clone.querySelector(".misServicios__container-texto").textContent =
//       data.items[0].fields.serviciosTexto.content[0].content[0].value;

//     containerMisServiciosEl.appendChild(clone);
//   }
// }

function main() {
  // headerComponent(document.querySelector(".header-div"));
  welcome();
  sobreMi();
  serviciosComponent(document.querySelector(".servicios-div"));
  servicioUno();
  servicioDos();
  servicioTres();
  contactoComponent(document.querySelector(".form-div"));
  footerComponent(document.querySelector(".footer-div"));
}

main();
