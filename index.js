var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for(var i =0; i<numberOfDrumButtons; i++) {
    // Second arg is a function that will be called at a later point. Hence no '()'
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;
        
        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML)
    })
}
// setup keypress
document.addEventListener("keypress", function(event){
    
    makeSound(event.key);

    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            let tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            let tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            let snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "k":
            let crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case "l":
            let kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;

        default: console.log(buttonInnerHTML)
            break;
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    // adds & remove css class
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}



// // NB: The new Audio object plays sound
// var audio = new Audio('sounds/tom-1.mp3');
// audio.play()
