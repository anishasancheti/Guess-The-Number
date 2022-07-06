var systemGuess = Math.floor(Math.random()*100)+1;
var guess = 0;
function guessNumber()
{
    var num = document.getElementById('in').value;
    if (num === '' || num>100 || num<1) {
        console.log("Plaese enter a valid number!");
        document.getElementById('out').innerText = "Plaese enter a valid number!";
    }
    else{
        guess++;
        var num = parseInt(document.getElementById('in').value)
        if(num  === systemGuess){
            console.log("Yess! you guessed it right after "+guess+" turns.");
            document.getElementById('out').innerText = "Yess! you guessed it right after "+guess+" turns.";
        }
        else if(num > systemGuess){
            console.log("Guess a smaller number!");
            document.getElementById('out').innerText = "Guess a smaller number!";
        }
        else{
            console.log("Guess a greater number!");
            document.getElementById('out').innerText = "Guess a greater number!";
        }
    }
}
