const $ = (selector) => document.querySelector(selector);

$("#breakStick")?.addEventListener("click", () => {
  const scene = $("#stickScene");
  scene.classList.add("snapping");
  setTimeout(() => { scene.classList.add("revealed"); $("#birthdayReveal").setAttribute("aria-hidden", "false"); }, 680);
});

$("#openLetter")?.addEventListener("click", () => {
  const letter = $("#birthdayLetter");
  letter.classList.add("open");
  letter.setAttribute("aria-hidden", "false");
  $("#openLetter").textContent = "Letter opened ✦";
  $("#openLetter").disabled = true;
});

const note = $("#photoNote");
document.querySelectorAll(".memory-card").forEach((card) => card.addEventListener("click", () => {
  note.querySelector("p").textContent = card.querySelector("figcaption span").textContent;
  note.classList.add("show");
}));
note?.querySelector("button")?.addEventListener("click", () => note.classList.remove("show"));

function confetti() {
  const holder = $("#confetti"); if (!holder) return;
  holder.innerHTML = ""; const colors = ["#ff82b1", "#ffcf58", "#88d9db", "#fff8ef", "#a77ad4"];
  for (let i = 0; i < 105; i += 1) { const piece = document.createElement("i"); piece.className = "confetti"; piece.style.left = `${Math.random() * 100}vw`; piece.style.background = colors[i % colors.length]; piece.style.setProperty("--drift", `${(Math.random() - .5) * 260}px`); piece.style.animationDuration = `${2.7 + Math.random() * 2}s`; piece.style.animationDelay = `${Math.random() * .45}s`; holder.append(piece); }
  setTimeout(() => { holder.innerHTML = ""; }, 5600);
}
$("#celebrate")?.addEventListener("click", confetti);
if ($(".finale-page")) setTimeout(confetti, 250);
