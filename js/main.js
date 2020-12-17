var a = document.getElementById("ere");
var arr = a.childNodes;
for(var x=0;x<arr.length;x++) {
    arr[x].innerHTML = "new text";
    alert(x);
}