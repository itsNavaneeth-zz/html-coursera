
(function () {

var names = ["Yaakov", "Navaneeth", "Steve Rogers", "Tony Stark", "Bruce Banner", "Natasha Romanoff", "Ross", "Rachel", "Joey", "Chandler"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker(names[i]);
  }
  else {
    helloSpeaker(names[i]);
  }
}

})();



