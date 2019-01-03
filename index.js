var dwarves = ["Doc", "Dopey", "Bashful", "Grumpy"];
var i = 0;
function dwarfRollCall(dwarves) {
  var countingDwarves = [];
  for (i = 0; i < dwarves.length; i++) {
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
<<<<<<< HEAD
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
=======
  for (var i = 0; i < foods.length; i++) {
    if (foods[i] ===  'gouda'|| foods[i]===  'cheddar' || foods[i]==='camembert') {
      return foods[i];
    }else{
  return ('no cheese!');
    }
}
>>>>>>> f01e158ef1710ae93b245e1de2ff0ebc8506cba7
}