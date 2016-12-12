// Created by kevinjones on 12/9/16. //

"use strict";

var computerPattern = [];
var userPattern = [];

$(document).ready(function () {
    var squareArray = ["#red-div", "#blue-div", "#green-div", "#yellow-div"];

    //-------GENERATE RANDOM NUMBER----------//
    function randomNumber() {
        return Math.floor(Math.random() * (3 - 0 + 1)) + 0;
    }

    //------------START GAME----------//
    $("#start-game-btn").click(function () {
        var computerPattern = squareArray[randomNumber()];
        $(computerPattern).fadeOut(100).fadeIn(100);
        if (userPattern == computerPattern) {
        }
    });

    //-------ANIMATE SQUARE UPON CLICKING------//
    $(".square").click(function () {
        $(this).fadeOut(100).fadeIn(100);
    });
});
