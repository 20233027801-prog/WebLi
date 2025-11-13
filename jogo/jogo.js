document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  const scoreEl = document.getElementById("score");
  let score = 0;

  cards.forEach(card => {
    const correctAnswer = card.dataset.answer;
    const btnTrue = card.querySelector(".btn-true");
    const btnFalse = card.querySelector(".btn-false");

    function check(answer) {
      if (card.classList.contains("answered")) return;
      card.classList.add("answered");

      if (answer === correctAnswer) {
        card.classList.add("correct");
        score++;
      } else {
        card.classList.add("wrong");
      }
      btnTrue.disabled = true;
      btnFalse.disabled = true;
      scoreEl.textContent = `${score}/8`;
    }

    btnTrue.addEventListener("click", () => check("verdadeiro"));
    btnFalse.addEventListener("click", () => check("falso"));
  });
});
