var h1 = document.querySelector('h1');

// h1.addEventListener('click', function() {
//   alert('h1 was clicked!');
// });

// h1.addEventListener('click', function() {
//   h1.style.background = 'orange';
// });

// document.querySelector('ul').addEventListener('click', function() {
//   console.log('YOU CLICKED THE UL!');
// });

var lis = document.querySelectorAll('li');

console.log(lis);

for (var i = 0; i < lis.length; i++) {
  lis[i].addEventListener('click', changePink);
}

// Change Color to Pink Function
function changePink() {
  this.style.color = 'pink';
}
