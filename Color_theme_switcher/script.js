const buttons = document.querySelectorAll(".button");
const body = document.querySelector('body');

buttons.forEach(function(button){
    button.addEventListener("click",(e)=>{
        if(e.target.id == 'gray'){
            body.style.backgroundColor = "gray";
        }
        else if(e.target.id == "aqua"){
            body.style.backgroundColor = "aquamarine"
        }
        else if(e.target.id == "voilet"){
            body.style.backgroundColor = "violet"
        }
        else{
            body.style.backgroundColor = "white"
        }
    })
})

