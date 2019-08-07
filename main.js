var input;
var c1;
var c2;
var c3;
var c4;


$('#add').keypress(function(event){
	var keycode = (event.keyCode ? event.keyCode : event.which);
	if(keycode == '13'){
		input = $('#add').val();
		setColors();
		c1 = pSBC(.05,input);
		c2 = pSBC(.01,input);
		c3 = pSBC(-.25,input);
		c4 = pSBC(-.5,input);
	}
});

function setColors(){
	$('#one').css('background-color', c1);
	$('#two').css('background-color', c2);
	$('#three').css('background-color', input);
	$('#four').css('background-color', c3);
	$('#five').css('background-color', c4);
	$(".T").css('display', 'block')
	$("#oneT").text(c1);
	$("#twoT").text(c2);
	$("#threeT").text(input);
	$("#fourT").text(c3);
	$("#fiveT").text(c4);
}