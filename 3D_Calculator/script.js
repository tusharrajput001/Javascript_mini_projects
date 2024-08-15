// Get all buttons with the class 'textButton'
const buttons = document.querySelectorAll(".textbutton");

// Add one event listener to all buttons
buttons.forEach(function add(button) {
  button.addEventListener("click", function () {
    // Get the input field
    const inputField = document.getElementById("InputFeild");

    // Insert the button text into the input field
    inputField.value += this.textContent;
  });
});

function Calc() {
  const Expression = document.getElementById("InputFeild").value;
  try{
    const val = eval(Expression);
    document.getElementById("InputFeild").value = val;
  }
  catch(e){
    alert("Invalid Expression");
    document.getElementById("InputFeild").value = "";
  }

}

function Clear() {
    document.getElementById("InputFeild").value = "";
}