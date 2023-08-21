

const input = document.getElementById("input");
const list = document.getElementById("list");
const addButton = document.getElementById("addButton");
const errorDiv=document.getElementById("error")

addButton.addEventListener("click", addtask);

function addtask(event) {
    event.preventDefault();
    if (input.value === '') {
        alert("input cannot be empty");
        
    } else{
        
        let li = document.createElement("li");
        li.innerHTML = input.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = '';
    savedata();
}

list.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        if (!e.target.classList.contains("checked")) {
            e.target.classList.add("checked");
            savedata();
        } else {
            e.target.classList.remove("checked");
        }
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata();
    }
    e.stopPropagation();
}, false);

function savedata(){
    localStorage.setItem("data",list.innerHTML);
}
function showtask(){
    list.innerHTML = localStorage.getItem("data");
}
showtask();