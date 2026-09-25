document.addEventListener("DOMContentLoaded", () => {
  const chestButton = document.querySelector("#chest-button");
  const chestClosed = document.querySelector("#chest-closed");
  const chestOpened = document.querySelector("#chest-opened");
  const instruction = document.querySelector("#chest-instruction");
  const mist = document.querySelectorAll(".mist");
  const sparkles = document.querySelector(".sparkles");

  chestButton?.addEventListener("click", () => {
    chestButton.disabled = true;
    chestClosed.hidden = true;
    chestOpened.hidden = false;

    mist.forEach((item) => item.classList.add("mist-active"));
    sparkles?.classList.add("sparkles-active");

    if (instruction) instruction.textContent = "THE CHEST IS OPENING...";

    window.setTimeout(() => {
      window.location.assign("code.html");
    }, 2200);
  });

  const codeForm = document.querySelector("#code-form");
  const codeInput = document.querySelector("#code-input");
  const message = document.querySelector("#code-message");
  const resetButton = document.querySelector("#reset-btn");

  codeForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const isCorrect = codeInput.value.trim() === "103126";

    message.classList.toggle("eerie-glow", isCorrect);
    message.classList.toggle("error", !isCorrect);

    if (isCorrect) {
      message.textContent = "CONGRATULATIONS! You solved the riddle. Contact Ashley with this phrase to claim your prize: Phantom Plates of the Hollow Highway";
      codeInput.disabled = true;
    } else {
      message.textContent = "THE CHEST REMAINS LOCKED. CHECK THE NEWSLETTER CLUES AND TRY AGAIN.";
    }
  });

  resetButton?.addEventListener("click", () => {
    window.location.assign("index.html");
  });
});
