
for (var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var buttonInnerHtml=this.innerHTML;
        clickHappened(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });
    
}
function clickHappened(character){
    
    switch(character){
        case "w":
            var audio= new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio= new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio= new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio= new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        case "j":
            var audio= new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio= new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio= new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
    
        default:
            console.log(character);

        
    }
    };

function HouseKeeper(age,name,salary){
    this.name=name;
    this.age=age;
    this.salary=salary;
    this.sayHi= function(){
        console.log("Hi! "+name);
    }
}
var housekeeper1=new HouseKeeper(20,"Anil",2000);
housekeeper1.sayHi();
document.addEventListener("keydown",function(event){
    var keyboardInput=event.key;
    clickHappened(keyboardInput);
    buttonAnimation(keyboardInput);   

});

function buttonAnimation(key){
    var buttonPressed=document.querySelector("."+key);
    buttonPressed.classList.add("pressed");
    setTimeout(function(){
        buttonPressed.classList.remove("pressed");
    },100);

}
