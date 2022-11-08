//Mostrar imagenes
const button1 = document.getElementById("show-button1");
button1.addEventListener("click", () => {
  const show_images = document.getElementById("show-images");
  let clase = show_images.classList;
  clase.contains("active") ? clase.remove("active") : clase.add("active");
});

//Mostrar información
const button2 = document.getElementById("show-button2");
button2.addEventListener("click", () => {
  const show_descriptions = document.getElementById("show-descriptions");
  let clase = show_descriptions.classList;
  clase.contains("active") ? clase.remove("active") : clase.add("active");
});

//Capturar información
const valores = window.location.search;
if (valores !== "") {
  const comentario = document.getElementById("comentario");
  let clase = comentario.classList;
  clase.contains("active") ? clase.remove("active") : clase.add("active");

  const urlParams = new URLSearchParams(valores);

  let nombres = urlParams.get("nombres");
  let apellidos = urlParams.get("apellidos");
  let correo = urlParams.get("correo");
  let celular = urlParams.get("celular");
  let experiencia = urlParams.get("experiencia");

  comentario.innerHTML = `
  <div>
    <h3 style="font-weight: 600">${nombres} ${apellidos} (${celular})</h3>
    <small>${correo}</small>
  </div>
  <p style="margin-top: 0.5rem">${experiencia}</p>
  `;
}
