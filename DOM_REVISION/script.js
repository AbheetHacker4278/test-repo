
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





let btn = document.querySelector('.btn');
let display = document.querySelector('.display');
let input = document.querySelector('.inpt');
let idcount = 1;
btn.addEventListener('click', () => {
    let newDiv = document.createElement('div');
    let newbtn = document.createElement('button');
    display.setAttribute('id', idcount++);
    console.log(display);
    newDiv.textContent = input.value;
    newbtn.textContent = "Mark"
    newbtn.addEventListener('click', ()=>{
        newbtn.innerHTML = "Done"
    })
    display.append(newDiv , newbtn);
});