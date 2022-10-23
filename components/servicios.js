function serviciosComponent(container) {
  const serviciosEl = document.createElement("div");

  serviciosEl.innerHTML = `
  <section class="misServicios">
  <div class="misServicios__container">
    <h1 class="misServicios__titulo">Mis Servicios</h1>
  </div>

  <div class="misServicios__container-general">
    <template id="misServicios__template">
      <div class="misServicios__container">
        <img class="misServicios__img" src="" alt="" >
        <h2 class="misServicios__container-titulo">Hago Cosas</h2>
        <p class="misServicios__container-texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eius ipsa harum? Quos molestias temporibus exercitationem. Voluptates hic dolorum iure, atque molestiae voluptas nam, vel exercitationem numquam, rem facilis laudantium.</p>
      </div>
    </template>
  </div>

  <template id="misServicios__template">
    <div class="misServicios__container">
      <img class="misServicios__img" src="" alt="" >
      <h2 class="misServicios__container-titulo">Hago Cosas</h2>
      <p class="misServicios__container-texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eius ipsa harum? Quos molestias temporibus exercitationem. Voluptates hic dolorum iure, atque molestiae voluptas nam, vel exercitationem numquam, rem facilis laudantium.</p>
    </div>
  </template>
  </div>

  <template id="misServicios__template">
  <div class="misServicios__container">
    <img class="misServicios__img" src="" alt="" >
    <h2 class="misServicios__container-titulo">Hago Cosas</h2>
    <p class="misServicios__container-texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eius ipsa harum? Quos molestias temporibus exercitationem. Voluptates hic dolorum iure, atque molestiae voluptas nam, vel exercitationem numquam, rem facilis laudantium.</p>
  </div>
  </template>
  </div>

  </section>
  
  `;

  container.appendChild(serviciosEl);
}
