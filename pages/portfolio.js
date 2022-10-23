function addWorkCard(params = {}) {
  const template = document.querySelector("#portfolio-card-template");
  const container = document.querySelector(".portfolio-content");

  template.content.querySelector(".portfolio-card-title").textContent =
    params.titulo;

  template.content.querySelector(".portfolio-card-text").textContent =
    params.descripcion;

  template.content.querySelector(".portfolio-card-link").href = params.url;

  const clone = document.importNode(template.content, true);
  container.appendChild(clone);
}

function getWorks() {
  return fetch(
    "https://cdn.contentful.com/spaces/xypr5bnerj28/environments/master/entries?access_token=7ItMCimSTK16irUsJsdMo5VvzRbG5UckrK44DK_vQd4&content_type=work"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const fieldsCollection = data.items.map((item) => {
        return {
          titulo: item.fields.titulo,
          descripcion: item.fields.descripcion,
          url: item.fields.url,
        };
      });
      return fieldsCollection;
    });
}

function main() {
  headerComponent(document.querySelector(".header-div"));
  getWorks().then((works) => {
    for (const w of works) {
      addWorkCard(w);
      // console.log(w);
    }
  });
  footerComponent(document.querySelector(".footer-div"));
}

main();
