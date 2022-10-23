function servicioUno() {
  return fetch(
    "https://cdn.contentful.com/spaces/xypr5bnerj28/environments/master/entries?access_token=7ItMCimSTK16irUsJsdMo5VvzRbG5UckrK44DK_vQd4&content_type=misServicios"
  )
    .then((res) => res.json())
    .then((data) => misServiciosResp(data));

  function misServiciosResp(data) {
    const templateMisServiciosEl = document.querySelector(
      "#misServicios__template"
    );
    const containerMisServiciosEl = document.querySelector(
      ".misServicios__container"
    );

    const clone = templateMisServiciosEl.content.cloneNode(true);

    clone.querySelector(".misServicios__img").src =
      data.includes.Asset[0].fields.file.url;

    clone.querySelector(".misServicios__container-titulo").textContent =
      data.items[0].fields.serviciosSub;

    clone.querySelector(".misServicios__container-texto").textContent =
      data.items[0].fields.serviciosTexto.content[0].content[0].value;

    containerMisServiciosEl.appendChild(clone);
  }
}

function servicioDos() {
  return fetch(
    "https://cdn.contentful.com/spaces/xypr5bnerj28/environments/master/entries?access_token=7ItMCimSTK16irUsJsdMo5VvzRbG5UckrK44DK_vQd4&content_type=misServicios2"
  )
    .then((res) => res.json())
    .then((data) => misServiciosDosRes(data));

  function misServiciosDosRes(data) {
    const templateMisServiciosEl = document.querySelector(
      "#misServicios__template"
    );
    const containerMisServiciosEl = document.querySelector(
      ".misServicios__container"
    );

    const clone = templateMisServiciosEl.content.cloneNode(true);

    clone.querySelector(".misServicios__img").src =
      data.includes.Asset[0].fields.file.url;

    clone.querySelector(".misServicios__container-titulo").textContent =
      data.items[0].fields.serviciosSub;

    clone.querySelector(".misServicios__container-texto").textContent =
      data.items[0].fields.serviciosTexto.content[0].content[0].value;

    containerMisServiciosEl.appendChild(clone);
  }
}

function servicioTres() {
  return fetch(
    "https://cdn.contentful.com/spaces/xypr5bnerj28/environments/master/entries?access_token=7ItMCimSTK16irUsJsdMo5VvzRbG5UckrK44DK_vQd4&content_type=misServicios3"
  )
    .then((res) => res.json())
    .then((data) => misServiciosTresRes(data));

  function misServiciosTresRes(data) {
    const templateMisServiciosEl = document.querySelector(
      "#misServicios__template"
    );
    const containerMisServiciosEl = document.querySelector(
      ".misServicios__container"
    );

    const clone = templateMisServiciosEl.content.cloneNode(true);

    clone.querySelector(".misServicios__img").src =
      data.includes.Asset[0].fields.file.url;

    clone.querySelector(".misServicios__container-titulo").textContent =
      data.items[0].fields.serviciosSub;

    clone.querySelector(".misServicios__container-texto").textContent =
      data.items[0].fields.serviciosTexto.content[0].content[0].value;

    containerMisServiciosEl.appendChild(clone);
  }
}

function main() {
  headerComponent(document.querySelector(".header-div"));
  serviciosComponent(document.querySelector(".servicios-div"));
  servicioUno();
  servicioDos();
  servicioTres();
  footerComponent(document.querySelector(".footer-div"));
}

main();
