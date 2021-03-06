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
    ['Barack Obama', 'Brorack Brobroma', 'brotus'],
    ['yoko ono', 'brobro brobro', '5th wheel'],
    ['who', 'bro', 'it is obvious who'],
    ['know me now', 'brow me brow', 'cusbromer engagement'],
    ['heroku', 'hebroku', 'broud computing'],
    ['cloud', 'broud', 'broud computing redux'],
    ['Kobe Bryant', 'Brobro Broyant', 'la bros'],
    ['Joe DiMaggio', 'Broe DiMaggibro', 'Broltin\' Bro'],
    ['iota', 'ibrota', 'a lil bro'],
    ['support', 'subrort', 'give me a hand bro'],
    ['she sells sea shells on the sea shore', 'she sells sea shells bron the sea brore', 'she is a bro'],
    ['And so, my fellow Americans, ask not what your country can do for you; ask what you can do for your country.',
        'And bro, my felbrow Americans, ask brot what brour brountry can bro bror brou; ask what brou can bro bror brour brountry.',
        'brofk'],
    ['Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.',
        'Brour brore and seven years abro brour fathers brought brorth bron this brontinent a new nation, bronceived in libroty, and dedicated bro the brobrosition that all men are created equal.',
        'abroham'],
    ['though', 'brough', 'th is special'],
    ['Pittsburgh', 'Pittsbrogh', 'bros of steel'],
    ['labor', 'labro', 'hard workin bros'],
    ['laborer', 'labrorer', 'still workin'],
    ['CFO', 'CFBro', 'bros makin that scratch'],
    ['CEO', 'CEBro', 'bros in charge'],
    ['COO', 'CBroBro', 'smooth broperator'],
    ['smooth operator', 'brooth broperabror', 'smooth broperator 2'],
    ['bury me in smoke', 'brory me in broke', 'brown'],
    ['phone', 'brone', 'issue bro 1'],
    ['plop', 'brop', 'issue bro 1'],
    ['gloss', 'bross', 'issue bro 1'],
    ['slop', 'brop', 'issue bro 1'],
    ['strong', 'brong', 'issue bro 1'],
    ['chosen', 'brosen', 'issue bro 1'],
    ['scrounge', 'brounge', 'issue bro 1'],
    ['glock', 'brock', 'issue bro 1'],
    ['phone', 'brone', 'issue bro 1'],
    ['chrome', 'brome', 'issue bro 1'],
    ['github.io', 'github.ibro', 'issue bro 1'],
    ['snowball', 'browbroll', 'issue bro 1'],
    ['blow', 'brow', 'issue bro 1'],
    ['throw', 'brow', 'issue bro 1'],
    ['paddyb', 'paddybro', 'issue bro 5'],
    ['two of a kind', 'bro brof a kind', 'issue bro 6'],
    ['spotify', 'brotify', 'issue bro 7'],
    ['kebab', 'kebrob', 'paddyb should be whitelisted']
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
