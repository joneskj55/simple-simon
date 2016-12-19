// Created by kevinjones on 12/9/16. //

"use strict";
$(document).ready(function () {
    var userSequence = [];
    var simonSequence = [];
    var circles = $(".circle");
    var audio = new Audio("shotgun-mossberg590-RA_The_Sun_God-451502290.mp3");
    var gamestart = new Audio("Pacman_Introduction_Music-KP-826387403.mp3")

//------------RESET SIMON'S SEQUENCE AND CALL simonMove()------------//
    function start() {
        gamestart.play();
        simonSequence = [];
        simonMove();
    }

//----RESET USER SEQUENCE, CALL addRandomCircleToSequence(), AND BEGIN PLAYBACK-----//
    function simonMove() {
        userSequence = [];
        addRandomCircleToSequence();
        playback();
    }

//-----GENERATE RANDOM NUMBER BETWEEN 0-3 TO MATCH WITH ARRAY INDEX OF var circles---//
//---PUSH ID OF CIRCLE (WHICH IS THE SAME AS ITS INDEX) ONTO THE simonSequence array--//
    function addRandomCircleToSequence() {
        var random = Math.floor(Math.random() * 4);
        simonSequence.push(circles[random].id);
    }

//--------INITIATE PLAYBACK OF SIMON'S SEQUENCE----------//
    function playback() {
        disableInput(); //--disables click listener--//

        //----UPDATE SCORE------//
        document.getElementById("round").innerText = "Round: " + simonSequence.length;

        //--------------COUNTER------------------//
        var i = 0;

        //--PLAYBACK EACH SIMON SELECTION IN SIMON'S SEQUENCE--//
        var intervalId = setInterval(function () {
            lightUp(document.getElementById(simonSequence[i]));
            i++;

            //---CHECK IF COUNTER IS EQUAL TO GAME SEQUENCE LENGTH--//
            if (i >= simonSequence.length) {
                clearInterval(intervalId);
                enableInput(); //--function allows user to click desired circle--//
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
        //--check if the computer and user input sequence match...
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

        confirm("Game over. Would you like to play again?");
        if (confirm) {
            start();
        }
    }

    function stop() {
        alert("Game stopped.");
        location.reload(true);
    }

    function userClick() {
        var userChoice = this.id;
        lightUp(this);
        audio.play();
        userSequence.push(userChoice);
        compareSequences();
    }

    function enableInput() {
        $("#0").click(userClick).on();
        $("#1").click(userClick).on();
        $("#2").click(userClick).on();
        $("#3").click(userClick).on();
    }

    function disableInput() {
        $("#0").click(userClick).off();
        $("#1").click(userClick).off();
        $("#2").click(userClick).off();
        $("#3").click(userClick).off();
    }

    //--------START AND STOP BUTTONS--------//
    $("#start").click(start).on();
    $("#stop").click(stop).on();
});
