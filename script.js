const inp = document.querySelector ("input")
const btn = document.querySelector(".add")
const todobox = document.querySelector(".todo-list")
const list = document.querySelector("ul")

btn.addEventListener("click",  () => {
    // Create a list to add 

    const li = document.createElement("div")
    li.classList.add ("list-li")

const value = inp.value
if (value.trim() === "")  {
    alert("Enter Something ")
    return;
}
li.innerHTML = inp.value
list.append(li)
inp.value = ""

// Delete button

const delBtn = document.createElement("button")
delBtn.textContent = "delete"
list.append(delBtn)
delBtn.classList.add("Delete-btn")

delBtn.addEventListener("click", () => {

    li.remove()
    delBtn.remove()
    upBtn.remove()



    })

    // Update Button

    const upBtn = document.createElement ("button")
    upBtn.textContent = "Update"
    list.append(upBtn)
    upBtn.classList.add("update-btn")

    upBtn.addEventListener("click" , () => {
        inp.value = li.firstChild.textContent
        upBtn.remove()
        li.remove()
        delBtn.remove()

    })

})
