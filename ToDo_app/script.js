// Function to add a new task
function add_function(){
    var input = document.getElementById("input-id").value.trim();  // getting input 

    if(input === ""){
        alert("Write something to add task");
        return;
    }

    var li = document.createElement("li"); // create list item element
    var t = document.createTextNode(input); // create text node
    li.appendChild(t);  // append text node to list item

    var trashIcon = document.createElement("i"); // create trash icon element
    trashIcon.className = "fa fa-trash"; // set class for Font Awesome trash icon
    trashIcon.setAttribute("aria-hidden", "true");

    // Append trash icon to list item
    li.appendChild(trashIcon);

    // Add click event listener to trash icon to remove its parent list item and update localStorage
    trashIcon.addEventListener('click', function() {
        this.parentNode.remove();
        updateLocalStorage();
    });

    // Append list item to the unordered list
    document.getElementById("myUL").appendChild(li);

    // Store the task in local storage
    storeTask(input);

    document.getElementById("input-id").value = "";  // empty input after adding
} 

// Function to store a task in local storage
function storeTask(task) {
    // Get existing tasks from local storage or initialize an empty array
    var tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Add the new task to the array
    tasks.push(task);

    // Store the updated tasks array in local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to update local storage when a task is removed
function updateLocalStorage() {
    var tasks = [];
    var listItems = document.querySelectorAll('#myUL li');
    listItems.forEach(function(item) {
        tasks.push(item.firstChild.textContent);
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to load tasks from local storage when the page loads
function loadTasksFromLocalStorage() {
    var tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach(function(task) {
        var li = document.createElement("li");
        var t = document.createTextNode(task);
        li.appendChild(t);

        var trashIcon = document.createElement("i");
        trashIcon.className = "fa fa-trash";
        trashIcon.setAttribute("aria-hidden", "true");
        trashIcon.addEventListener('click', function() {
            this.parentNode.remove();
            updateLocalStorage();
        });
        li.appendChild(trashIcon);

        document.getElementById("myUL").appendChild(li);
    });
}

// Call the function to load tasks from local storage when the page loads
loadTasksFromLocalStorage();
