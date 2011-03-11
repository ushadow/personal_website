var onLoad = function () {
	imgs = document.getElementsByTagName('img');
	for(i=0; i < imgs.length; i++) {
		if(imgs[i].className == 'favicon') {		
			url = imgs[i].parentNode.getAttribute('href');
			var urlpattern = new RegExp('(https?://(.*?)/).*$');
			var parsedurl = url.match(urlpattern);
			imgs[i].setAttribute('src', parsedurl[1] + 'favicon.ico');
		}
	}
};
  
$(onLoad);

