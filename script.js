

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


	var z = 5;				//there's code for counting likes
	o('count_likes1').innerHTML = z;
	o('like1').onclick = function(object)
		{z+= 1;
		o('count_likes1').innerHTML = z;}
	var y = 5;				
	o('count_likes2').innerHTML = y;
	o('like2').onclick = function(object)
		{y+= 1;
		o('count_likes2').innerHTML = y;}
	var x = 5;				
	o('count_likes3').innerHTML = x;
	o('like3').onclick = function(object)
		{x+= 1;
		o('count_likes3').innerHTML = x;}
	var w = 5;				
	o('count_likes4').innerHTML = w;
	o('like4').onclick = function(object)
		{w+= 1;
		o('count_likes4').innerHTML = w;}
	var v = 5;				
	o('count_likes5').innerHTML = v;
	o('like5').onclick = function(object)
		{v+= 1;
		o('count_likes5').innerHTML = v;}
	var t = 5;				
	o('count_likes6').innerHTML = t;
	o('like6').onclick = function(object)
		{t+= 1;
		o('count_likes6').innerHTML = t;}
	var k = 5;				
	o('count_likes7').innerHTML = k;
	o('like7').onclick = function(object)
		{k+= 1;
		o('count_likes7').innerHTML = k;}


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
$('#num1, #num2, #num3, #num4').click(function(){$('#num1, #num2, #num3, #num4').removeClass('current_page'); $(this).addClass('current_page')}); //allows to change text without reload

$('#menu').click(function(){$('.list').toggle()});  //menu

$('#more_in_header, #more_proj1, #more_proj2, #more_proj3, #more_proj4, #blog1, #blog2, #blog3, #blog4')  //these are links that open modal
		    .click(function(){$('.modal').css('display','block');   //opens the modal
				      $('div:not(".modal")').css('opacity','0.6');       //changes css for better view
				      $('.general_heading, .highlight').css('opacity','0.1')});

$('#more_in_header, #more_proj1, #more_proj2, #more_proj3, #more_proj4, #blog1, #blog2, #blog3, #blog4')  //these are links that open modal
		    .mouseover(function(){$(this).css('opacity','0.8')})
		    .mouseout(function(){$(this).css('opacity','1')});//this code makes user pay attention to links


//the idea of the block of code below is to change display(none) of all modal's contents except chosen one

$('#more_in_header').click(function(){$('#content1').css('display','block'); //changes content in modal window
				$('#content2, #content3, #content4, #content5, #content6, #content7')
					.css('display','none')});
$('#more_proj1').click(function(){$('#content2').css('display','block'); 
				$('#content1, #content3, #content4, #content5, #content6, #content7')
					.css('display','none')});
$('#more_proj2').click(function(){$('#content3').css('display','block'); 
				$('#content1, #content2, #content4, #content5, #content6, #content7')
					.css('display','none')});
$('#more_proj3').click(function(){$('#content4').css('display','block');
				$('#content1, #content3, #content2, #content5, #content6, #content7')
					.css('display','none')});
$('#more_proj4').click(function(){$('#content5').css('display','block'); 
				$('#content1, #content3, #content4, #content2, #content6, #content7')
					.css('display','none')});
$('#blog1, #blog2').click(function(){$('#content6').css('display','block'); 
				$('#content1, #content3, #content4, #content5, #content2, #content7')
					.css('display','none')});
$('#blog3, #blog4').click(function(){$('#content7').css('display','block'); 
				$('#content1, #content3, #content4, #content5, #content6, #content2')
					.css('display','none')});


//$('.modal:not(:has(.modal_content))').click(function(){$('.modal').css('display','none');  //there's must be tryings for not closing the modal on click on the picture of heart


$('.modal').click(function(){$('.modal').css('display','none');
			     $('div:not(".modal")').css('opacity','1');
			     $('.general_heading, .highlight').css('opacity','0.9')});  //closes modal and leaving the rest to the previous condition

$('.like').mouseover(function(){$(this).html(this.src="pics/hover_like.png")});
$('.like').mouseout(function(){$(this).html(this.src="pics/like.png")});
$('.like').click(function(){$(this).html(this.src="pics/active_like.png");
				$(this).mouseout(function(){$(this).html(this.src="pics/active_like.png")});  //code for changing color of heart
			        alert('Спасибо за лайк :3')}); //modal closes if user clicks on like, so it is an attempt to say thanks and not to close modal at this moment

});

//$.noConflict();
//место для lightBox из другой библиотеки
