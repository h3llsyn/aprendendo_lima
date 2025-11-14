const bgAudio = document.getElementById('bgAudio');
const awakenButton = document.getElementById('awakenButton');
const druidNameInput = document.getElementById("druidNameInput");
const forestResponse = document.getElementById("forestResponse");

awakenButton.addEventListener("click", () => {
  bgAudio.play().catch(err => {
    console.error('Não foi possível reproduzir o áudio:', err);
  });
  const nome = druidNameInput.value.trim();

  if (nome === "") {
    forestResponse.textContent = "🍃 O vento espera um nome... sussurre-o, jovem druida.";
    forestResponse.classList.remove("awakened");
    return;
  }

  let mensagem;

  if (nome.toLowerCase() === "veridian") {
    mensagem = "🌲 A Árvore-Mãe desperta em alegria! 'Veridian... o Guardião retornou!' 🌿";
  } else {
    mensagem = `✨ A floresta ouviu seu chamado, druida ${nome}! As folhas sussurram em gratidão. 🌳`;
  }

  forestResponse.textContent = mensagem;

  forestResponse.classList.add("awakened");
});
