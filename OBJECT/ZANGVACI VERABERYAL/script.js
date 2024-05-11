`let a = [1, 2, 3, 4, 5, 6, 4, 4, 44, 5, 66, 7];
document.write(a);
document.write("<br />");
//tpel zangvaci andamner@ arandzin aranc storaketi
for (let i = 0; i < a.length; i++) {
  document.write(" " + a[i]);
}
document.write("<br />");
//tpel zangvaci 3 andam@
document.write(a[2]);

document.write("<br />");
//erkrord andam@ darcnr; Armen
a[2] = "Armen";
document.write(a);
document.write("<br />");
// verjin andam@ avelacnel Davit
a.push("Davit");
document.write(a);
document.write("<br />");
//arajin andam@ avelacnel Hovo
a.unshift("Hovo");
document.write(a);
document.write("<br />");
let x = a.pop();
document.write(a);
document.write("<br />"); // shift functian heracnum e temic
// gtnel arrayum parunakox elementneri  gumar@
let b = [44, 5, 6, 77, 8, 3, 44, 5, 6];
let k = 0;
for (let i = 0; i < b.length; b++) {
  k = k + b[i];
}
document.write(k);
document.write("<br />");
//elementnerim durs berelu evs mi exanam
let arr = [1, 2, 3, 4, 5, 66, 7, 55, 56];
for (let i = 0; i < arr.length; i++) {
  document.write(`${arr[i]}`);
}
//tvabanakan mijin@
document.write("<br />");
let ar1 = [5, 10, 15, 30];
let z = 0;
for (let i = 0; i < ar1.length; i++) {
  z = z + ar1[i] / ar1.length;
}
document.write(z);
// functiayi mijocov zangvaci elementneri gumari hashvum@
let a = [1,2,3,4,5]
let k = 0;
function gum(masiv){
    for(let i = 0; i< masiv.length;i++){
k = k + masiv[i]
    }
    return k
}
document.write(gum(a))
//2 rd 4 rt 6 rd 8rd elementneri gumar@
document.write("<br />");
let arr1 = [1, 2, 334, 4, 5, 6, 7, 8, 9, 10];
let g = 0;
for (let i = 1; i <= arr1.length; i = i + 2) {
  g = g + arr1[i];
}
document.write(g);
document.write("<br />");
document.write("------------");
document.write(arr1.indexOf(334));
document.write("<br />");
//imananq te qani element ka arr1 -i mej
document.write(arr1.length);
//splice functiai(1,3) kirarum@ vor@ cuyc e yalis 1 indexov elementic 3 element jnjvum e orinak
let arr = ["aram", "gar", "Nar", "ser", "tag", "ara"];
arr.splice(1, 3);
document.write(arr);
//isk splice(2,0,"ccc",jjj)aysinqn erord parametric sksac arden avelacnum enq zangvacum element
arr.splice(2, 0, "xxx", "yyy");
document.write("<br />");
document.write(arr);
//ete mer zangvac@ uni orinak 5 element ev menq orinak avelacnum enq 9-rd element apa ayn avelanum e ev aranqi
//elementner@ datark e dnum javascript@ e length functian cuyc kta 9 element orinak
let arr = ["aram", "gar", "Nar", "ser", "tag", "ara"];
arr[17] = "fffvvv";
document.write(arr.length);
document.write(arr);
//entadrenq mard@ gnumner e katarel ev uzum enq zangvaci mijocov imanal te inchqan pox e caxsel orinak
let x = 0;
let arr = [200, 300, 400, 500, 600, 700];
for (let i = 0; i < arr.length; i++) {
  x = x + arr[i];
}
document.write(x);
//gtnenq zangvaci elementneri mijic nvazaguyn@ kam max arjeq@ orinak
let gum = [32, 44, 56, 76, 55, 43, 1, 2, 44, 3];
let min = gum[0];
for (let i = 1; i < gum.length; i++) {
  if (gum[i] < min) min = gum[i];
}
document.write(min);
//arrayi mijic zuyg tver@ durs berenq
let gum = [32, 44, 56, 76, 55, 43, 1, 2, 44, 3, 5, 7, 65, 66];
for (let i = 0; i < gum.length; i++) {
  if (gum[i] % 2 == 0) {
    document.write("<br />" + gum[i]);
  }
}

// erku masivneri miavorum
let a = [234, 5, 6, 74, 4, 3];
let b = [3245345, 235, 345, 45, 45, 54, 54, 3];
let c = a.concat(b);
document.write(c);



//stexcenq array vori mej erq hat array ka ev tpenq arajin@ ev erkrordi miji 4 rd element@

let masiv = [
  [1, 3, 44, 5, 66, 7, 888, 77, 6, 55, 444],
  [3, 4, 55, 6, 7, 66, 5, 44, 332, 2, 3, 4],
  [3, 44, 5, 23, 2, 4, 55, 6, 777, 8, 9, 0],
];
document.write(masiv[0]);
document.write("<br />");
document.write(masiv[1][2]);
//gumarenq arrayner@ irar
let gumar = masiv[0] + masiv[1] + masiv[2];
document.write("<br />");
document.write(gumar);
//aynpes gumarenq vor @ndhanur darcne mek amboxjakan masiv apa
let gumar1 = masiv[0].concat(masiv[1]).concat(masiv[2]);

document.write("<br />");
document.write(gumar1);

//stexcenq datark masivner ev tpenq dranq arandzin arandzin
let m = [];
let n = [];
for (let i = 0; i <= 5; i++) m[i] = i;
document.write("<br />");
document.write(m);
document.write("<br />");
for (let i = 0; i <= 10; i++) n[i] = i;
document.write(n);
let mn = [m, n];
document.write("<br />");
document.write(mn.length);
document.write("<br />");
document.write(mn);
document.write("<br />");
document.write(mn[1][3]);
for (let x = 0; x < mn.length; x++) {
  for (let y = 0; y < mn[x].length; y++) {
    document.write(mn[x][y]);
    document.write("<br />");
  }
}
//tpum enq zangvaci miji elementnern arandzin arandzin aranc storaket
for (let i = 0; i < mn.length; i++) {
  for (let j = 0; j < mn[i].length; j++) document.write(mn[i][j] + " ");
  document.write("<br />");
}
