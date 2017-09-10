function theBeatlesPlay(musicians, instruments) {
  var words = []
  for(var i=0; i < musicians.length; i++) {
    words[i] = musicians[i] + " plays " + instruments[i]
  }
  return words
}
