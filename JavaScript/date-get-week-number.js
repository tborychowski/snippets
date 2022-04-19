//Returns ISO 8601 week number
function getFullWeek (d) {
	d.setDate(d.getDate() + 4 - (d.getDay() || 7));			// Set to nearest Thursday: current date + 4 - current day number, make Sunday's day number 7
	const jan1 = new Date(d.getFullYear(), 0, 1);			// Get first day of year
	return Math.ceil((((d - jan1) / 86400000) + 1) / 7);	// Calculate full weeks to nearest Thursday
}
