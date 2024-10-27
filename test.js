let d = new Date();
var a = 1.5;

//find x
//I don't understand where I should multiply 1.5
var t = Math.exp(0.77)
var b = Math.log2(a) / Math.log2(t)

//round the function to the lowest int
var c = Math.floor(b);
document.getElementById("curve").innerHTML = b + " --> " + c;