//This is a Challenge to test Basic JS knowledge.

const johnAvg = ((90 + 81 + 55 + 70 + 80) / 5);
const meganAvg = ((88 + 75 + 87 + 80 + 84) / 5);

if (johnAvg > meganAvg) {
    var loser = meganAvg;
    console.log("John has a higher class Score. His score is: " + johnAvg + ".");
    //Below will be updated when I figure out how to add a third scenario
    //if (johnAvg === meganAvg) {
        //console.log("John and Megan have the same class Score. It's a tie!");
    //}
} else {
    var loser = johnAvg;
    console.log("Megan has a higher class Score. Her score is: " + meganAvg + ".");   
}

console.log("Loser's score is: " + loser);