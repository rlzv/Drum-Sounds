//Detecting Button Press
// we querry for all buttons in the class .drum
let numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (let i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function handleClick() {

        //this.style.color = "white";
        let buttonInnerHTML = this.innerHTML;

        // call makeSound to detect button press
        makeSound(buttonInnerHTML);

        // call btn animation to detect button press
        btnAnimation(buttonInnerHTML);


    });

}


// Detecting Keyboard Press
document.addEventListener("keydown", function(event) {
    // call the sounds from makeSound to work for keyboard
    makeSound(event.key);

    // call btn animation
    btnAnimation(event.key);
});

// we add the sounds from the file /sounds
function makeSound(key) {
    switch (key) {
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default:
            console.log(buttonInnerHTML);
    }

}


function btnAnimation(currentKey) {
    // we found the btn that has the current key to make flashes
    let activeBtn = document.querySelector("." + currentKey);
    // we add the class .pressed to the btn that got pressed
    activeBtn.classList.add("pressed");

    // we remove this .pressed class to make the effect of flash animation
    setTimeout(function() {
        activeBtn.classList.remove("pressed");
    }, 500); //0.5 seconds


}