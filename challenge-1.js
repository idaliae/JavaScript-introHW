
const cupsDrank = prompt("How many cups have you drank today?");

if (parseInt(cupsDrank) < 3) {
    console.log("Yes, I'll take another cup of coffee.");
} else {
    console.log("I think I'm okay for now.");
}

// Write a script that:
// Stores the number of cups (that a person has consumed) in a variable
// If the person has had *less than* 3 cups
// Log a message to the console saying: ("Yes I'll take another cup of coffee.")
// If not
// Log a message to the console saying ("I think I'm okay for now.")