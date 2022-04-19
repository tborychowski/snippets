function throttle (fn, wait) {
	let inThrottle, lastFn, lastTime;
	return function () {
		if (!inThrottle) {
			fn.apply(this, arguments);
			lastTime = Date.now();
			inThrottle = true;
		}
		else {
			clearTimeout(lastFn);
			const delay = Math.max(wait - (Date.now() - lastTime), 0);
			lastFn = setTimeout(() => {
				if (Date.now() - lastTime >= wait) {
					fn.apply(this, arguments);
					lastTime = Date.now();
				}
			}, delay);
		}
	};
}




// example - will log the window dimensions at most every 250ms
function onResize (e) {
	console.log(window.innerWidth);
	console.log(window.innerHeight);
}
const throttledResize = throttle(onResize, 1000);

window.addEventListener('resize', throttledResize);
