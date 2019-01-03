var dwarves = ["Doc", "Dopey", "Bashful", "Grumpy"];
var i = 0;
function dwarfRollCall(dwarves) {
  var countingDwarves = [];
  for (i = 0; i < (dwarves.length/2); i++) {
    countingDwarves.push([i+1] +". " + dwarves[i] + " ");
  }
  return countingDwarves.join("");
}




var planeteerCalls = ["earth", "wind", "fire", "water", "heart"];
function summonCaptainPlanet(planeteerCalls){
  var capCall = [];
  for (var i = 0; i < planeteerCalls.length; i++){
    capCall.push(`${planeteerCalls[i]}`.toUpperCase() + "!")
  }
  return capCall;
}

function longPlaneteerCalls(words) {
  if (words.length > 4) {
    return true;
  }else{
    return false;
  }
}

function findTheCheese (foods) {
    for (let i = 0; i < foods.length; i++) {
    if (foods[i] === 'cheddar') {
      return foods[i]
    }
    else if (foods[i] === 'gouda') {
      return foods[i]
    }
    else if (foods[i] === 'camembert') {
      return foods[i]
    }
  }
  return ('no cheese!');

}


function wordWithB (words) {
  var wordsWithB = [];
  for (var i =0; i< words.length; i++) {
    if (words[i][0] === "B"){
      wordsWithB.push(words[i]);
    }
  }
  return wordsWithB;
}

