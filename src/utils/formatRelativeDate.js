const formatRelativeDate = (date) => {
	let diff = new Date() - date; // the difference in milliseconds
	console.log("date", diff);
	if (diff < 1000) {
		// less than 1 second
		return "right now";
	}

	let sec = Math.floor(diff / 1000); // convert diff to seconds

	if (sec < 60) {
		return sec + " sec. ago";
	}

	let min = Math.floor(diff / 60000); // convert diff to minutes
	if (min < 60) {
		return min + " min. ago";
	}

	let hour = Math.floor(min / 60); // convert to hours
	if (hour < 25) {
		return hour + " hr(s). ago";
	}

	let day = Math.floor(hour / 24);
	if (day < 8) {
		return day + " day(s) ago";
	}

	// format the date
	// add leading zeroes to single-digit day/month/hours/minutes
	let d = date;
	d = [
		"0" + d.getDate(),
		"0" + (d.getMonth() + 1),
		"" + d.getFullYear(),
		"0" + d.getHours(),
		"0" + d.getMinutes(),
	].map((component) => component.slice(-2)); // take last 2 digits of every component

	// join the components into date
	return d.slice(0, 3).join(".") + " " + d.slice(3).join(":");
};

export default formatRelativeDate;
