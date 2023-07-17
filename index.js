// For Loops lesson practice

const vacationSpots = ['Bali', 'Paris', 'Tulum'];
for (let i = 0; i < vacationSpots.length; i++){
  console.log('I would love to visit ' + vacationSpots[i]);
}


// Loop in reverse

// The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0
for (let counter = 3; counter < 0; counter--){
  console.log(counter);
}

// Nested Loops

let bobsFollowers = ['Joe', 'Marta', 'Sam', 'Erin'];
let tinasFollowers = ['Sam', 'Marta', 'Elle'];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}

// While Loops
const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard;
while (currentCard !== 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}
// Do While loops
let cupsOfSugarNeeded = 3;
let cupsAdded = 0;

do {
 cupsAdded++
 console.log(cupsAdded + ' cup was added') 
} while (cupsAdded < cupsOfSugarNeeded);

// Using the break Kayword
/*
The break Keyword

Imagine we’re looking to adopt a dog. We plan to go to the shelter every day for a year and then give up. But what if we meet our dream dog on day 65? We don’t want to keep going to the shelter for the next 300 days just because our original plan was to go for a whole year. In our code, when we want to stop a loop from continuing to execute even though the original stopping condition we wrote for our loop hasn’t been met, we can use the keyword break.

The break keyword allows programs to “break” out of the loop from within the loop’s block.
*/

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];
for (let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i]);
  if (rapperArray[i] === 'Notorious B.I.G.'){
    break;
  }
}
console.log("And if you don't know, now you know.");

/*
Review

Great job! In this lesson, we learned how to write cleaner code with loops. You now know:

    Loops perform repetitive actions so we don’t have to code that process manually every time.
    How to write for loops with an iterator variable that increments or decrements
    How to use a for loop to iterate through an array
    A nested for loop is a loop inside another loop
    while loops allow for different types of stopping conditions
    Stopping conditions are crucial for avoiding infinite loops.
    do...while loops run code at least once— only checking the stopping condition after the first execution
    The break keyword allows programs to leave a loop during the execution of its block


*/








