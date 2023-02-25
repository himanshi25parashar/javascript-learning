var button = document.getElementById('enter');
var input = document.getElementById("mention");
var ul = document.querySelector("ul");

/*ar a = 44;
var b = 55;
var c = a+b;
console.log(c);*/

/*var a = 64;
var b = 89;
var c = a / b;
console.log (c);*/

button.addEventListener("click", function() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    
    
    
});

    
