
$(document).ready(function() {
	//------border bottom when choose------
	$(".topItem").click(function() {
		$(this).addClass('iamselected');
		$(".topItem").not(this).removeClass('iamselected')
	});
	//-------change color ---------
	setInterval(function(){ 
		for(var i = 0 ; i<32 ; i++) {
			var value = $('#' + i).text();
			//console.log(value + '------' +typeof(value));
			var vaFloat = parseFloat(value);
			if(vaFloat > 0) {
				$('#' + i).addClass('colorBlue');
				$('#' + i).removeClass('colorRed');
				$('#' + i).next().addClass('colorBlue');
				$('#' + i).next().removeClass('colorRed');
			}
			else {
				$('#' + i).addClass('colorRed');
				$('#' + i).removeClass('colorBlue');
				$('#' + i).next().addClass('colorRed');
				$('#' + i).next().removeClass('colorBlue');
			}
		}
	},0);
});
