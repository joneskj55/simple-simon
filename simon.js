/**
 * Created by kevinjones on 12/9/16.
 */

"use strict";
var computerPattern = [];
var userPattern = [];
var level = 0;
var matchPatterns = false;

function addPattern() {
    //set pattern
}

function playPattern() {
    //match
}
$(document).ready(function () {
    var squareArray = ["#red-div", "#blue-div", "#green-div", "#yellow-div"];
    console.log(squareArray.length);
    var illuminateRandomSquare = randomNumber();
    console.log(illuminateRandomSquare);

    //-------GENERATE RANDOM NUMBER----------//
    function randomNumber(min, max) {
        return Math.floor(Math.random() * (3 - 0 + 1)) + 0;
    }

    console.log(randomNumber());

    //------------START GAME----------//
    $("#start-game").click(function () {
        $(".square").fadeOut(100).fadeIn(100);
    });

    //-------ANIMATE SQUARE UPON CLICKING------//
    $(".square").click(function () {
        $(this).fadeOut(100).fadeIn(100);
    });


    //--------ASSIGN RANDOM NUMBER TO SQUARE----//
//        function assignedSquare(number, box) {
//            $(".square")[randomNumber[0]];
//        }
//        console.log(assignedSquare());
});
