// random value generated
  var y = Math.floor(Math.random()*10+1);
// counting the number of guesses

// made for correct Guess

  
// function for number guessed by user     


var x = document.getElementById("guessField");



function submit(){
if (x == y) {
  alert("ONGRATULATIONS!!!!!" +playername+" YOU GUESSED IT RIGHT IN "+x+"Guess");
  x = 1;
}

else if (x > y) {
 x++;
 alert("OOPS SORRY!! TRY A SMALLER NUMBER "); 
} 

else {
  x++;
 alert("OOPS SORRY!! TRY A GREATER NUMBER "); 
}

}

function playagain(){
  y = Math.floor(Math.random() * 10 + 1 );
}