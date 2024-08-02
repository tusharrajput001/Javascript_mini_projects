var totalBudget = 100;
var AddBtn = document.getElementById("AddButton");

document.getElementById("total-budget").innerHTML = "Total Budget : $" + totalBudget;

AddBtn.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the form from submitting
    var Description = document.getElementById("description").value;
    var Type = document.getElementById("type").value;
    var Amt = parseFloat(document.getElementById("amount").value); // Convert amount to a number
        // Validation for empty fields
        if (Description === "" || Amt === "") {
            alert("Please fill out all fields.");
            return;
        }   
    if (Type === "expense") {
        if (totalBudget - Amt < 0) {
            alert("Insufficient funds! Total budget cannot go below $0.");
        } else {
            totalBudget -= Amt;
        }
    } else {
        totalBudget += Amt;
    }

    document.getElementById("total-budget").innerHTML = "Total Budget : $" + totalBudget;
});
