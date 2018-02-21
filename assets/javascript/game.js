$(document).ready(function() {

    var wins = 0;
    var losses = 0;
    var computerGoal;
    var crystalOne;
    var crystalTwo;
    var crystalThree;
    var crystalFour;
    var currentScore;

    function initializeGame() {
        computerGoal = Math.floor(Math.random() * 120)+ 19;
        console.log(computerGoal);
        $("#goal").html("Your goal is: " + computerGoal);
        crystalOne = Math.floor(Math.random() * 12)+ 1;
        console.log(crystalOne, "c1");
        crystalTwo = Math.floor(Math.random() * 12)+ 1;
        console.log(crystalTwo, "c2");
        crystalThree = Math.floor(Math.random() * 12)+ 1;
        console.log(crystalThree, "c3");
        crystalFour = Math.floor(Math.random() * 12)+ 1;
        console.log(crystalFour, 'c4');
        console.log("working?")
        console.log("computerGoal", computerGoal);
        currentScore = 0;
        $("#currentScore").html("Your Score is: " + currentScore);
   
    }
    
    initializeGame();

    function game() {

        if (currentScore > computerGoal) {
        losses++;
        console.log(losses, "losses");
        $("#losses").html("Losses: " + losses);
        initializeGame(); 
        alert("You bust! Play again?") 

        }

        else if (currentScore === computerGoal) {
        wins++;
        console.log(wins, "wins");
        $("#wins").html("Wins: " + wins);
        alert("You win!");
        initializeGame();  
        }

    }

    $("#cry1").on("click", function() {
        currentScore += crystalOne;
        console.log(currentScore, "currentScore");
        console.log(crystalOne, "crystalOne");
        $("#currentScore").html("Your score : " + currentScore);
        game();
    });

     $("#cry2").on("click", function() {
        currentScore += crystalTwo;
        console.log(currentScore, "currentScore");
        console.log(crystalTwo, "crystalTwo");
        $("#currentScore").html("Your score : " + currentScore);
        game();
    });

     $("#cry3").on("click", function() {
        currentScore += crystalThree;
        console.log(currentScore, "currentScore");
        console.log(crystalThree, "crystalThree");
        $("#currentScore").html("Your score : " + currentScore);
        game();
    });

     $("#cry4").on("click", function() {
        currentScore += crystalFour;
        console.log(currentScore, "currentScore");
        console.log(crystalFour, "crystalFour");
        $("#currentScore").html("Your score : " + currentScore);
        game();
    });


});