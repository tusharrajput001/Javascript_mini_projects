// function filterEvenNumbers(){
//     const arrIn = document.getElementById("arrayInput").value;
//     let newArr= [];
//     let arr = arrIn.split(",").map(item => parseInt(item.trim()));
//     arr.forEach((a) => {
//         if(a%2!=0){
//             newArr.push(a);
//         }

//     });
//     document.getElementById("result").innerText = `[${newArr.join(', ')}]`
// }


// function sumofarray(){
//     const arrIn = document.getElementById("arrayInput").value;
//     let sum = 0;
//     let newArr= [];
//     let arr = arrIn.split(",").map(item => parseInt(item.trim()));
//     arr.forEach((a) => {
//         sum +=a;
//     });
//     document.getElementById("result").innerText = `${sum}`
// }


// function ReverseArray(){
//     const arrIn = document.getElementById("arrayInput").value;
//     let newArr= [];
//     let arr = arrIn.split(",").map(item => parseInt(item.trim()));
//     arr.reverse();
//     arr.forEach((a) => {
//         newArr.push(a);
//     });
//     document.getElementById("result").innerText = `[${newArr.join(', ')}]`
// }