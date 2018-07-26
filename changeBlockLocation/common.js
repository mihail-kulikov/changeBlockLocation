var change = document.getElementById('change');
var div, status, offW, offH;

function divMouseDown(e) {
	status = 1;
	div = document.createElement('div');
	div.className = "changed";
	div.style.cssText = "position: absolute; background-color: black;"
	div.style.width = 100 + '%';
	div.style.height = 100 + '%';
	change.appendChild(div);
	offW = div.offsetWidth / 2;
	offH = div.offsetHeight / 2;
};

function divMouseMove(e) {
	if (status == 1)
	{
		if (change.style.left && change.style.top) {
			div.style.left = e.clientX - parseInt(change.style.left, 10) - offW + 'px';
			div.style.top = e.clientY - parseInt(change.style.top, 10) - offH + 'px';
		}
		else if (change.style.left) {
			div.style.left = e.clientX - parseInt(change.style.left, 10) - offW + 'px';
			div.style.top = e.clientY - offH + 'px';
		}
		else if (change.style.top) {
			div.style.left = e.clientX - offW + 'px';
			div.style.top = e.clientY - parseInt(change.style.top, 10) - offH + 'px';
		}
		else
		{
			div.style.left = e.clientX - offW + 'px';
			div.style.top = e.clientY - offH + 'px';
		}
	}
};

function divMouseUp(e) {
	if (status == 1)
	{
		change.style.left = e.clientX - offW + 'px';
		change.style.top = e.clientY - offH + 'px';
		change.removeChild(div);
		status = 0;
	}
};

change.addEventListener('mousedown', divMouseDown);
document.body.addEventListener('mousemove', divMouseMove);
document.body.addEventListener('mouseup', divMouseUp);