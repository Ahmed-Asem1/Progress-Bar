let inputNumber = document.getElementById("number");
let buttonAdd = document.getElementById("add");
let barFill = document.querySelector(".bar-fill");

buttonAdd.addEventListener("click",update);

function update (){
    let keyframe = `@keyframes progress {
        0% {
            width: 0;
        }100%{
            width: 100%;
        }
    }`;

    barFill.style.animationName = "progress";
    barFill.style.cssText= keyframe;
    
    let numberValue = inputNumber.value;
    if(numberValue >100 || numberValue <=0) return;

    let set = setInterval(progMove,1);
    function progMove (){
        if(numberValue === 100) clearInterval(set);
        else{ barFill.style.width = numberValue + "%"};
    }

}