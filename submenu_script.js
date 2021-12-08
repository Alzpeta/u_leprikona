var subopen = document.querySelector(".subopen"),
	submenu = document.querySelector(".sub-menu");

subopen.addEventListener("click", function(e) {
    e.preventDefault();
	if(submenu.classList.contains("hidden") === true) {
		submenu.classList.remove("hidden");
 		submenu.classList.add("visible");
        return false;
	} else {
		submenu.classList.add("hidden");
        return false;
	};
}, false);

