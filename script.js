// Creating variables
const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

// Creating a function to add tasks to the to do list
function addTask(){
    if(inputBox.value === ''){
        alert("Error");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

// Creating an event listener to when tasks in the to do list are clicked
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        console.log("Item Clicked");
        saveData();
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Creating a function to save data to local storage
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// Creating a function to show tasks when the webpage reloads / opens
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

// Running the show task function so that previous items show when webpage opens
showTask();