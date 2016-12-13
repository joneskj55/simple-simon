// Created by kevinjones on 12/9/16. //

"use strict";
$(document).ready(function () {
    var userSequence = [];
    var simonSequence = [];
    var squares = $(".square");
    var audio = new Audio("shotgun-mossberg590-RA_The_Sun_God-451502290.mp3");

//------------RESET SIMON'S SEQUENCE AND CALL simonMove()------------//
    function start() {
        simonSequence = [];
        simonMove();
        audio.play();
    }

//----RESET USER SEQUENCE, CALL addRandomSquareToSequence(), AND BEGIN PLAYBACK-----//
    function simonMove() {
        userSequence = [];
        addRandomSquareToSequence();
        playback();
    }

//-----GENERATE RANDOM NUMBER BETWEEN 0-3 TO MATCH WITH ARRAY INDEX OF var squares---//
//---PUSH ID OF SQUARE (WHICH IS THE SAME AS ITS INDEX) ONTO THE simonSequence array--//
    function addRandomSquareToSequence() {
        var random = Math.floor(Math.random() * 4);
        simonSequence.push(squares[random].id);
    }

//--------INITIATE PLAYBACK OF SIMON'S SEQUENCE----------//
    function playback() {
        disableInput();

        //----UPDATE SCORE------//
        document.getElementById("round").innerText = "Round: " + simonSequence.length;

        //----CREATE THE COUNTER VARIABLE----//
        var i = 0;

        //--PLAYBACK EACH SIMON SELECTION IN SIMON'S SEQUENCE--//
        var intervalId = setInterval(function () {
            lightUp(document.getElementById(simonSequence[i]));
            i++;

            //---CHECK IF COUNTER IS EQUAL TO GAME SEQUENCE LENGTH--//
            if (i >= simonSequence.length) {
                clearInterval(intervalId);
                enableInput();
            }
        }, 1000);
    }

    function lightUp(element) {
        element.style.opacity = "1";
        var fadeoutTimerId = setTimeout(function () {
            element.style.opacity = "0.3";
        }, 600);
    }

    function compareSequences() {
        var sequenceError = false;

        //--LOOP THROUGH THE INPUT SEQUENCE AND PERFORM THE FOLLOWING:
        //--check if the game and input sequence match for a given offset...
        //--if they don't match set your error status variable to true and get out of the loop...
        for (var i = 0; i < userSequence.length; i++) {
            if (simonSequence[i] == undefined || simonSequence[i] != userSequence[i]) {
                sequenceError = true;
                break;
            }
        }
        //--CHECK IF THERE IS AN ERROR
        //--if there is, call gameOver()
        //--otherwise, check if the input sequence is the same length as the game sequence
        //--if it is, the user has completed the sequence, so clear the input sequence and call simonMove()
        if (sequenceError) {
            gameOver();
        } else if (userSequence.length == simonSequence.length) {
            simonMove();
        }
    }

    function gameOver() {
        //--HARD RELOAD THE PAGE--//
        location.reload(true);

        confirm("Game over. Play again?");
        if (confirm) {
            start();
        }
    }

    function stop() {
        alert("User stopped the game");
        location.reload(true);
    }

    function userClick() {
        var userChoice = this.id;
        lightUp(this);
        userSequence.push(userChoice);
        compareSequences();
    }

    function enableInput() {
        document.getElementById("0").addEventListener("click", userClick, false);
        document.getElementById("1").addEventListener("click", userClick, false);
        document.getElementById("2").addEventListener("click", userClick, false);
        document.getElementById("3").addEventListener("click", userClick, false);
    }

    function disableInput() {
        document.getElementById("0").removeEventListener("click", userClick, false);
        document.getElementById("1").removeEventListener("click", userClick, false);
        document.getElementById("2").removeEventListener("click", userClick, false);
        document.getElementById("3").removeEventListener("click", userClick, false);
    }

    document.getElementById("start").addEventListener("click", start, false);
    document.getElementById("stop").addEventListener("click", stop, false);
});
