// classic
const ucfirst = (str) => str.toLowerCase().replace(/\b([a-z])/gi, c => c.toUpperCase());

// modern
const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('');
