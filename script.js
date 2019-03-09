

function o(i) {
return typeof i == 'object' ? i : document.getElementById(i);
}
 function s(i) {
return o(i).style
}
function c(name)
{
var elements = document.getElementByTagName('*');
var objects = [];

for (var i = 0; i<elements.length; ++i)
if (elements[i].className == name)
objects.push(elements[i])

return objects
}


document.onready = function() { 
	s('page2').display='block';
	s('name_div').display='block'; 
	s('email_div').display='none';
	
	var z = 5;				//there's code for likes
	o('count_likes1').innerHTML = z;
	o('like1').onclick = function(object)
		{z+= 1;
		o('count_likes1').innerHTML = z;}


}   //end of function for document ready

var current = 'page2';
function show(id) {
o(current).style.display='none';
o(id).style.display = 'block';
current = id;
}

var thisForm = 'name_div';
function next(id) {
	o(thisForm).style.display='none';
	o(id).style.display = 'block';
}

function validate(form) {
	fail = validateName (form.name.value)
	fail += validateEmail (form.email.value)
	if (fail == "") return true
	else { alert(fail); return false }
}

function validateName(field) {
	return (field =="") ? "Name wasnt entered" : ""
}

function validateEmail(field) {
	if (field == "") return "Email wasnt entered"
	else if (!((field.indexOf(".")>0) &&
		   (field.indexOf("@")>0)) ||
		   /[^a-zA-Z0-9.@_-]/.test(field))
		return "Email is in wrong format"
	return ""
} 




$(document).ready(function(){

$('li, li>a').mouseover(function(){$(this).css("opacity","0.67")})
	     .mouseout(function(){$(this).css("opacity","1")});
$('#num1, #num2, #num3, #num4').click(function(){$('#num1, #num2, #num3, #num4').removeClass('current_page'); $(this).addClass('current_page')});
$('#menu').click(function(){$('.list').toggle()});
$('#more_in_header').click(function(){$('.modal').css('display','block');
				      $('div:not(".modal")').css('opacity','0.6');
				      $('.general_heading, .highlight').css('opacity','0.1')});
//$('.modal:not(:has(.modal_content))').click(function(){$('.modal').css('display','none');
$('.modal').click(function clo(){$('.modal').css('display','none');
			     $('div:not(".modal")').css('opacity','1');
			     $('.general_heading, .highlight').css('opacity','0.9')});
$('.like').click(function(){$('.modal').stop(clo())});
//$('div:not()').click(function(){$('.modal').css('display','none');
//			     $('div:not(".modal")').css('opacity','1');
//			     $('.general_heading, .highlight').css('opacity','0.9')});
$('.like').mouseover(function(){$(this).html(this.src="pics/hover_like.png")});
$('.like').mouseout(function(){$(this).html(this.src="pics/like.png")});
$('.like').click(function(){$(this).html(this.src="pics/active_like.png");
				$(this).mouseout(function(){$(this).html(this.src="pics/active_like.png")});
			    alert('Спасибо за лайк :3')});

});

//$.noConflict();
//место для lightBox из другой библиотеки
