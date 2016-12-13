// Created by kevinjones on 12/9/16. //

"use strict";

var computerPattern = [];
// var userPattern = [];
var userIndex = 0;
var squares = $(".square");

$(document).ready(function () {


    //-------GENERATE RANDOM NUMBER----------//
    function getRandomSquare(squares) {
        return squares[Math.floor(Math.random() * 4)];
    }

    //------------START GAME----------//
    var startGame = $("#start-game-btn").click(function () {
        computerPattern.push(getRandomSquare(squares));
        animateSequence(computerPattern);
    });

    var animateSequence = function (computerPattern) {
        computerPattern.forEach(function (element) {
            animate(element);
        })
    };

    var animate = function (square) {
        $(square).fadeOut(100).fadeIn(100);
    };


    //------------TAKE USER INPUT----------//
    function matchPatterns() {
        if (userIndex === computerPattern) {
            simonsTurn += 1;
            if () {
            // run success functionality
            // return true
            }
        } else {
            alert("NOPE!");
            userIndex = 0;
            //return false
        }
    }

    //-------ANIMATE SQUARE UPON CLICKING------//
    $(".square").click(function () {
        animate(this);
        if (matchPatterns()) {

        } else {

        }
    });
});
