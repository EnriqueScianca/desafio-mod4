function footerComponent(contenedor) {
  const contenedorEl = document.createElement("div");

  contenedorEl.innerHTML = `
  <footer class="footer">
  <h1 class="footer__titulo">Mis Redes</h1>
  <div class="social">
    
    <div class="social__cadaUno">
      <a href="https://www.instagram.com/enriquescianca/" target="_blank" class="social__link">Instagram</a>
      <img src="images/logotipo-de-instagram.png" alt="" class="social__img">
    </div>

    <div class="social__cadaUno">
      <a href="https://www.linkedin.com/in/enrique-scianca-4b400254/" target="_blank" class="social__link">Linkedin</a>
      <img src="images/linkedin.png" alt="" class="social__img">
    </div>

    <div class="social__cadaUno">
      <a href="https://github.com/EnriqueScianca" target="_blank" class="social__link">Github</a>
      <img src="images/github.png" alt="" class="social__img">
    </div>

  </div>
</footer> 
  `;

  contenedor.appendChild(contenedorEl);
}
