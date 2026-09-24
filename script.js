const forest = document.getElementById("forest-bg");
const chestClosed = document.getElementById("chest-closed");
const chestOpened = document.getElementById("chest-opened");

if (chestClosed) {
    chestClosed.addEventListener("click", function() {
        forest.classList.add("forest-fade");
        chestClosed.style.display = "none";
        chestOpened.style.display = "block";
        chestOpened.classList.add("mist-active");

        setTimeout(function() {
            window.location.href = "code.html";
        }, 3000);
    });
}

const submitBtn = document.getElementById("submit-code");
const resetBtn = document.getElementById("reset-btn");

if (submitBtn) {
    submitBtn.addEventListener("click", function() {
        const code = document.getElementById("code-input").value;
        const message = document.getElementById("code-message");

        if (code === "103126") {
            message.textContent = "Congratulations! You solved the riddle. Tell Ashley the phrase: 'Phantom Plates of the Hollow Highway'";
            message.classList.add("eerie-glow");
        } else {
            message.textContent = "Incorrect code. Try again.";
            message.classList.remove("eerie-glow");
        }
    });
}

if (resetBtn) {
    resetBtn.addEventListener("click", function() {
        window.location.href = "index.html";
    });
}

});
