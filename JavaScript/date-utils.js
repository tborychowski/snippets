/* DATE FUNCTIONS */
Date.months = [
    { shortName: 'jan', days: 31, name: 'January' },
    { shortName: 'feb', days: 28, name: 'February' },
    { shortName: 'mar', days: 31, name: 'March' },
    { shortName: 'apr', days: 30, name: 'April' },
    { shortName: 'may', days: 31, name: 'May' },
    { shortName: 'jun', days: 30, name: 'June' },
    { shortName: 'jul', days: 31, name: 'July' },
    { shortName: 'aug', days: 31, name: 'August' },
    { shortName: 'sep', days: 30, name: 'September' },
    { shortName: 'oct', days: 31, name: 'October' },
    { shortName: 'nov', days: 30, name: 'November' },
    { shortName: 'dec', days: 31, name: 'December' }
];

// add n days to a date
Date.prototype.addDays = function (n) {
    var d = new Date(this);
    d.setDate(this.getDate() + (n || 0));
    return d;
};

// add n months to a date
Date.prototype.addMonths = function (n) {
    var d = new Date(this);
    d.setMonth(d.getMonth() + (n || 0), 1);
    return d;
};



//Returns ISO 8601 week number and year
Date.prototype.getFullWeek = function () {
    var jan1, w, d = new Date(this);

    // Set to nearest Thursday: current date + 4 - current day number, make Sunday's day number 7
    d.setDate(d.getDate() + 4 - (d.getDay() || 7));

    // Get first day of year
    jan1 = new Date(d.getFullYear(), 0, 1);

    // Calculate full weeks to nearest Thursday
    w = Math.ceil((((d - jan1) / 86400000) + 1) / 7);

    return { y: d.getFullYear(), w: w };
};

//Returns ISO 8601 week number
Date.prototype.getWeek = function () {
    return this.getFullWeek().w;
};

function getWeeksInYear (y) {
    return new Date(y, 11, 28).getFullWeek().w;
}

/**
 * Calculates the date for a Monday of the given week and year
 */
function getDateFromWeek (y, w) {
    var dayN = 0,
        j10 = new Date(y,0,10),
        j4 = new Date(y,0,4),
        mon1 = +j4 - j10.getDay() * 86400000;

    return new Date(mon1 + ((w - 1) * 7 + dayN) * 86400000);
}

function getStrDateFromWeek (y, w) {
    var d = getDateFromWeek(y,w);
    return d.getDate() + ' ' + Date.months[d.getMonth()].shortName;
}

function getShortStrDateFromWeek (y, w) {
    var d = getDateFromWeek(y,w);
    return d.getDate() + '/' + ('0' + (d.getMonth() + 1)).slice(-2);
}



/* unix time is calculated in miliseconds */
Date.prototype.toUnix = function () { return +this; };

Date.prototype.toStr = function (f) {
	var str,
        Y = this.getFullYear(),
        M=this.getMonth(),
        D=this.getDate();

	if (f === 'my') str = Date.months[M].shortName + ' ' + Y;                         // jan 2010
	else if (f === 'd/m/y') str = D + '/' + (M + 1) + '/' + Y;                        // 21/12/2010
	else str = [ Y, ('0' + (M + 1)).substr(-2), ('0' + D).substr(-2) ].join('-');     // 2010-12-21
	return str;
};

// parse string date: 2011-01-31
String.prototype.toDate = function () {
    var a = this.split('-');
    return new Date(a[0], a[1]-1, a[2]);
};

// parse string date: 31/01/2011
String.prototype.toDate2 = function () {
    var a = this.split('/');
    return new Date(a[2], a[1]-1, a[0]);
};

String.prototype.toUnix = function () { return +this.toDate(); };
Number.prototype.toDate = function () { return new Date(this); };
Number.prototype.toDateStr = function () { return this.toDate().toStr(); };

// substract dates in format: 2010-02-15 and return difference in days
function diffDate(d1,d2) {
    if(!d1 || !d2) return 0;
    return Math.round((d1.toUnix() - d2.toUnix()) / 86400000);
}
