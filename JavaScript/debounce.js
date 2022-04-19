// from: https://github.com/30-seconds/30-seconds-of-code/blob/master/snippets/debounce.md

const debounce = (fn, ms = 0) => {
	let timeoutId;
	return function (...args) {
		if (timeoutId) clearTimeout(timeoutId);
		timeoutId = setTimeout(() => fn.apply(this, args), ms);
	};
};



// example - will log the window dimensions at most every 250ms
window.addEventListener('resize', debounce(() => {
	console.log(window.innerWidth);
	console.log(window.innerHeight);
}, 250));
