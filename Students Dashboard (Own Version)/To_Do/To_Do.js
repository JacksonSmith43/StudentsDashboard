
// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN"); // (Close button).
    var txt = document.createTextNode("\u00D7"); // \u00D7 = Malzeichen.
    span.className = "close"; // Naming close.
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
for (var i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement; // Task that close belongs to.
        var taskName = this.getAttribute('data-name'); // retrieve the name of the task from the data attribute
        div.style.display = "none";
        localStorage.removeItem('ToDo#' + taskName); // remove the corresponding entry from the localStorage
    }

}

// Add a "checked" symbol when clicking on a list item
var listItem = document.querySelector('ul'); // Because it was called list before, weather did not work.
listItem.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("input-to-do").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("to-do-list").appendChild(li);
    }
    document.getElementById("input-to-do").value = "";


    makeClose(li, inputValue);
    storeElement(inputValue);
}

function makeClose(li, inputValue) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.setAttribute('data-name', inputValue); // add data attribute with the name of the task
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            var taskNumber = div.id.split('-')[1];
            div.style.display = "none";
            localStorage.removeItem('ToDo#' + taskNumber);
        }
    }
}

function storeElement(inputValue) {
    var toDoNumber = 1;
    if (localStorage.getItem("ToDoNumber") != null) {
        toDoNumber = parseInt(localStorage.getItem("ToDoNumber")) + 1;
    }
    localStorage.setItem("ToDoNumber", toDoNumber);
    localStorage.setItem('ToDo#' + toDoNumber, JSON.stringify(inputValue));
}

function loadElements() {
    var count = 1;
    var maxNumberSavedTasks = parseInt(localStorage.getItem("ToDoNumber"));
    var t = null;
    for (let i = 0; i < maxNumberSavedTasks; i++) {
        var storedItem = localStorage.getItem('ToDo#' + count);  // ToDo# is a String. 
        if (storedItem !== null) {
            var li = document.createElement("li");
            t = document.createTextNode(storedItem);
            li.appendChild(t);
            li.setAttribute('id', 'ToDo-' + count);
            document.getElementById("to-do-list").appendChild(li);
            makeClose(li);
        }
        count++;
    }
}





// Call the loadElements function to load previously saved tasks.
loadElements();
