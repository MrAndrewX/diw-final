import cursos from "./data.js";

// Estructura de la tarjeta
/*
<a href="cursos.html">
            <div class="card">
              <img
                src="https://4.bp.blogspot.com/-wPEafonQ2OY/VS4vAbqoZzI/AAAAAAAAJZk/q8H7Hi29Z3Q/s1600/jtr.png"
                alt="Imagen 3"
              />
              <div class="card_content">
                <h2>Título de la imagen 3</h2>
                <p>Descripción de la imagen 3</p>
                <span>Autor de la imagen 3</span>
              </div>
            </div>
          </a>
*/

// generar la estructura de la tarjeta con los datos del json
const generarTarjeta = (curso) => {
  const tarjeta = document.createElement("a");
  tarjeta.href = "cursos.html" + "?id=" + curso.id;
  tarjeta.classList.add("card");

  const imagen = document.createElement("img");
  imagen.src = curso.imagen;
  imagen.alt = curso.nombre;

  const card_content = document.createElement("div");
  card_content.classList.add("card_content");

  const titulo = document.createElement("h2");
  titulo.textContent = curso.nombre;

  const descripcion = document.createElement("p");
  descripcion.textContent = curso.duracion;

  const autor = document.createElement("span");
  autor.textContent = curso.valor;

  card_content.appendChild(titulo);
  card_content.appendChild(descripcion);
  card_content.appendChild(autor);

  tarjeta.appendChild(imagen);
  tarjeta.appendChild(card_content);

  return tarjeta;
};

// generar las tarjetas
const generarTarjetas = (cursos) => {
  const contenedor = document.getElementById("contenedor");
  cursos.forEach((curso) => {
    const tarjeta = generarTarjeta(curso);
    contenedor.appendChild(tarjeta);
  });
};

generarTarjetas(cursos);
