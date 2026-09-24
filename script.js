document.addEventListener("DOMContentLoaded", () => {
  const chestButton = document.querySelector("#chest-button");
  const chestClosed = document.querySelector("#chest-closed");
  const chestOpened = document.querySelector("#chest-opened");
  const forest = document.querySelector("#forest-bg");
  const instruction = document.querySelector("#chest-instruction");

  chestButton?.addEventListener("click", () => {
    chestButton.disabled = true;

    chestClosed.hidden = true;
    chestOpened.hidden = false;

    forest?.classList.add("forest-fade");
    chestOpened.classList.add("mist-active");

    if (instruction) {
      instruction.textContent = "The chest is open...";
    }

    window.setTimeout(() => {
      window.location.assign("code.html");
    }, 1500);
  });

  const codeForm = document.querySelector("#code-form");
  const codeInput = document.querySelector("#code-input");
  const message = document.querySelector("#code-message");
  const resetButton = document.querySelector("#reset-btn");

  codeForm?.addEventListener("submit", (event) => {
    event.preventDefault();

    const code = codeInput.value.trim();
    const isCorrect = code === "103126";

    message.classList.toggle("eerie-glow", isCorrect);
    message.classList.toggle("error", !isCorrect);

    if (isCorrect) {
      message.textContent =
        "Congratulations! You solved the riddle. Please contact Ashley with this phrase to claim your prize: Phantom Plates of the Hollow Highway";

      codeInput.disabled = true;
    } else {
      message.textContent =
        "Incorrect code. Check the clues in the newsletter and try again.";
    }
  });

  resetButton?.addEventListener("click", () => {
    window.location.assign("index.html");
  });
});
