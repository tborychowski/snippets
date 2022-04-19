function prefersDarkColorScheme () {
	return window && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}
