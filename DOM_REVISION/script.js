let btn = document.querySelector('.btn');
let btn2 = document.querySelector('.btn2');
let display = document.querySelector('.display');
let count = 0;
btn.addEventListener('click' , ()=>{
    count = count + 1;
    display.innerHTML = count;
})
btn2.addEventListener('click' , ()=>{
    if(count > 0){
        count = count - 1;
        display.innerHTML = count;
    }
    else{
        display.innerHTML = "RuK Jaaa BHAi" + count--;
    }
})
