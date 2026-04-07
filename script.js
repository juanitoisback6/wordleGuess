function wordleGuess(secret, guess) {
          
let count = 0; 

let secretNormalize= secret.toLowerCase();
let guessNormalize= guess.toLowerCase();

for (i=0; i < secret.length; i++){
  if(secretNormalize[i]=== guessNormalize[i]){
count+=1
  }

  }

  return count
}

  console.log(wordleGuess("HELLO", "WORLD"))

 