function emphasize (str, q) {
	if (!q) return str;
	str = '' + str;
	let idx = 0;
	let low = str.toLowerCase();

	// string includes the whole query block
	if (low.includes(q)) return str.replace(new RegExp(`(${q})`, 'ig'), '<b>$1</b>');

	// string includes the scattered query
	let stra = str.split('');
	q = q.toLowerCase();
	for (let l of q) {
		idx = low.indexOf(l, idx);
		let letter = stra[idx];
		if (letter) {
			stra.splice(idx, 1, `<b>${letter}</b>`);
			idx += 1;
		}
	}
	return stra.join('');
}
