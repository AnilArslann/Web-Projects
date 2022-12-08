var rnd=Math.floor(Math.random()*6);
var rnd2=Math.floor(Math.random()*6);
const pics=["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"]
document.querySelector("img.img1").setAttribute("src","/images/"+pics[rnd]);
document.querySelector("img.img2").setAttribute("src","/images/"+pics[rnd2]);
if(rnd>rnd2){
    document.querySelector("h1").textContent="Player 1 Wins!";
}
else{
    document.querySelector("h1").textContent="Player 2 Wins!";
}