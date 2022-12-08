const textareaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");
const remainingCounterEl = document.getElementById("remaining-counter");


textareaEl.addEventListener("keyup",()=>{
    updateValue();
});




updateValue();


function updateValue(){
    totalCounterEl.innerText=textareaEl.value.length;
    remainingCounterEl.innerText=textareaEl.getAttribute("maxlength")-textareaEl.value.length;
}