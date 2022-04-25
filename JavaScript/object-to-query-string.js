function objectToQueryString (obj) {
	if (!obj) return '';
	const reducer = (queryString, [key, val]) => {
		const symbol = queryString.length === 0 ? '?' : '&';
		if (typeof val === 'string') queryString += symbol + key + '=' + val;
		return queryString;
	};
	return Object.entries(obj).reduce(reducer, '');
}
