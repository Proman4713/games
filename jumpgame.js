document.querySelector('#lose').style.display = "none";
document.querySelector('#replay').style.display = "none";
document.querySelector("#link").style.display = "none";
var score = document.querySelector('h1').innerHTML;
var lose = document.querySelector('#lose');
var replay = document.querySelector('#replay');
var character = document.getElementById("character");
var block = document.getElementById("block");
var link = document.querySelector("#link");
function jump(){
    if(character.classList != "animate"){
    character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
    },500)
}

var checkDead = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    
    if(blockLeft<20 && blockLeft>0 && characterTop>=130){
        block.style.animation = "none";
        block.style.display = "none";
        character.style.animation = "none";
        character.style.display = "none";
        lose.style.display = "block";
        replay.style.display = "block";
        link.style.display = "block";
        alert("you lost");
    }

},10);