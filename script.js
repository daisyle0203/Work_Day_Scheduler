let currentDay = document.querySelector("#currentDay")
currentDay.innerText = moment().format("dddd, MMM Do")
let container = document.querySelector(".container")

let workDaySchedule = {}
if (localStorage.getItem("schedule")) {
  workDaySchedule = JSON.parse(localStorage.getItem("schedule"))
}

const hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]
hours.forEach((hour, index) => {
  let rowDiv = document.createElement("div")
  rowDiv.classList.add("row")

  let hourDiv = document.createElement("div")
  hourDiv.classList.add("col-1", "hour")
  hourDiv.innerText = hour

  let textArea = document.createElement("textarea")
  textArea.classList.add("col-10")
  if (workDaySchedule[hour]) {
    textArea.value = workDaySchedule[hour]
  } else {
    textArea.value = ""
  }

  let currentHour = moment().hours()
  let chosenHour = index + 9
  if (chosenHour < currentHour) {
    textArea.classList.add("past")
    textArea.disabled = true
  } else if (chosenHour === currentHour) {
    textArea.classList.add("present")
  } else {
    textArea.classList.add("future")
  }

  let saveBtn = document.createElement("button")
  saveBtn.classList.add("col-1", "saveBtn")
  let saveIcon = document.createElement("i")
  saveIcon.classList.add("fas", "fa-save")

  saveBtn.appendChild(saveIcon)
  rowDiv.appendChild(hourDiv)
  rowDiv.appendChild(textArea)
  rowDiv.appendChild(saveBtn)
  container.appendChild(rowDiv)
})

container.addEventListener("click", (e) => {
  let element = e.target
  if (element.matches(".saveBtn") || element.matches(".fa-save")) {
    let rowDivEl
    if (element.matches(".saveBtn")) {
      rowDivEl = element.parentNode
    }
    if (element.matches(".fa-save")) {
      rowDivEl = element.parentNode.parentNode
    }

    let textAreaEl = rowDivEl.querySelector("textarea")
    let hourEl = rowDivEl.querySelector(".hour")
    let clickedHour = hourEl.innerText
    let clickedTextArea = textAreaEl.value
    workDaySchedule[clickedHour] = clickedTextArea
    localStorage.setItem("schedule", JSON.stringify(workDaySchedule))
  }
})
