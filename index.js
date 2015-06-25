function broify(str) {
    return str && [
            //Special cases where 2 letters really should be turned into br
            [/sco/gi, 'bro'],
            [/[A-Z]ro/g, 'Bro'],
            [/[a-z]ro/g, 'bro'],
            [/((Br)|(^|.)[BCDFGHJKLMNPQRSTVWXYZ](o+))/g, function ($0, $1, $2, $3, $4) {
                return $2 ? $0 : ($3 + "Br" + $4);
            }],
            [/(([Bb]r)|(^|.)[bcdfghjklmnprstvwxyz](o+))/g, function ($0, $1, $2, $3, $4) {
                return $2 ? $0 : ($3 + "br" + $4);
            }],
            [/(\b)o/g, '$1bro'],
            [/(\b)O/g, '$1Bro'],
            [/(br)[aeiu]/gi, '$1o']
        ].reduce(function (str, r) {
                return str.replace(r[0], r[1]);
            }, str);
}

module.exports = broify;