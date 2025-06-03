function handleClick(){
    alert("I got clicked!");
}
for (let i=0;i<document.querySelectorAll(".drum").length;i++){
    let audio=new Audio('./sounds/kick-bass.mp3');
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
       var buttonInnerHTML=this.innerHTML;
       switch(buttonInnerHTML){
        case "w":
            let audio=new Audio('./sounds/crash.mp3');
            audio.play();
            break;
       }
    });
    }
