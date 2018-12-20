function analyzeText(text) {
  var output = "";
  var cleaned = cleanUp(text);
  output += "Longest word: " + longestWord(cleaned);
  output += " Most common word: " + common(text);
  return output;
}

function cleanUp(str) {
  return cleaned = str.replace(/[^\w\s]/g, '');
}

function longestWord(str) {  
  var words = str.split(" ");
  //sort descending
  words.sort(function (a, b) {
    return b.length - a.length;
  });
  return words[0];
}

function common(str) {
  var words = cleanUp(str).toLowerCase().split(" ");
  var commonWord = "", commonWordCount = 0, count = 0;
  words.forEach(function (word) {
    words.forEach(function (single) {
      if (word = single) count ++;
    });
    // out of inner loop, compare count
    if (count > commonWordCount) {
      commonWordCount = count;
      commonWord = word;
    }
    count = 0;
  });
  return commonWord;
}

var sampleText = "Hey how are you doing? Have you seen Bob lately? Lately I heard  he was doing a new job, but I'm not sure what. Susan was in Europe last week for her job for vacation. Have you talked to her? Lately she's been hard to catch up with. What have y'all been doing lately?";
analyzeText(sampleText);

if (process.env.NODE_ENV !== "test") {
  console.log(analyzeText(sampleText));
}
