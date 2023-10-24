const cardEl = document.querySelector(".card")
const skeletonEl = document.querySelector(".skeleton")

function showCard() {
  skeletonEl.style.display = "none"
  cardEl.style.display = "block"
}

setTimeout(showCard, 3000)
