const hourEl=document.getElementById("hour");
const minuteEl=document.getElementById("minutes");
const secondEl=document.getElementById("seconds");
const amPmEl=document.getElementById("am-pm");



function updateClock(){
    let timeData= new Date();
    let h=timeData.getHours();
    let m = timeData.getMinutes();
    let s=timeData.getSeconds();
    let amPm="AM";
    if(h>12){
        h=h-12;
        amPm="PM";
    }
    h=(h<10)? "0"+h:h;
    hourEl.innerHTML=h;
    minuteEl.innerHTML=m;
    secondEl.innerHTML=s;
    amPmEl.innerHTML=amPm;
    setTimeout(()=>{
        updateClock()
    },1000);
}
updateClock();