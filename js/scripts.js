function beepBoop(number){
  if(number % 3 === 0 && number !== 0){
    return "I'm sorry Dave, I'm afraid I can't do that.";
  } else if (number.toString().match(/1/) !== null){
    return "Boop!";
  } else if (number.toString().match(/0/) !== null){
    return "Beep!";
  } else {
    return number.toString();
  }
}

// function beepBoopRange(number){
//   for(let current = 0; current <= number; current++){
//
//   }
// }

$(document).ready(function(){
  //do stuff
});
