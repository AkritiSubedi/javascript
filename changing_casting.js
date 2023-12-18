// var name = "Akriti";
// name = name.toUpperCase();
// name = name.toLowerCase();

var name= prompt("What is your name:");
var firstchar = name.slice(0,1);
var upperCaseFirstChar = firstchar.toUpperCase();
var restofName = name.slice(1, name.length);
var restofName = restofName.toLowerCase();
var capitalisedName = upperCaseFirstChar + restofName;
alert(capitalisedName)

