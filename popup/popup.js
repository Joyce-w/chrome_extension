console.log("popup.js");

document.getElementById("addTaskBtn").addEventListener("click", myFunction);
let input = document.getElementById("newTaskInput")
function myFunction() {
    //get value
    console.log(input.value);
    //add value
    localStorage.setItem('task1', input.value);
}

localStorage.setItem('taskStorage'); 