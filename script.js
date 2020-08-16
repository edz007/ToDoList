var button = document.getElementById("enter");
var button2 = document.getElementById("enter2");

var input = document.getElementById("inputitem")
var input2 = document.getElementById("inputitem2")

var ul= document.getElementById("ul1")

function inputLength(){
	return input.value.length;
}

function createEl() {
	var li= document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	var newDelBut = document.createElement("button");
	newDelBut.appendChild(document.createTextNode("Del"));
	li.appendChild(newDelBut);
	newDelBut.className = "delete";

	var i;
	for (i = 0; i < deleteItem.length; i++) {
  	deleteItem[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";

  //   var k;
  //   for (k = 0; k < list.length; k++) {
  //   list[k].addEventListener("click", function(){
  // 	this.classList.toggle("done");})

  // }

    

  }
}

}

function afterClick() {
	if (inputLength() > 0) {
	createEl();
	input.placeholder = "input again please"
	}
}

function afterEnter(eve) {
	if (inputLength() > 0  && eve.key === "Enter") {
	createEl();
	input.placeholder = "ok. input again please"
	}

}

button.addEventListener("click", afterClick )

input.addEventListener("keypress", afterEnter )
//	console.log(eve);
	


button2.addEventListener("click", function() {
	var l2= document.createElement("li");
	l2.appendChild(document.createTextNode(input2.value));
	ul.appendChild(l2);
})
var body1= document.querySelector("body");

button.addEventListener("click", function(){
	var li= document.createElement("li");
	li.appendChild(document.createTextNode("test2"));
	var u2= document.createElement("ul");
	body1.appendChild(u2);
	u2.appendChild(li);
})

var h1 = document.querySelector("h1")

function done() {
h1.addEventListener("click", function() {
	h1.classList.toggle("done")
})
}

var deleteItem = document.getElementsByClassName("delete")
var i;
for (i = 0; i < deleteItem.length; i++) {
  deleteItem[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.getElementsByTagName("li");
// var j;
// for (j = 0; j < list.length; j++) {
//   list[j].addEventListener("click", function(){
//   	this.classList.toggle("done");})

//   }

  //onclick = function() {
    //this.classList.toggle("done");
  //}

var list2 = document.querySelector('ul');
list2.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
  	console.log(ev);
  	console.log(ev.target);
  	console.log(ev.target.tagName);
    ev.target.classList.toggle('done');
  }
}, false);