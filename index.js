//handle click
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}
//handle keydown
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      let crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      let kickBass = new Audio("./sounds/kick-bass.mp3");
      kickBass.play();
      break;
    case "s":
      let snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      let tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      let tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      let tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      let tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
    default:
      console.log(buttonInnerHTML);
  }
}

function resetButtonAnimation(currentKey){
document.querySelector("."+currentKey).classList.remove('pressed');
}
  function buttonAnimation(currentKey){
document.querySelector("."+ currentKey).classList.add('pressed'); 
setTimeout(function(){document.querySelector("."+currentKey).classList.remove('pressed');
},100);
}
// //constructor function
// function BellBoy(name,age,hasWorkPermit,languages){
//     this.name=name;
//     this.age=age;
//     this.hasWorkPermit=hasWorkPermit;
//     this.languages=languages;
//     this.clean=function(){
//         alert("cleaning in progress");
//     }

// }

// let bellBoy1=new BellBoy("Tommy",15,true,["French, English"]);
// let bellBoy2=new BellBoy("Tony",12,false,["Vietnamese, English"]);
// let bellBoy3=new BellBoy("Tymma",1,true,["English"]);
