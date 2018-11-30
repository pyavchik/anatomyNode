var mathLib = require('./lib/math');
var jokeLib = require('./lib/jokes');

var app {};

app.config = {
    'timeBetweenJokes' : 1000
};


app.printJoke = function () {
    var allJokes = jokeLib.allJokes();

    var numberOfJokes = allJokes.length;

    var randoomNumber = mathLib.getRandomNumber(1, numberOfJokes);

    var selectedJoke = allJokes[randoomNumber - 1];
}
