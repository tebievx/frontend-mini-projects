const toggleEl = document.querySelector(".toggle")

const hourEl = document.querySelector(".hour")
const minuteEl = document.querySelector(".minute")
const secondEl = document.querySelector(".second")

const timeEl = document.querySelector(".time")
const dateEl = document.querySelector(".date")

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
]

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
]

toggleEl.addEventListener("click", (e) => {
  const html = document.querySelector("html")
  if (html.classList.contains("dark")) {
    html.classList.remove("dark")
    e.target.innerHTML = "Dark mode"
    secondEl.style.transition = "all 0.5s ease-in"
  } else {
    html.classList.add("dark")
    e.target.innerHTML = "Light mode"
  }
})

function getHoursDeg(hours, minutes, seconds) {
  return hours * 30 + minutes * (1 / 2) + seconds * (1 / 120)
}

function getMinutesDeg(minutes, seconds) {
  return minutes * 6 + seconds * (1 / 10)
}

function getSecondsDeg(seconds) {
  return seconds * 6
}

function addFullRotationsCounter(func) {
  let fullRotationsCounter = 0

  function wrapper(...args) {
    const degrees = func(...args)
    if (degrees === 0) fullRotationsCounter++
    return degrees + fullRotationsCounter * 360
  }

  return wrapper
}

getHoursDeg = addFullRotationsCounter(getHoursDeg)
getMinutesDeg = addFullRotationsCounter(getMinutesDeg)
getSecondsDeg = addFullRotationsCounter(getSecondsDeg)

function setTime() {
  const time = new Date()

  const hours = time.getHours()
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()

  const month = time.getMonth()
  const day = time.getDay()
  const date = time.getDate()

  const hoursDeg = getHoursDeg(hours, minutes, seconds)
  const minutesDeg = getMinutesDeg(minutes, seconds)
  const secondsDeg = getSecondsDeg(seconds)

  hourEl.style.transform = `translateX(-50%) rotate(${hoursDeg}deg)`
  minuteEl.style.transform = `translateX(-50%) rotate(${minutesDeg}deg)`
  secondEl.style.transform = `translateX(-50%) rotate(${secondsDeg}deg)`

  timeEl.innerHTML = `${hours}:${String(minutes).padStart(2, "0")}`
  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

setTime()
setInterval(setTime, 1000)
