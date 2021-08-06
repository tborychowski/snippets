function formatDate (item) {
	const d = new Date(item.createdAt);
	const lang = navigator.languages?.[0] || 'ie-EN';
	const opts = { year: 'numeric', month: 'short', day: 'numeric' };
	item.timestamp = timeAgo(d) || 'on ' + d.toLocaleDateString(lang, opts);
	return item;
}

function timeAgo (date) {
	let seconds = (+new Date() - +date) / 1000;
	const intervals = [
		{ label: 'year', seconds: 31536000 },
		{ label: 'month', seconds: 2592000 },
		{ label: 'day', seconds: 86400 },
		{ label: 'hour', seconds: 3600 },
		{ label: 'minute', seconds: 60 }
	];
	const chunks = [];
	while (seconds > 60) {
		const interval = intervals.find(i => i.seconds < seconds);
		const count = Math.floor(seconds / (interval.seconds || seconds));
		chunks.push(`${count} ${interval.label}${count !== 1 ? 's' : ''}`);
		seconds -= count * (interval.seconds || seconds);
	}
	if (!chunks.length) return 'just now';
	if (chunks.length === 1) return chunks[0] + ' ago';
	return;
}
