
function submitNewTask() {
let newTask = document.getElementById("input_field").value; 
let paragraph = document.getElementById("addtoparagraph");
paragraph.innerHTML += newTask + "   " + "<button onclick='removeTask()' type='submit' form='task1' value='Submit'>Done</button>" + "<br/>";
}

function removeTask () {
	let paragraph = document.getElementById("addtoparagraph");
	paragraph.remove();
}