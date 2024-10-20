$(document).ready(function () {
    const choices = ["stone", "paper", "scissors"];
    const $userChoiceDiv = $("#userChoice");
    const $computerChoiceDiv = $("#computerChoice");
    const $gameResultDiv = $("#result");

    function getComputerChoice() {
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function findWinner(playerInput, computerInput) {
        if (playerInput === computerInput) {
            return "tie";
        }

        const winningConditions = {
            stone: "scissors",
            paper: "stone",
            scissors: "paper"
        };

        if (winningConditions[playerInput] === computerInput) {
            return "victory";
        } else {
            return "defeat";
        }
    }

    function playGame(playerChoice) {
        const computerChoice = getComputerChoice();
        displayComputerChoice(computerChoice);
        const gameResult = findWinner(playerChoice, computerChoice);
        displayGameResult(gameResult);
    }


    $("#rock").click(function () {
        $userChoiceDiv.html("<p>You chose <strong>stone</strong> !</p>");
        playGame("stone");
    });

    $("#paper").click(function () {
        $userChoiceDiv.html("<p>You chose <strong>paper</strong> !</p>");
        playGame("paper");
    });

    $("#scissors").click(function () {
        $userChoiceDiv.html("<p>You chose <strong>scissors</strong> !</p>");
        playGame("scissors");
    });

    const displayComputerChoice = (computerInput) => {
        $computerChoiceDiv.html("<p>CPU chose <strong>" + computerInput + "</strong> !</p>");
    };

    const displayGameResult = (gameResult) => {
        $gameResultDiv.removeClass();
        let message = "Game result : ";
        if (gameResult === "tie") {
            $gameResultDiv.html("<p>Uh, oh... " + message + "<strong>" + gameResult + "</strong></p>");
            $gameResultDiv.addClass("w-1/2 mx-auto flex justify-center mt-6 py-2 bg-zinc-400");
        } else if (gameResult === "victory") {
            $gameResultDiv.html("<p>Congrats !!! " + message + "<strong>" + gameResult + "</strong></p>");
            $gameResultDiv.addClass("w-1/2 mx-auto flex justify-center mt-6 py-2 bg-lime-400");
        } else if (gameResult === "defeat") {
            $gameResultDiv.html("<p>Oh noes ! " + message + "<strong>" + gameResult + "</strong></p>");
            $gameResultDiv.addClass("w-1/2 mx-auto flex justify-center mt-6 py-2 bg-red-400");
        }
    }
})

