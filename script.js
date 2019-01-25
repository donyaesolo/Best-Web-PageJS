// JavaScript is capitalized using "camel case": https://en.wikipedia.org/wiki/Camel_case
// Check out the power of the classList property: https://www.w3schools.com/jsref/prop_element_classlist.asp

 var change = "1"
 var d = "1"
var lele = "0"
// "el" stands for the "element" that was just clicked
function addClass(el){
	if (change == "1"){
		document.images["pic"].src = "images/lombardi_trophy.png";
		document.getElementById("click").innerHTML = "Click Me!";
		change = "2";
	}
	else if(change == "2"){
		document.images["con"].src = "images/lombardi_trophy.png";
		document.images["pic"].src = "images/lombardi_trophy.png";
		document.getElementById("click").innerHTML = "Click Me Again!";
		change = "3";
	}
	else{
		document.images["con"].src = "images/lombardi_trophy.png";
		document.images["pic"].src = "images/lombardi_trophy.png";
		document.images["change"].src = "images/lombardi_trophy.png";
		document.getElementById("click").innerHTML = "";
		document.getElementById("hidden").innerHTML = "Double Click Me!";
		}
}

function show(el) {
	if(d == "1"){
		document.getElementById("pat").classList.add("con");
		document.getElementById("hidden").innerHTML = "Double Click Me Again!";
		d = "2";
	}
	else if (d == "2"){
		document.getElementById("pat").classList.remove("con");
		document.getElementById("pat").classList.remove("pats-silver");
		document.getElementById("ram").classList.remove("rams-blue");
		document.getElementById("ram").classList.add("pats-silver");
		document.getElementById("pat").classList.add("rams-blue");
		d = "3";
	}
	else if (d == "3"){
		document.getElementById("hidden").innerHTML = "Again!";
		document.getElementById("ram").classList.remove("pats-silver");
		document.getElementById("pat").classList.remove("rams-blue");
		document.getElementById("ram").classList.add("red");
		document.getElementById("pat").classList.add("pink");
		d = "4";
	}
	else if (d == "4"){
		document.getElementById("hidden").innerHTML = "Stop clicking!";
		d = "5";
	}
	else if (d == "5"){
		document.getElementById("hidden").innerHTML = "I said Stop!";
		d = "6";
	}
	else{
		document.getElementById("hidden").innerHTML = "Go Click The Other Dude!";
		document.getElementById("he").addEventListener("click", hey);
		document.getElementById("pat").addEventListener("click", hehe);
	}
}
function hey(){
	alert("psst, it's the Guy to the right of me");
}
function hehe(){
	if (lele == "0") {
		document.getElementById("he").removeEventListener("click", hey);
		document.getElementById("he").removeEventListener("dblclick", show);
		document.getElementById("hidden").innerHTML = "";
		document.getElementById("hehe").innerHTML = "Hello!!, click me";
		lele = "1";
	}
	else if (lele == "1") {
		document.getElementById("hehe").innerHTML = "Lookie I changed! Click again";
		document.getElementById("hehe").classList.add("pastel-green");
		lele = "2";
	}
	else{
		document.getElementById("hehe").innerHTML = "Is";
		document.getElementById("hidden").innerHTML = "Over";
		document.getElementById("click").innerHTML = "Show!";
		document.getElementById("ram").classList.remove("red");
		document.getElementById("pat").classList.remove("pink");
		document.getElementById("ram").classList.add("green");
		document.getElementById("pat").classList.add("purple");
		document.getElementById("hehe").classList.remove("pastel-green");
		document.images["con"].src = "images/yoda.jpg";
		document.images["pic"].src = "images/kitty.gif";
		document.images["change"].src = "images/kitty.gif";
	}
}
