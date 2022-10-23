// *TODO: DESCARGAR LOGO DEL DESAFIO DE HTML Y CSS PARA COLOCAR EN EL HEADER

function headerComponent(container) {
  const headerEl = document.createElement("div");

  headerEl.innerHTML = `
  
  <header class="header">
<div class="header-container">
  <div class="logo">
    <a href="./index.html"><img src="./images/logo.png" alt="" class="logoNav"></a>
  </div>
  <div class="navbar-container">
    <div class="header__nav">
      <a href="./portfolio.html" class="headerLink">Portfolio</a>
      <a href="./servicios.html" class="headerLink">Servicios</a>
      <a href="./contacto.html" class="headerLink">Contacto</a>
    </div>
  </div>

  <img src="./images/menu.png" class="menu-mobile" alt="">

  <div class="menu-mobile__container">
    <h1 class="menu-moblile__close">X</h1>

    <div class="menu-mobile__nav">
      <a class="headerLink" href="./portfolio.html">Portfolio</a>
      <a class="headerLink" href="./servicios.html">Servicios</a>
      <a class="headerLink" href="./contacto.html">Contacto</a>
    </div>
  </div>
</div>

</header>
  
  `;

  const botonMenu = headerEl.querySelector(".menu-mobile");
  const botonCerrarMenu = headerEl.querySelector(".menu-moblile__close");
  const menuEl = headerEl.querySelector(".menu-mobile__container");

  botonMenu.addEventListener("click", () => {
    menuEl.style.display = "grid";
  });

  botonCerrarMenu.addEventListener("click", () => {
    menuEl.style.display = "";
  });

  container.appendChild(headerEl);
}
