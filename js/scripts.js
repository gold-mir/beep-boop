var name = "Dave";

function beepBoop(number){
  var result = {value: number, output: number};
  if(number % 3 === 0 && number !== 0){
    result.output = "I'm sorry " + name + ", I'm afraid I can't do that.";
  } else if (number.toString().match(/1/) !== null){
    if(number % 2 === 0){
      result.output = "BOOP!!!";
    } else {
      result.output = "Boop!";

    }
  } else if (number.toString().match(/0/) !== null){
    result.output = "Beep!";
  } else {
    result.output = number.toString();
  }
  return result;
}

function beepBoopRange(number){
  var output = [];
  for(let current = 0; current <= number; current++){
    output.push(beepBoop(current));
  }
  return output;
}

$(document).ready(function(){
  $("#number-input").submit(function(event){
    event.preventDefault();
    var number = parseInt($("#number-input input[name=number-input]").val());
    $("#number-input input[name=number-input]").val("");
    if(isNaN(number)){
      alert("Please enter a valid number greater than zero.");
      return;
    }
    var userName = $("#number-input input[name=name-input]").val();
    if(userName !== ""){
      name = userName;
    } else {
      name = "Dave";
    }

    var result = beepBoopRange(number);

    if($("#number-input input[name=reversed-check]").is(":checked")){
      result.reverse();
    }

    $("#output h3").text("Your number: " + number);
    var output = $("#output ul");
    output.text("");
    result.forEach(function(item){
      output.append("<li>" + item.value + ": " + item.output + "</li>");
    });
  });
});
