
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alpha = document.getElementById('alpha');

var stackOne = "";
var stackTwo = "";

for (var i = 0; i < alphabet.length; i++) {
  stackOne = stackOne + alphabet[i];

  alpha.innerHTML += "<div>" + stackOne + "</div>" ;
}

for (var i = 0; i < alphabet.length; i++) {

  if (i%5 === 4) {
    stackTwo = stackTwo + alphabet[i] + " ";
  } else {
    stackTwo = stackTwo + alphabet[i];

    alpha.innerHTML += "<div>" + stackTwo + "</div>";
  }
}

