onload = () => {
  document.body.classList.remove("container");
};

function aparecerDesaparecer() {
  var titulo = document.getElementsByClassName("titulo")[0];

  if (titulo.classList.contains("mostrar")) {
    titulo.classList.remove("mostrar");
  } else {
    titulo.classList.add("mostrar");
  }
}

setInterval(aparecerDesaparecer, 2000); // Cambia el número de milisegundos según la frecuencia deseada