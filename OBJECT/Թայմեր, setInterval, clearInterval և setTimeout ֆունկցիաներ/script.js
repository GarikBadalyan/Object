let x = 0;
function gum() {
  x++;
  alert("ancav mek varkyan" + " " + x);
  if (x == 5) clearInterval(a);
}
let a = setInterval("gum()", 2000);
