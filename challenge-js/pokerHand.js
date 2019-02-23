class PokerHand {
  constructor(hand) {
    this.hand = hand;
  }

  getRank() {
    // Implement poker hand ranking
    var input = this.hand;
    var myhand = [];
    myhand = input.split(/\s/);
    var suits = [];
    var values = [];
    for(var i = 0; i < myhand.length; i++) {
      if(myhand[i].charAt(1) == 0) {
        values.push(10);
        suits.push(myhand[i].charAt(2));
      }
      else {
        values.push(myhand[i].charAt(0));
        switch(values[i]) {
          case "J":
            values[i] = 11;
            break;
          case "Q":
            values[i] = 12;
            break;
          case "K":
            values[i] = 13;
            break;
          case "A":
            values[i] = 14;
            break;
        }
        suits.push(myhand[i].charAt(1));
      }
    }
    //order hand using bubblesort
    var len = values.length;
    for(var i = len-1; i >= 0; i--) {
      for(var j = 1; j <= i; j++) {
        if(values[j-1] > values[j]) {
          var tempVal = values[j-1];
          var tempSuit = suits[j-1];
          values[j-1] = values[j];
          values[j] = tempVal;
          suits[j-1] = suits[j];
          suits[j] = tempSuit;
        }
      }
    }

    var result = checkHand(values, suits);
    return result;
  }
}

function checkHand(values, suits) {
  var result = "";

 // for(var i = 0; i < 5; i++) {
    switch(duplicateValues(values)) {
      case "2":
        result = "One Pair";
        break;
      case "22":
        result = "Two Pair";
        break;
      case "3":
        result = "3 of a Kind";
        break;
      case "23":
      case "32":
        result = "Full House";
        break;
      case "4":
        result = "4 of a Kind";
    }
    if(isStraight(values)) {
      result = "Straight";
    }
    if(isFlush(suits)) {
      if(isStraight(values)) {
        if(getLowest(values) == 10) {
          result = "Royal Flush";
        }
        else {
          result = "Straight Flush";
        }
      }
      else {
        result = "Flush";
      }
    }
    if(!result) {
      result = "High Card";
    }

  //}
  return result;
}

function duplicateValues(values) {
  var occurrencesFound = [];
  var result = "";
  for(var i = 0; i < values.length; i++) {
    var occurrences = occurrencesOf(values, values[i]);
    if((occurrences > 1) && (occurrencesFound.indexOf(values[i]) == -1)) {
      result += occurrences;
      occurrencesFound.push(values[i]);
    }
  }
  return result;
}

function isFlush(suits) {
  for(var i = 0; i < 4; i++) {
    if(suits[i] != suits[i+1]) {
      return false;
    }
  }
  return true;
}

function isStraight(values) {
  var lowest = getLowest(values);
  var result = true;
  for(var i = 0; i < 5; i++) {
    if(values[i] != lowest + i) {
      result = false;
    }
    // if(occurrencesOf(values, (lowest + i)) != 1) {
    //   result = false;
    // }
  }
  if(getHighest(values) == 14 && !result) {
    var newvalues = switchAceValue(values);
    var newLowest = getLowest(newvalues);
    result = true;
    for(var i = 0; i < 5; i++) {
      if(values[i] != newLowest + i) {
        result = false;
      }
    }
  }
  return result;
}

function getHighest(values) {
  var max = 0;
  for(var i = 0; i < values.length; i++) {
    max = Math.max(max, values[i]);
  }
  return max;
}

function getLowest(values) {
  var min = 14;
  for(var i = 0; i < values.length; i++) {
    min = Math.min(min, values[i]);
  }
  return min;
}

function occurrencesOf(values, n) {
  var count = 0;
  var index = 0;
  do {
      index = values.indexOf(n, index) + 1;
      if(index == 0) {
        break;
      }
      else {
        count ++;
      }
    } while(index < values.length);
  return count;
}

function switchAceValue(values) {
  for(var i = 0; i < values.length; i++) {
    if(values[i] == 14) {
      values[i] = 1;
    }
  }
  return sortValues(values);
}

function sortValues(values) {
  var len = values.length;
  for(var i = len-1; i >= 0; i--) {
    for(var j = 1; j <= i; j++) {
      if(values[j-1] > values[j]) {
        var tempVal = values[j-1];
        values[j-1] = values[j];
        values[j] = tempVal;
      }
    }
  }
  return values;
}

module.exports = PokerHand;
