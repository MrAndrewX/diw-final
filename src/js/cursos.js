import cursos from "./data.js";

function vistaCurso(curso) {
  const contenedor = document.getElementById("contenedor");

  // Título del curso
  const titulo = document.createElement("h1");
  titulo.textContent = curso.nombre;
  contenedor.appendChild(titulo);

  // Imagen del curso
  const imagen = document.createElement("img");
  imagen.src = curso.imagen;
  imagen.alt = curso.nombre;
  imagen.id = "imagen-curso";
  contenedor.appendChild(imagen);

  // Introducción del curso
  const introTitulo = document.createElement("h2");
  introTitulo.textContent = "Introducción";
  contenedor.appendChild(introTitulo);

  const introduccion = document.createElement("p");
  introduccion.textContent = curso.introduccion;
  contenedor.appendChild(introduccion);

  // Temario del curso
  const temaTitulo = document.createElement("h2");
  introTitulo.textContent = "Temario";
  contenedor.appendChild(introTitulo);

  const temarioLista = document.createElement("ul");
  curso.temario.forEach((tema) => {
    const temaItem = document.createElement("li");
    temaItem.textContent = tema;
    temarioLista.appendChild(temaItem);
  });

  contenedor.appendChild(temarioLista);

  // Requisitos del curso
  const requisitosTitulo = document.createElement("h2");
  requisitosTitulo.textContent = "Requisitos";
  contenedor.appendChild(requisitosTitulo);

  const requisitos = document.createElement("p");
  requisitos.textContent = curso.requisitos;
  contenedor.appendChild(requisitos);

  // Profesor del curso
  const profesorTitulo = document.createElement("h2");
  profesorTitulo.textContent = "Profesor";
  contenedor.appendChild(profesorTitulo);

  const profesor = document.createElement("p");
  profesor.textContent = curso.profesor;
  contenedor.appendChild(profesor);

  // Video del curso

  /*
    <div id="video-container">
          <video autoplay loop muted>
            <source id="video" />
          </video>
          <div class="overlay">
            <p>Inscríbete para ver el curso completo!</p>
          </div>
        </div>
    */

  const videoTitulo = document.createElement("h2");
  videoTitulo.textContent = "Vídeo";
  contenedor.appendChild(videoTitulo);

  const videoContainer = document.createElement("div");
  videoContainer.id = "video-container";
  contenedor.appendChild(videoContainer);

  const video = document.createElement("video");
  video.autoplay = true;
  video.loop = true;
  video.muted = true;
  videoContainer.appendChild(video);

  const videoSource = document.createElement("source");
  videoSource.src = curso.video.src;
  videoSource.type = curso.video.type;
  video.appendChild(videoSource);

  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  videoContainer.appendChild(overlay);

  const overlayText = document.createElement("p");
  overlayText.textContent = "Inscríbete para ver el curso completo!";
  overlay.appendChild(overlayText);
}

// Obtener el id del curso del atributo id en la url
const url = new URLSearchParams(window.location.search);

const id = url.get("id");

const curso = cursos.find((curso) => curso.id == id);

vistaCurso(curso);
