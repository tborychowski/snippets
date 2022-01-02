// zawija tekst dokola o podana wartosc

function decode (s, x) {
    s += ' ';
	x = x || 3;
    var l = s.length * x, i =- 1, q = '';
    while (s.length < l) s += s;
    while ((i += x) < l) q += s[i];
    return q;
}

function encode (s, x) {
    x = x || 3;
	s += new Array(x).join(' ');
    var l = Math.floor(s.length / x), q = '', i =- 1, j;
    while (++i < l) for (j = x - 1; j >= 0; j--) q += s[l * j + i];
    return q;
}

// test:
var x = 3, S = 'Samochod terenowy', eS = encode(S, x), dS = decode(eS, x);

console.clear();
console.log(S);
console.log(eS);
console.log(dS);
