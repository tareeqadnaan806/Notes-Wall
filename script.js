document.getElementById("button").addEventListener("click", ()=>{
    const Value = document.getElementById("inputValue").value
    const color = document.getElementById("value").value
    const note = document.createElement("div")
    note.classList.add("noter")
    note.innerHTML = `
        <h3>${Value}<h3/>
    `
    note.style.backgroundColor = color
    document.getElementById("note").append(note)
    Value = "s"
})

