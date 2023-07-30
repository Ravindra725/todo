const popupBox = document.getElementById("popupbox")
const blurBox = document.getElementById("blur")
const cardContainer = document.getElementById("cardcontainer")
const inputItem = document.getElementsByClassName("one1")
let taskPupupVisible = false

function addItem(){
    if(taskPupupVisible){
        popupBox.classList.add("hide")
        blurBox.classList.remove("blur")
        taskPupupVisible = false
    }
    else{
        popupBox.classList.remove("hide")
        taskPupupVisible = true
        blurBox.classList.add("blur")
    }
}


function closeTask(){
    if(taskPupupVisible){
        popupBox.classList.add("hide")
        taskPupupVisible = false
        blurBox.classList.remove("blur")
        document.querySelector(".one1").value = ""
    } 
}

function addTask() {
   var cardContainerItem = document.createElement("div")
   var cardText = document.createElement("h2")
   var hrTag = document.createElement("hr")
   var itemText = document.createElement("div")
   var addTaskItem = document.createElement("button")
   var deletedButton = document.createElement("button")
   
   
   cardContainerItem.appendChild(cardText)
   cardContainerItem.appendChild(itemText)
   cardContainerItem.appendChild(addTaskItem)
   cardContainerItem.appendChild(deletedButton)
   

   cardContainer.appendChild(cardContainerItem)

   cardContainer.classList.add("cardcontainer")
   cardContainerItem.classList.add("carditem")
   cardText.classList.add("heading")
   itemText.classList.add("textbox")
   addTaskItem.classList.add("btna")
   deletedButton.classList.add("btnb")
   
   
   cardText.innerText = inputItem[0].value
   addTaskItem.innerText = "add"
   deletedButton.innerText = "delete"
   

   deletedButton.addEventListener('click', function () {
           cardContainerItem.remove()
   })


//    addTaskItem.addEventListener('click', function() {
//           itemText
//    })


   closeTask()
}
