const noBtn = document.getElementById("noBtn");
const siBtn = document.getElementById("siBtn");
const container = document.querySelector(".container");
const success = document.getElementById("success");

noBtn.addEventListener("mouseover", () => {

    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

siBtn.addEventListener("click", () => {

    container.style.display = "none";
    success.style.display = "block";

});
