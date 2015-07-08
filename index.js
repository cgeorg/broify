function broify(str) {
    return str && [
            //Special cases where 2 letters really should be turned into br
            [/sco/gi, 'bro'],
            [/who/gi, 'bro'],
            [/kno/gi, 'bro'],
            [/clo/gi, 'bro'],
            [/sho/gi, 'bro'],
            [/ppo/gi, 'bro'],
            [/tho/gi, 'bro'],
            [/smo/gi, 'bro'],
            [/pho/gi, 'bro'],
            [/plo/gi, 'bro'],
            [/glo/gi, 'bro'],
            [/slo/gi, 'bro'],
            [/stro/gi, 'bro'],
            [/cho/gi, 'bro'],
            [/scro/gi, 'bro'],
            [/glo/gi, 'bro'],
            [/pho/gi, 'bro'],
            [/chro/gi, 'bro'],
            [/sno/gi, 'bro'],
            [/blo/gi, 'bro'],
            [/thro/gi, 'bro'],
            [/(b)ry/gi, '$1roy'],
            [/(b)[aeiou]r([^aeiuy]|$)/gi, '$1ro$2'],
            [/[BCDFGHJKLMNPQRSTVWXYZ]ro/g, 'Bro'],
            [/[bcdfghjklmnprstvwxyz]ro/g, 'bro'],
            [/((Br)|[BCDFGHJKLMNPQRSTVWXYZ](o+))/g, function ($0, $1, $2, $3) {
                return $2 ? $0 : ("Br" + $3);
            }],
            [/O/g, 'Bro'],
            [/(([Bb]r)|[bcdfghjklmnprstvwxyz](o+))/g, function ($0, $1, $2, $3) {
                return $2 ? $0 : ("br" + $3);
            }],
            [/(\b)o/g, '$1bro'],
            [/(b)[a-z]?[aeiu]/gi, '$1ro'],
            [/((^|[^t])[aeiu])o/gi, '$1bro']
        ].reduce(function (str, r) {
                return str.replace(r[0], r[1]);
            }, str);
}

module.exports = broify;