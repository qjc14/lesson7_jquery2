/*
Program Name: Recipe Display Application
Author: Quinn Ciambella
Date: 03/30/2017
Filename: drill4.js
*/

//displays the next element after the current target
function display(event){
    
    $(event.currentTarget).next().fadeIn("slow");
    
}//end of display


//attach event listener to h3 elements to invoke display fnc when clicked
//$("h3").click(display);

//displays and animates the next element after the current target function
function display2(event) {
    
    $(event.currentTarget).next().animate( {height: 'toggle'}, "slow") ;
    
}//end of display 2

//attach event listener to h3 elements to invoke display function when clicked
$("h3").click(display2);

//change background color of h3 when mouse hovers over it
$("h3").hover(function(){
    $(this).css("background-color", "red");
    }, function() {
    $(this).css("background-color", "gold");
    }) ;

//hover() will trigger display 2 method each time mouse hovors over header
$("h3").hover(display2);