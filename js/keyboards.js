document.addEventListener("DOMContentLoaded", function (event) {
  const keys = document.querySelectorAll(".key");
  keys.forEach((key) => {
    key.addEventListener("click", handleKeyClick);
  });
});

function handleKeyClick(event) {
  const modal = document.getElementById("modal");
  modal.style.display = "block";

  const close = document.getElementById("close");
  close.onclick = () => {
    modal.style.display = "none";
  };

  const submitButton = document.getElementById("submit");
  const keyInput = document.getElementById("keyInput");
  const key = event.target;
  submitButton.onclick = () => {
    const newKey = keyInput.value;
    if (newKey) {
      key.innerHTML = newKey;
      modal.style.display = "none";
    }
  };
}
