var level=0;
var listOfButtons=$("div.btn");
var totalMoves=[];
var userPattern=[];
$(document).keypress("keypress",function(){
    if(totalMoves.length==0){
    setTimeout(newLevel(),100);
}
});
$("div.btn").click(function(){
    var typeOfButton=this.id;
    userPattern.push(typeOfButton);
    soundMaker(typeOfButton);
    animationMaker(typeOfButton);
    levelChecker(userPattern.length-1);

})
function soundMaker(buttonColor){
    var audioPlayer= new Audio("/sounds/"+buttonColor+".mp3");
    audioPlayer.play();

}
function animationMaker(buttonColor){
    $("div.btn."+buttonColor).addClass("pressed");
    setTimeout(function(){
        $("div.btn."+buttonColor).removeClass("pressed");
    },100);
}
 
function levelChecker(currentIndex){
    if(totalMoves[currentIndex]==userPattern[currentIndex]){
        if(totalMoves.length==userPattern.length){
            setTimeout(function(){
                newLevel();
        },500);

    }
}
    else{
        fail();
            
    }
}
function newLevel(){
    level++;
    userPattern=[];
    $("#level-title").text("Level "+level);
    setTimeout(function(){
    var buttonRnd=Math.floor(Math.random()*4);
    var name=listOfButtons[buttonRnd].id
    soundMaker(name);
    animationMaker(name);
    totalMoves.push(name);
    },100);
}

function fail(){
    $("body").addClass("game-over");
    var audioFail=new Audio ("/sounds/wrong.mp3");
    audioFail.play();
    setTimeout(function(){
        $("body").removeClass("game-over");
    },100);
    level=0;
    $("#level-title").text("Game Over! Please press any key to restart!");
    userPattern=[];
    totalMoves=[];
}

