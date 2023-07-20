const popupBox = document.getElementById("popupbox")
let taskPupupVisible = false

function addItem(){
    if(taskPupupVisible){
        popupBox.classList.add("hide")
        taskPupupVisible = false
    }
    else{
        popupBox.classList.remove("hide")
        taskPupupVisible = true
    }
}