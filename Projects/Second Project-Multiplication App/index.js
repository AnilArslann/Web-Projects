
const formEl=document.querySelector(".form");
let rnd1=Math.floor(Math.random()*10);
let rnd2=Math.floor(Math.random()*10);
const scorEl=document.getElementById("score");
document.querySelector("h1").innerText="What is "+rnd1+" times "+rnd2;
let score=JSON.parse(localStorage.getItem("score"));

if(!score){
    score=0;
}
scorEl.innerText='score: '+score;

formEl.addEventListener("submit",function(){
    var answer=+document.querySelector(".input").value;
    
   
    if (answer==rnd1*rnd2){
        score++;
        updateLocalStorage();
    }
    else{
        score--;
        updateLocalStorage();
    }
    

});
function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score));
}