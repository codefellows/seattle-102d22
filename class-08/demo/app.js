function printNumbers(){
    for(let i = 0; i < 10; i++){
        document.write('<li>' + i + '</li>')
    }
}

let correctAnswer = 34;


function guessingGame(){
    let userAnswer = prompt('Please select a number 1 - 100');
    while (userAnswer < 1 || userAnswer > 100){
        userAnswer = prompt('Incorrect.  Please select a number 1 - 100');
    }
    let numberOfGuesses = 7
    for(let i = 0; i < numberOfGuesses; i++){
        if (userAnswer == correctAnswer){
            alert('Great Job, you got it right');
            break;
        } else if (userAnswer < correctAnswer){
            alert('Sorry, too low');
            userAnswer = prompt('Please select a number 1 - 100');
        } else if (userAnswer > correctAnswer){
            alert('Sorry, to high');
            userAnswer = prompt('Please select a number 1 - 100');
        }
    }
}

// string
var nameString = 'Jar jar'
console.log(typeof(nameString))

var nameInt = 1000000
console.log(typeof(nameInt))

var nameBoolean = false
console.log(typeof(nameBoolean))


