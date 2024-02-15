function fn(){
    let date = new Date;
    setTimeout(async()=>{
        await console.log(date.getHours()+":"+date.getMinutes()+"::"+date.getSeconds())
        fn();
    } , 1000)
}
fn();