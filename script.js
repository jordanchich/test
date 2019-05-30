
document.getElementById("textarea").textContent
console.log(document.getElementById("textarea").textContent)
var text = document.getElementById("textarea").textContent;
var space = text.split(' ');
console.log(space.length)
document.getElementById("counter").textContent = space.length;

for(var i=0; i<space.length; i++){
  space.length[i].addEventListener("click",
  function() {
    document.getElementById("counter").textContent = text.split(' ').length;
  }
)
}
