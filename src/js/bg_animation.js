const matrixCharacters = document.querySelectorAll('.matrix-character');

matrixCharacters.forEach(character => {
  // Genera un valor aleatorio entre 0.5 y 2 para la velocidad de la animación
  const speed = Math.random() * 4 + 1;
  character.style.animationDuration = speed + 's';

  // Genera un valor aleatorio entre 10px y 40px para el tamaño del caracter
  const size = Math.floor(Math.random() * 30) + 10;
  character.style.fontSize = size + 'px';

  // Genera un color aleatorio en formato hexadecimal para el caracter
  const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
  character.style.color = color;
});