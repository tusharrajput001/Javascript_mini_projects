function AddItem() {
  var ItemName = document.getElementById("InpText").value;
  if (ItemName) {
    var items = JSON.parse(localStorage.getItem("Items")) || [];
    items.push(ItemName);
    localStorage.setItem("Items", JSON.stringify(items));

    const myList = document.createElement("li");
    myList.innerText = ItemName;

    // Create the delete button
    const DelBtn = document.createElement("button");
    DelBtn.innerText = "Remove";
    DelBtn.onclick = function () {
      RemoveItem(ItemName);
    };

    // Append the delete button to the list item
    myList.appendChild(DelBtn);

    // Append the list item to the unordered list
    document.getElementById("unordList").appendChild(myList);

    document.getElementById("InpText").value = "";
  }
}

function LoadItems() {
  var items = JSON.parse(localStorage.getItem("Items")) || [];

  items.forEach(function (item) {
    const myList = document.createElement("li");
    myList.innerText = item;

    // Create the delete button
    const DelBtn = document.createElement("button");
    DelBtn.innerText = "Remove";
    DelBtn.onclick = function () {
      RemoveItem(item);
    };

    // Append the delete button to the list item
    myList.appendChild(DelBtn);

    // Append the list item to the unordered list
    document.getElementById("unordList").appendChild(myList);
  });
}

function RemoveItem(item) {
  var items = JSON.parse(localStorage.getItem("Items")) || [];
  items = items.filter((i) => i !== item);
  localStorage.setItem("Items", JSON.stringify(items));

  // Remove all children of the unordered list
  var ul = document.getElementById("unordList");
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }

  // Reload items to reflect the deletion
  LoadItems();
}

function AllClear() {
  localStorage.clear();
  window.location.reload();

}

window.onload = LoadItems;
