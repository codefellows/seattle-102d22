function printNumbers(){
    let userInput = parseInt(prompt('How many pictures do you want to display?'));

    console.log(typeof(userInput));
    document.write('<p>' + userInput + '</p>')
    for(let i = 0; i < userInput; i++){
        document.write('<img id="hero" src="https://lumiere-a.akamaihd.net/v1/images/millennium-falcon-main-tlj-a_7cf89d3a.jpeg">')
    }
}

// let correctAnswer = 34;


// function guessingGame(){
//     let userAnswer = prompt('Please select a number 1 - 100');
//     while (userAnswer < 1 || userAnswer > 100){
//         userAnswer = prompt('Incorrect.  Please select a number 1 - 100');
//     }
//     let numberOfGuesses = 7
//     for(let i = 0; i < numberOfGuesses; i++){
//         if (userAnswer == correctAnswer){
//             alert('Great Job, you got it right');
//             break;
//         } else if (userAnswer < correctAnswer){
//             alert('Sorry, too low');
//             userAnswer = prompt('Please select a number 1 - 100');
//         } else if (userAnswer > correctAnswer){
//             alert('Sorry, to high');
//             userAnswer = prompt('Please select a number 1 - 100');
//         }
//     }
// }

// // string
// var nameString = 'Jar jar'
// console.log(typeof(nameString))

// var nameInt = 1000000
// console.log(typeof(nameInt))

// var nameBoolean = false
// console.log(typeof(nameBoolean))


