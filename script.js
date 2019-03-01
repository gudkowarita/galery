

alert ('hello world');

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


document.onready = function() { s('page2').display='block'}

var current = 'page2';
function show(id) {
o(current).style.display='none';
o(id).style.display = 'block';
current = id;
}

