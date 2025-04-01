const Game = (function() {
    // initialize arrays to store choices
    let userChoices = [];
    let compChoices = [];

    function logChoice(input, arr) {
        // this function takes number 1-9 and stores it in the array
        if(!userChoices.includes(input) && !compChoices.includes(input)) {
            if(input >=1 && input <=0) {
                arr.push(input);
            }
            else {
                alert("Only numbers between 1-9 are accepted")
            }
        }
        else {
            alert("This spot is taken!")
        }
    }

    function checkWin(arr) {
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
        return wins.some(combo => combo.every(num => arr.includes(num)));
    }

    function playGame() {
        // collect player1 input
        // store it in the array1
        // check player1 combo for a win
        // collect player2 input
        // store it in the array2
        // check player2 combo for a win
    }
    
    return {playGame};

})();

