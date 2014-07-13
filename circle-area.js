function area(r) {
    var area = r * r * Math.PI;
    return area;
}
var r1 = 7;
var r2 = 1.5;
var r3 = 20;
var area1 = area(r1);
var area2 = area(r2);
var area3 = area(r3);
function myFunction() {
    document.getElementById("text1").innerHTML = "r = " + r1 + " area = " + area1;
    document.getElementById("text2").innerHTML = "r = " + r2 + " area = " + area2;
    document.getElementById("text3").innerHTML = "r = " + r3 + " area = " + area3;
}