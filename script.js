var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var span= document.getElementsByTagName("span");

/*toggle .done property*/
for(var i=0; i<span.length; i++){
span[i].addEventListener("click", liClick);
}
function liClick(){
  this.classList.toggle("done");
}
/*Delete button */
[...document.getElementsByTagName('del')].forEach(el =>
  el.addEventListener('click', () =>
    el.parentNode.parentNode.removeChild(el.parentNode)));

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.addEventListener('click', () => {
        li.classList.toggle("done");
    })
    var deletebutton = document.createElement("button")
    var spanitem = document.createElement("span")
	spanitem.appendChild(document.createTextNode(input.value));
        deletebutton.appendChild(document.createTextNode("Delete"));
	deletebutton.addEventListener('click', () => {
        ul.removeChild(li);
    });
	ul.appendChild(li);
    li.appendChild(spanitem)
    li.appendChild(deletebutton);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
