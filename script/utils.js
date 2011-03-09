function init() {
	imgs = document.getElementsByTagName('img');
	for(i=0; i < imgs.length; i++) {
		if(imgs[i].className == "favicon") {		
			url = imgs[i].parentNode.getAttribute('href');
			var urlpattern = new RegExp("(http://(.*?)/).*$");
			var parsedurl = url.match(urlpattern);
			urlParts = url.split("/");
			imgs[i].setAttribute('src', parsedurl[1] + 'favicon.ico');
		}
	}
}

