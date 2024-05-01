function addTask() {
  let inp = document.getElementById("taskInput");
  let taskList = document.getElementById("tasksList");
  let inpValue = inp.value;

  if (inpValue == "") {
    alert("Enter something to add task");
  } else {
    let liElement = document.createElement("li");
    let spanElement = document.createElement("span");
    let textContent = document.createTextNode(inpValue);

    let RmvBtn = document.createElement("button");
    RmvBtn.textContent = "Remove";
    RmvBtn.onclick = RemoveTask;

    taskList.appendChild(liElement);
    liElement.appendChild(spanElement);
    liElement.appendChild(RmvBtn);
    spanElement.appendChild(textContent);

    function RemoveTask() {
      liElement.remove();
    }
  }
}
