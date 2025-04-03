const Game = (function() {
    // initialize arrays to store choices
    let player = "player1";
    let player1Choices = [];
    let player2Choices = [];

    function logChoice(input, button) {

        // this function takes number 1-9 and stores it in the array
        if(!player1Choices.includes(input) && !player2Choices.includes(input)) {
            if(input >=1 && input <=9) {
                if(player === "player1") {
                    player1Choices.push(input);
                    button.innerText="X";
                }
                else {
                    player2Choices.push(input);
                    button.innerText="O";
                }
            }
            else {
                alert("Only numbers between 1-9 are accepted")
            }
        }
        else {
            alert("This spot is taken!")
        }
    }

    function checkWin() {
        // helper function to check if `arr` is in any of the winning combinations

        const wins = [
            [1,2,3],
            [4,5,6],
            [7,8,9],
            [1,5,9],
            [1,4,7],
            [2,5,8],
            [3,6,9],
            [3,5,7]
        ]

        if(player === "player1") {
            return wins.some(combo => combo.every(num => player1Choices.includes(num)));
        }
        else {
            return wins.some(combo => combo.every(num => player2Choices.includes(num)));
        }
        
    }

    function clearBoard() {
        let clickedSpot = document.querySelectorAll(".gameboard div");
        clickedSpot.forEach((button) => {
            button.innerText = "";
            player = "player1";
            player1Choices = [];
            player2Choices = [];
        });
    }

    function playGame() {

        let clickedSpot = document.querySelectorAll(".gameboard div");
        clickedSpot.forEach((button, index) => {
            ++index; // increment to start from 1

            button.onclick = () => {
                logChoice(index, button);
                
                console.log("Player 1 Choices: " + player1Choices);
                console.log("Player 2 Choices: " + player2Choices);

                if (checkWin()) {
                    console.log(player + " wins!");
                    const dialog = document.getElementById('myDialog');
                    const closeBtn = document.getElementById('closeBtn');
                    const wonMessage = document.querySelector('#myDialog p');
                    dialog.showModal();
                    wonMessage.innerText = player + " won!"
                    closeBtn.addEventListener('click', () => {
                        clearBoard();
                        dialog.close();
                    });
                }
                player = player === "player1" ? "player2" : "player1";

            }
        })
    }

    return {playGame};

})();

Game.playGame();