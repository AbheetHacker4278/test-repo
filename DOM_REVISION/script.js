
// // let btn2 = document.querySelector('.btn2');
// // let display = document.querySelector('.display');
// // let count = 0;
// // btn.addEventListener('click' , ()=>{
// //     count = count + 1;
// //     display.innerHTML = count;
// // })
// // btn2.addEventListener('click' , ()=>{
// //     if(count > 0){
// //         count = count - 1;
// //         display.innerHTML = count;
// //     }
// //     else{
// //         display.innerHTML = "RuK Jaaa BHAi" + count--;
// //     }
// // })

// let btn = document.querySelector('.btn');
// let arr = ["green" , "yellow" , "pink" , "orange" , "purple"];
// btn.addEventListener('click' , ()=>{
//     arr.forEach(element => {
//         btn.style.backgroundColor = element;
//         console.log(element);  
//     })
// })





// let btn = document.querySelector('.btn');
// let display = document.querySelector('.display');
// let input = document.querySelector('.inpt');
// let idcount = 1;

// function fn(){
//         let newDiv = document.createElement('div');
//     let newbtn = document.createElement('button');
//     display.setAttribute('id', idcount++);
//     console.log(display);
//     newDiv.textContent = input.value;
//     newbtn.textContent = "Mark"
//     newbtn.addEventListener('click', ()=>{
//         newbtn.innerHTML = "Done"
//     })
//     display.append(newDiv , newbtn);
// }
// btn.addEventListener('click', fn);





let idcount = 1;
var data = {};
document.querySelector('.btn').addEventListener('click', async () => {
    let fth = await fetch('https://fakestoreapi.com/products/1');
    let foramta = await fth.json();
    if (eval(document.querySelector('.inpt').value) == 7) {
        document.querySelector('.display').innerHTML = JSON.stringify(foramta);
    } else {
        document.querySelector('.display').innerHTML = "NOT";
    }
});
