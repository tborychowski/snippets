console.clear();
var img = new Image();
img.src = 'img/img.png';
img.onload = function () {
	var canvas = document.createElement('canvas'), context = canvas.getContext('2d');
	canvas.width = img.width;
	canvas.height = img.height;
	context.drawImage(img, 0, 0, img.width, img.height);

	console.log(canvas.toDataURL('image/png'));
};