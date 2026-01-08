//const clock=document.querySelector('#clock')
const clock=document.getElementById('clock')
setInterval(function(e){
    let date=new Date()
    clock.innerHTML=date.toLocaleTimeString()

},1000)
//https://github.com/hiteshchoudhary/js-hindi-youtube