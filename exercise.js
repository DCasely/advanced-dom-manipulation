// var button = document.querySelector('button');

// button.addEventListener('click', function() {
//   if (document.body.style.background !== 'purple') {
//     document.body.style.background = 'purple';
//   } else {
//     document.body.style.background = 'white';
//   }
// });

// COLT'S SOLUTION

// var button = document.querySelector('button');
// var isPurple = false;
// button.addEventListener('click', function() {
//   if (isPurple) {
//     document.body.style.background = 'white';
//   } else {
//     document.body.style.background = 'purple';
//   }
//   isPurple = !isPurple;
// });

// COLT'S SOLUTION PART 2

var button = document.querySelector('button');
var isPurple = false;
button.addEventListener('click', function() {
  document.body.classList.toggle('purple');
});
