var burger_menu = document.querySelector(".burger_menu");
var nav = document.querySelector("nav");
var header = document.querySelector("header");

burger_menu.addEventListener("click", function()
{
	this.classList.toggle("menu_on");

	if(nav.style.top == "65px")
	{
		nav.style.top = "-800px";
		nav.zIndex = "1";
		header.style.height = "10%";
	}
	else
	{
		nav.style.top = "65px";
		nav.zIndex = "3";
		header.style.height = "100%";
	}

});