//This is a Challenge to test Basic JS knowledge.
// Paste this into John's constant's value to test equality scenario:
//90 + 81 + 55 + 70 + 80

const johnAvg = ((88 + 75 + 87 + 80 + 84) / 5);
const meganAvg = ((90 + 81 + 55 + 70 + 80) / 5);

if (johnAvg > meganAvg) {
    var loser = meganAvg;
    console.log("John has a higher class Score. His score is: " + johnAvg + ".");
    console.log("Loser's score is: " + loser);

}
  else if (johnAvg === meganAvg) {
        console.log("John and Megan have the same class Score. It's a tie!");
} else {
    var loser = johnAvg;
    console.log("Megan has a higher class Score. Her score is: " + meganAvg + "."); 
    console.log("Loser's score is: " + loser);  
}