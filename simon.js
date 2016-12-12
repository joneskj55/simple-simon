/**
 * Created by kevinjones on 12/9/16.
 */

"use strict";

// var startGame = false;
var randomPattern = [];
// var matchPattern = ;
// var successfulDuplication = ;
// var failedDuplication = ;
// var addToPattern = ;
    var userPattern = [];

$(document).ready(function () {
    var squareArray = ["#red-div", "#blue-div", "#green-div", "#yellow-div"];
    console.log(squareArray.length);
    var illuminateRandomSquare = randomNumber();
    console.log("Random Square is: " + illuminateRandomSquare);

    //-------GENERATE RANDOM NUMBER----------//
    function randomNumber() {
        return Math.floor(Math.random() * (3 - 0 + 1)) + 0;
    }


    //------------START GAME----------//
    $("#start-game").click(function () {
        var computerPattern = squareArray[randomNumber()];
        $(computerPattern).fadeOut(100).fadeIn(100);
        if (userPattern == computerPattern) {
            return userPattern.append(randomNumber());
        }
    });

    // on click of correct box pattern should repeat what was already output and add one box to the pattern


    //-------ANIMATE SQUARE UPON CLICKING------//
    $(".square").click(function () {
        $(this).fadeOut(100).fadeIn(100);
    });
});
