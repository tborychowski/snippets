function formatBytes (num, precision = 2) {
	const UNITS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	const  absNum = Math.abs(num);
	if (absNum < 1) return num + ' ' + UNITS[0];
	const exponent = Math.min(Math.floor(Math.log10(absNum) / 3), UNITS.length - 1);
	return Number((num / 1000 ** exponent).toPrecision(precision)) + ' ' + UNITS[exponent];
}
