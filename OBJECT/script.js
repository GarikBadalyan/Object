let x = 10;
let y = 5;
function aaa() {
  x++;
  let y = 44;
  document.write(x, y);
}
aaa();
document.write(y);
