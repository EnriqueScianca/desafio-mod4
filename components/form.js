function contactoComponent(contenedor) {
  const contactoEl = document.createElement("div");

  contactoEl.innerHTML = `
    <section class="form">
    <div class="form__container">
      <h2 class="form__container-title">Escribime</h2>
      <form class="form__container-form">
          <label>
            <h3 class="form__container-form-name">NOMBRE</h3>
            <input type="text" name="user" placeholder="Enrique" class="form__container-form-input nombre">
          </label>
          <label>
            <h3 class="form__container-form-name">EMAIL</h3>
            <input type="email" name="email" placeholder="ej: example@example.com" class="form__container-form-input email" >
          </label>
          <label>
            <h3 class="form__container-form-name">MENSAJE</h3>
            <textarea cols="50" rows="10" name="message" placeholder="Dejanos tu mensaje" class="form__container-form-textarea mensaje"></textarea>
          </label>
          <div class="button">
            <button class="button_send"><b>Enviar</b></button>
          </div>
      </form>
    </div>
  </section>
  `;

  contenedor.appendChild(contactoEl);
  var form = document.querySelector(".form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.querySelector(".nombre").value;
    const email = document.querySelector(".email").value;
    const mensaje = document.querySelector(".mensaje").value;

    envioForm(email, mensaje);
  });

  function envioForm(email, mensaje) {
    const url = "https://apx-api.vercel.app/api/utils/dwf";
    const params = {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        to: email,
        mensaje: mensaje,
      }),
    };

    fetch(url, params)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
}

// * * https://www.materialpalette.com/indigo/teal
