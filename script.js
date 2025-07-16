function lang_check() {
	if (window.navigator.language != "it-IT")
		window.location.href = "index.spa.html";
	else
		window.location.href = "index.ita.html";
}

if (window.location.href == "file:///home/davide/Programs/webdev/aurelis/index.html")
	window.onload = lang_check();
