var mover=true;
var a = 2;
var x = 12000;

document.getElementById('radio1').checked = true;

document.getElementById('manual-activation').addEventListener('click',(e)=>{
	mover=false;
})


setInterval(	
		function () {
			if(mover){
				document.getElementById('radio' + a).checked = true;
				a++;
				if (a > 3) {
					a = 1
				}
			}
		}, x);