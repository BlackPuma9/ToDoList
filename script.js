// Create a new list item when clicking on the "Add" button
function submitTask() {
	
  let li = document.createElement("li");
  let ul = document.getElementsByTagName("ul")[0];
  let inputValue = ++ul.children.length + ". " + document.getElementById("myInput").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  
  document.getElementById("myInput").value = "";

  let buttonDone = document.createElement("button");
  let txt = document.createTextNode("Done");
  buttonDone.className = "close";
  buttonDone.appendChild(txt);
  li.appendChild(buttonDone);

  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
}

// Create a "close" button and append it to each list item
let myNodelist = document.getElementsByTagName("LI");
for (let i = 0; i < myNodelist.length; i++) {
  let buttonDone = document.createElement("button");
  let txt = document.createTextNode("Done");
  buttonDone.className = "close";
  buttonDone.appendChild(txt);
  myNodelist[i].appendChild(buttonDone);
}

// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}