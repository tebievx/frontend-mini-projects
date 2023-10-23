// Simple modal
const simpleButtonEl = document.querySelector(".btn-simple")
const simpleOverlayEl = document.querySelector(".overlay-simple")
const simpleModalEl = document.querySelector(".overlay-simple .modal")
const simpleCloseButtonEl = document.querySelector(".overlay-simple svg")

simpleButtonEl.addEventListener("click", () => {
  simpleOverlayEl.style.display = "block"
})

simpleCloseButtonEl.addEventListener("click", () => {
  simpleOverlayEl.style.display = "none"
})

simpleOverlayEl.addEventListener("click", () => {
  simpleOverlayEl.style.display = "none"
})

simpleModalEl.addEventListener("click", (e) => {
  e.stopPropagation()
})

// Animated modal
const animatedButtonEl = document.querySelector(".btn-animated")
const animatedOverlayEl = document.querySelector(".overlay-animated")
const animatedModalEl = document.querySelector(".overlay-animated .modal")
const animatedCloseButtonEl = document.querySelector(".overlay-animated svg")

animatedButtonEl.addEventListener("click", () => {
  animatedOverlayEl.classList.remove("animated")
})

animatedCloseButtonEl.addEventListener("click", () => {
  animatedOverlayEl.classList.add("animated")
})

animatedOverlayEl.addEventListener("click", () => {
  animatedOverlayEl.classList.add("animated")
})

animatedModalEl.addEventListener("click", (e) => {
  e.stopPropagation()
})
