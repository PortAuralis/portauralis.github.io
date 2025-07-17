function lang_check() {
	if (window.navigator.language != "it-IT")
		window.location.href = "index.spa.html";
	else
		window.location.href = "index.ita.html";
}

if (window.location.href == "https://portauralis.github.io/" || window.location.href == "https://portauralis.github.io/index.html")
	lang_check();
