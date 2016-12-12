// Created by kevinjones on 12/9/16. //

"use strict";

$(document).ready(function () {
    var computerPattern = []; //--why does this work?--//
    var userPattern = [];
    var userIndex = 0; //--what does this actually do?--//
    var squares = $(".square");

    //-------GENERATE RANDOM NUMBER----------//
    function randomNumber() {
        return Math.floor(Math.random() * (3 - 0 + 1)) + 0;
    }

    //------------START GAME----------//
    $("#start-game-btn").click(function () {
        simonsTurn();
    });

    //----------SIMON'S TURN-------------//
    var simonsTurn = function () {
        computerPattern.push(squares[randomNumber()]);
        $(computerPattern).each /** what exactly is going on here? **/ (function(index, element) {
            $(element).fadeOut(500).fadeIn(500);
        });
    };

    //-------ANIMATE SQUARE UPON CLICKING------//
    squares.click(function () {
        $(this).fadeOut(100).fadeIn(100);
        matchPatterns(this, userIndex);
    });

    function animate(computerPattern) {
        var i = 0;
        var interval = setInterval(function() {
            lightUp(computerPattern[i]);

            i++;
            if (i >= computerPattern.length) {
                clearInterval(interval);
                simonsTurn();
            }
        }, 600);
    }

    //-----------FUNCTION TO ADD TO PATTERN-----------//
    function matchPatterns(userClick, userIndex) /** what is this? **/ {
        if (userClick === computerPattern[userIndex]) {
            simonsTurn();
            userIndex += 1;
        } else {
            // run game over
            userIndex = 0;
        }
    }

    //------------STORE USER INPUT--------------//
    function storeUserInput() {
        userPattern;
    }
});
