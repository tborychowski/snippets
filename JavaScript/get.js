function get (obj, path) {
	return path
		.split('.')
		.reduce((xs, x) => (xs && xs[x] !== null && xs[x] !== undefined ? xs[x] : null), obj);
}



// Example
const data = {
	foo: {
		foz: [1, 2, 3],
		bar: { baz: ['a', 'b', 'c'] }
	}
};
get(data, 'foo.foz.2'); // get 3




// Another solution
function get (from, path) {
	return path
		.replace(/\[([^\[\]]*)\]/g, '.$1.')
		.split('.')
		.filter(t => t !== '')
		.reduce((prev, cur) => prev && prev[cur], from));
}


// example
const obj = {
	selector: { to: { val: 'val to select' } },
	target: [1, 2, { a: 'test' }],
};
get(obj, 'selector.to.val');	// 'val to select'
get(obj, 'target[2].a');		// 'test'
