function shout(string) {
    return string.toUpperCase();
}
//whisper function
function whisper(string){
    return string.toLowerCase();
}
//logshout string
 function logShout(string){
    console.log(string.toUpperCase());
 }

 //logwhsiper to lower case
 function logWhisper(string){
    console.log(string.toLowerCase());

 }
 //confirming of cases
 function sayHiToHeadphonedRoommate (string) {
    var cantUnswer = "I can't hear you!";
    var yesUnswer = "YES INDEED!";
    var loveUnswer = "I would love to!";
    if (string.toLowerCase(string) === string) {
      return cantUnswer;
    }
    else if (string.toUpperCase(string) === string) {
      return yesUnswer;
    }
    else if (string === "Let's have dinner together!") {
      return loveUnswer
    }
  }