var head = document.getElementById("main-header");
var head1 = document.getElementById("header-title");
head.style.borderBottom = "solid 3px #000";
var add = document.getElementsByClassName("title");
add.style.fontWeight = "bold";
var items = document.getElementsByClassName("list-group-item");
items[2].style.backgroundColor = "yellow";

var item = document.querySelector(".list-group-item:nth-child(1)");
item.style.backgroundColor = "green";
var item3 = document.querySelector(".list-group-item:nth-child(2)");
item3.style.display = "none";
