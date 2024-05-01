document.getElementById("increase").addEventListener("click", () => {
  let count = parseInt(document.getElementById("count").textContent);
  count += 1;
  document.getElementById("count").textContent = count;
});

document.getElementById("decrease").addEventListener("click", () => {
  let count = parseInt(document.getElementById("count").textContent);
  if (count > 0) {
    count -= 1;
    document.getElementById("count").textContent = count;
  } else {
    count = 0;
  } 
});

document.getElementById("reset").addEventListener("click", () =>{
    let count = parseInt(document.getElementById("count").textContent);
    if(count > 0){
        count = 0;
        document.getElementById("count").textContent = count;
    }
})
