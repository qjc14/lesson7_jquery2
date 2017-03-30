/*
Program Name: Recipe Display Application
Author: Quinn Ciambella
Date: 03/30/2017
Filename: script.js
*/

//displays the next element after the current target
function display(event){
    
    $(event.currentTarget).next().fadeIn("slow");
    
}//end of display


//attach event listener to h3 elements to invoke display fnc when clicked
$("h3").click(display);