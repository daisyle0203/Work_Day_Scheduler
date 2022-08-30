const hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]

let container = document.querySelector(".container")

hours.forEach((hour) => {
  let rowDiv = document.createElement("div")
  rowDiv.classList.add("row")

  let hourDiv = document.createElement("div")
  hourDiv.classList.add("col-1", "hour")
  hourDiv.textContent = hour

  let textArea = document.createElement("textarea")
  textArea.classList.add("col-10")
  // if past:
  //    textArea.classList.add("past")
  // else if present:
  //    textArea.classList.add("present")
  // else:
  //    textArea.classList.add("future")

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
