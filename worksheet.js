var trs = document.querySelectorAll('tr');
var count = 0;
for (var i = 0; i < trs.length; i++) {
  trs[i] = count++;
}
console.log(count);
