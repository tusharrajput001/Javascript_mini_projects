function calculateArea() {
  const A = parseFloat(document.getElementById("sideA").value);
  const B = parseFloat(document.getElementById("sideB").value);
  const C = parseFloat(document.getElementById("sideC").value);

  if (A + B > C && A + C > B && B + C > A) {
    let semiPerimeter = (A + B + C) / 2;
    let area = Math.sqrt(
      semiPerimeter *
        (semiPerimeter - A) *
        (semiPerimeter - B) *
        (semiPerimeter - C)
    );

    let resContainer = (document.getElementById("result").textContent =
      area.toFixed(2));
  } else {
    document.getElementById("result").textContent =
      "Invalid triangle. Please enter valid side lengths.";
  }
}
