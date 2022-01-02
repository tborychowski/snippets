function getParams () {
	var params = {};
	window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, (m, key, value) => params[key] = value);
    return params;
}
