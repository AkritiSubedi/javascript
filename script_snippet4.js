// var tweet = prompt("Compose your tweet:");
// var tweetCount = tweet.length;
// alert("You have written" + tweetCount + "characters, you have" + (140 - tweetCount));
var tweet = prompt("Compose your tweet");
var tweetcount = tweet.slice(0, 140);
alert(tweetcount);