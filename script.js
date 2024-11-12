const centralText = document.getElementById("js-text");
const circles = document.querySelectorAll(".single-date, .single-date-2");
circles.forEach((circle) => {
  circle.addEventListener("mouseenter", () => {
    centralText.textContent = circle.getAttribute("data-text");
    centralText.style.opacity = "1";
  });
  circle.addEventListener("mouseleave", () => {
    centralText.style.opacity = "0";
  });
});
const citas = [
  "Bar",
  "Café",
  "Parque de la Consta",
  "Cine",
  "Minigolf",
  "Escape Room",
];
const button = document.getElementById("rb");
button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * citas.length);
  const randomCita = citas[randomIndex];
  alert(`Tengamos una cita en el ${randomCita}`);
});
