var character = document.getElementById("character");
var block = document.getElementById("block");
var counter=0;
function jump(){
    var audio = new Audio('mixkit-negative-tone-interface-tap-2569.wav');
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
    audio.play();
}
var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    
    if(blockLeft<40 && blockLeft>-40 && characterTop>=130){
        block.style.animation = "none";
        alert("Game Over. score: "+Math.floor(counter/1100));
        counter=0;
        block.style.animation = "block 1s infinite linear";

    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/1100);
    }
}, 10);