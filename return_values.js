// function getMilk(money){
//     console.log("buy" + calcBottles(money, 1.5) + "bottles of milk");
//     return money % 1.5;
    
// }
// function calcBottles(startingMoney , costPerBottle){
//     var numberOfBottles = Math.floor(startingMoney / costPerBottle);
//     return numberOfBottles;
// }
// getMilk(5);

function getMilk(money, costPerBottle){
    console.log("buy" + calcBottles(money, 1.5) + "bottles of milk");
    return calcChange(money, costPerBottle);
    
}
function calcBottles(startingMoney , costPerBottle){
    var numberOfBottles = Math.floor(startingMoney / costPerBottle);
    return numberOfBottles;
}
function calcChange(startingAmount, costPerBottle){
    var change = startingAmount % costPerBottle;
    return change;
}
console.log ("Hello master, here is your "+ getMilk(5, 1.5) + "change.");