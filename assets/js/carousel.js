var a = 2;
setInterval(
	function () {
		document.getElementById('radio' + a).checked = true;
		a++;
		if (a > 3) {
			a = 1
		}
	}, 12000);