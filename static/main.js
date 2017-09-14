define(function(require,module) {
	var text = require('changeText');
	var $ = require('jQuery');
	var title = $('#clock');
	for(var i = 0;i<60;i++){
		var span = $('<span></span>');
		span.css({
			transformOrigin:'center 150px',
			transform:'rotate('+6*i+'deg)' 
		});
		i%5==0?span.css({'height':'16px','background':'red'}):span.css('height','14px');
		title.append(span);
	};
	function pointer(name,parent){
		var point = $('<div></div>');
		point.css({
			width:'6px',
			height:'180px',
			background:'red',
			position:'absolute',
			left:'147px',
			top:'20px'

		});
		point.addClass(name);
		point.addClass('point');
		parent.append(point);
	}
	pointer('hour',title);
	pointer('minute',title);
	pointer('second',title);
	
	function move(d){
		var d = new Date();
		$('.second').css({
			transformOrigin:'center 130px',
			transform:'rotate('+6*d.getSeconds()+'deg)'
		});
		$('.minute').css({
			transformOrigin:'center 130px',
			transform:'rotate('+6*d.getMinutes()+'deg)'
		});
		$('.hour').css({
			transformOrigin:'center 130px',
			transform:'rotate('+30*d.getHours()+d.getMinutes()/2+'deg)'
		});
	}
	setInterval(move,1000);
	
})