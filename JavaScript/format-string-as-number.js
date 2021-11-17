/**
 * Formats numbers (or string numbers)
 * @param number	int or int-parsable string
 * @param prec		decimal precision
 * @returns			formatted number as string
 */
function numberFormat (number, prec) {
	var ext, name, numS, rgx = /(\d+)(\d{3})/;
	number = number || '0';
	prec = prec || 0;
	numS = ('' + number).split('.');
	name = numS[0];
	ext = numS[1];
	if (prec > 0) ext = ((ext || '') + new Array(prec + 1).join('0')).substr(0, prec);
	else ext = '';
	while (rgx.test(name)) name = name.replace(rgx, '$1' + ',' + '$2');
	return name + (ext ? '.' + ext : '');
}
