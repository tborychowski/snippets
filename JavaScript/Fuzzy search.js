function fuzzy(hay = '', s = '') {
	hay = hay.toLowerCase();
    s = s.toLowerCase();
	let n = -1;
	for (let l of s) if (!~(n = hay.indexOf(l, n + 1))) return false;
	return true;
}

// fuzzy('a haystack with a needle', 'hay sucks');   // false
// fuzzy('a haystack with a needle', 'sack hand');   // true
