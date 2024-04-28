
var res = document.getElementById("result");

document.querySelector('#btn').addEventListener("click",()=>{
    let date = document.getElementById("birthday").value;
    let current_year = new Date().getFullYear();
    let birth_year = parseInt(date.substring(0,4));
    let result = current_year - birth_year;
    res.innerHTML = result;
})

