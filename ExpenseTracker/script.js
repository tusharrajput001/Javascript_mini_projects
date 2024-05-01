let expenseNameInput = document.getElementById("expenseName");
let expenseAmountInput = document.getElementById("amount");
let expenseDateInput = document.getElementById("date");
let expenseListUl = document.getElementById("expenseList");
let totalAmountSpan = document.getElementById("totalAmount");

function addExpense() {
  // Retrieve existing expenses from localStorage or initialize an empty array
  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

  // Create a new expense object
  const expense = {
    id: Date.now(),
    name: expenseNameInput.value,
    amount: parseFloat(expenseAmountInput.value),
    date: expenseDateInput.value,
  };

  // Add the new expense to the expenses array
  expenses.push(expense);

  // Store the updated expenses array back into localStorage
  localStorage.setItem("expenses", JSON.stringify(expenses));

  // Clear the input fields
  expenseNameInput.value = "";
  expenseAmountInput.value = "";
  expenseDateInput.value = "";
  displayExpenses();
}




function displayExpenses() {
  // Getting expenses
  let expenses = JSON.parse(localStorage.getItem("expenses"));

  // Clear previous list items
  expenseListUl.innerHTML = "";

  // Total
  let total = 0;

  if (expenses && expenses.length > 0) {
    expenses.forEach((expense) => {
      // Setting total
      total += expense.amount;

      // Creating Li for each expense
      let expenseLi = document.createElement("li");
      expenseLi.id = expense.id; // Set the id of the li to the expense's id

      // Adding li data
      expenseLi.innerHTML = `<span class="expense-name">${expense.name}</span>
                              <span class="expense-amount">${expense.amount}</span>
                              <span class="expense-date">${expense.date}</span>
                              <button onclick="removeExpense(event)">Remove</button>`;

      // Appending the li to the ul list here
      expenseListUl.appendChild(expenseLi);
    });
  }

  // Adding total
  totalAmountSpan.textContent = total;
}

// Remove expense
function removeExpense(event) {
  const button = event.target;
  const li = button.closest("li");
  const expenseId = li.id;

  //   Removing from localstorage
  let expenses = JSON.parse(localStorage.getItem("expenses"));
  expenses = expenses.filter((e) => e.id != expenseId);
  localStorage.setItem("expenses", JSON.stringify(expenses));
  // Removing here
  expenseListUl.removeChild(li);
}
