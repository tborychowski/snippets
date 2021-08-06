function ucfirst (str) {
	return str.toLowerCase().replace(/\b([a-z])/gi, c => c.toUpperCase());
}
