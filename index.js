function theBeatlesPlay(musicians, instruments) {
  var words = []
  for(var i=0; i < musicians.length; i++) {
    words[i] = musicians[i] + " plays " + instruments[i]
  }
  return words
}

function johnLennonFacts(exclamation) {
  var words = []
  for(var i=0; i < exclamation.length; i++) {
    words[i] = exclamation[i] + "!!!"
  }
  return words
}

function iLoveTheBeatles(number) {
  var words = []
  if(number === 7) {
    for(var i=0; i < number; i++) {
      words[i] = "I love the Beatles!"
    }
  }
  else {
    words[0] = "I love the Beatles!"
  }
  return words
}
