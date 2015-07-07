var test = require('tape-catch');
var broify = require('./index');

var testCases = [
    ['Hello World!', 'Helbro Brorld!', 'greet a bro'],
    ['origami', 'brorigami', 'leading o'],
    ['innovation', 'inbrovation', 'middle o'],
    ['keno', 'kebro', 'trailing o'],
    ['placebo', 'placebro', 'insert r between b and o'],
    ['bonehead', 'bronehead', 'insert r between b and o'],
    ['bro', 'bro', 'do not hassle a bro'],
    ['brown', 'brown', 'do not hassle a bro'],
    ['tomato', 'bromabro', 'you say tomahto'],
    ['inebriated', 'inebroated', 'br should always end in o'],
    ['booed', 'brooed', 'do not double bro a double o'],
    ['boast', 'broast', 'roastin toastin boastin'],
    ['roast', 'broast', 'roastin toastin boastin'],
    ['toast', 'broast', 'roastin toastin boastin'],
    ['Barack Obama', 'Barack Brobama', 'brotus'],
    ['yoko ono', 'brobro brobro', '5th wheel'],
    ['who', 'bro', 'it is obvious who'],
    ['know me now', 'brow me brow', 'cusbromer engagement'],
    ['heroku', 'hebroku', 'broud computing'],
    ['cloud', 'broud', 'broud computing redux'],
    ['she sells sea shells on the sea shore', 'she sells sea shells bron the sea brore', 'she is a bro'],
    ['And so, my fellow Americans, ask not what your country can do for you; ask what you can do for your country.',
        'And bro, my felbrow Americans, ask brot what brour brountry can bro bror brou; ask what brou can bro bror brour brountry.',
        'brofk'],
    ['Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.',
        'Brour brore and seven years abro brour fathers brought brorth bron this brontinent a new nation, bronceived in liberty, and dedicated bro the brobrosition that all men are created equal.',
        'abroham']
];

testCases.forEach(function (testCase) {
    test(testCase[2] + ': "' + testCase[0] + '" -> "' + testCase[1] + '"', function (t) {
        t.plan(1);
        t.equals(broify(testCase[0]), testCase[1]);
    });
    test('Double broification of "' + testCase[2] + '" should not over-bro', function (t) {
        t.plan(1);
        t.equals(broify(broify(testCase[0])), broify(testCase[0]));
    });
});
