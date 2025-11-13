// ======== CONEXÃO COM OS ELEMENTOS HTML ========
// Pega os elementos do HTML pelo ID
const awakenButton = document.getElementById("awakenButton");
const druidNameInput = document.getElementById("druidNameInput");
const forestResponse = document.getElementById("forestResponse");

// ======== FEITIÇO DE ESCUTA (Evento de clique) ========
awakenButton.addEventListener("click", () => {
  const nome = druidNameInput.value.trim(); // Pega o nome digitado e remove espaços extras

  // Se o campo estiver vazio
  if (nome === "") {
    forestResponse.textContent = "🍃 O vento espera um nome... sussurre-o, jovem druida.";
    forestResponse.classList.remove("awakened");
    return;
  }

  // ======== RESPOSTA PERSONALIZADA ========
  let mensagem;

  // Desafio de Bronze 🥉 — nome especial “Veridian”
  if (nome.toLowerCase() === "veridian") {
    mensagem = "🌲 A Árvore-Mãe desperta em alegria! 'Veridian... o Guardião retornou!' 🌿";
  } else {
    mensagem = `✨ A floresta ouviu seu chamado, druida ${nome}! As folhas sussurram em gratidão. 🌳`;
  }

  // Exibe a mensagem na div
  forestResponse.textContent = mensagem;

  // Ativa a animação mágica
  forestResponse.classList.add("awakened");
});
