function valid(form) {
  let x = form.name.value;
  if (x == "" || x == " ") alert("greq anun@");
  let y = form.password.value;
  if (y == "") alert("greq password@");
  let z = form.repassword.value;
  if (z != y) alert("repassword@ chi ham@nknum");
  let k = form.hh.value;
  if (k == "") alert("@ntrel radioi dashteric mek@");
  else window.location = "https://www.facebook.com";
}
