//Returns ISO 8601 week number and year
Date.prototype.getFullWeek = function(){
    var jan1, w, d = new Date(this);
    d.setDate(d.getDate()+4-(d.getDay()||7));		// Set to nearest Thursday: current date + 4 - current day number, make Sunday's day number 7
    jan1 = new Date(d.getFullYear(),0,1);		// Get first day of year
    w = Math.ceil((((d-jan1)/86400000)+1)/7);		// Calculate full weeks to nearest Thursday
    return {y: d.getFullYear(), w: w };
};
//Returns ISO 8601 week number
Date.prototype.getWeek = function(){ 
	return this.getFullWeek().w; 
};
var getWeeksInYear = function(y){ 
	return new Date(y,11,28).getFullWeek().w; 
};