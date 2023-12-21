var guestList = ["Angela", "Jack", "Pam", "Lara"];
var guestName = prompt("What is your name?");
if (guestList.includes(guestName)) {
    alert("Welcome");
} else {
    alert("Sorry, maybe next time.");
}
