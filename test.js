var rewire = require("rewire");
var chai = require("chai");
var should = chai.should();

var app = rewire("./index.js");

analyzeText = app.__get__("analyzeText");

describe("analyzeText", function() {
  var sampleText = "Hey how are you doing? Have you seen Bob lately? Lately I heard  he was doing a new job, but I'm not sure what. Susan was in Europe last week for her job for vacation. Have you talked to her? Lately she's been hard to catch up with. What have y'all been doing lately?";

  it("should output the most common word, regardless of capitalization", function(done) {
    analyzeText(sampleText).should.include("Most common word: lately");
    done();
  });

  it("should output the longest word", function(done) {
    analyzeText(sampleText).should.include("Longest word: vacation");
    done();
  });
});
