let x = 0;
function timer() {
  x++;

  document.getElementById("eco").innerHTML = x;

  setTimeout("timer()", 2000);
}
/*function x() {
  document.write("mmmmmm");
}
setTimeout(x, 6000);
 NUYN DZEVI BAYC FUNCTIAIN PARAMETR ENQ POXANCUM

function log(msg) {
  document.write("aaaaaaaaaaaaaaaa", msg);
}
setTimeout(log, 2000, " Hello ");*/