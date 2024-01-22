const words = "My name is Lankoji Sai Charan"; // Add more words if needed

const ANIMATION_DURATION = 4000; // Define your animation duration in milliseconds

const letters = words.split("").forEach((char, i) => {
  function createElement(offset) {
    const div = document.createElement("div");
    div.innerText = char;
    div.classList.add("character");
    div.style.animationDelay = `-${i * (ANIMATION_DURATION / 16) - offset}ms`;
    return div;
  }
  document.getElementById("spiral").append(createElement(0));
  document.getElementById("spiral2").append(createElement(-1 * (ANIMATION_DURATION / 2)));
});
