function calculateBMI() {
    let weight = document.getElementById("weight").value; 
    let height = document.getElementById("height").value;
    console.log(`${weight},${height}`);
    let result = document.getElementById("result");
    if (weight === "" || weight === "" ) 
    { 
        result.textContent = "";
    } 
    else 
    {
        let bmi = weight/((height*height)/10000); 
        bmi = bmi.toFixed(2); 
        result.textContent = bmi;
    }
}