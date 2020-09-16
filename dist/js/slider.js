/* Slider */
var slideIndex = 1;

showBioSlides(slideIndex);
showImgSlides(slideIndex);

function plusBioSlides(n) {
	showBioSlides(slideIndex += n);
}

function plusImgSlides(n) {
	showImgSlides(slideIndex += n);
}

function showBioSlides(n) {
	var i;
  	var bioSlides = document.getElementsByClassName("selectedBioSlides");
  
  	if (n > bioSlides.length) { slideIndex = 1 }    
  	
  	if (n < 1) { slideIndex = bioSlides.length }
  	
  	for (i = 0; i < bioSlides.length; i++) {
		bioSlides[i].style.display = "none";  
  	}
  
  	bioSlides[slideIndex - 1].style.display = "block";  
}

function showImgSlides(n) {
	var i;
	var imgSlides = document.getElementsByClassName("generalImgSlides");
	
	if (n > imgSlides.length) { slideIndex = 1 }
  	
	if (n < 1) { slideIndex = imgSlides.length }
	  	
	for (i = 0; i < imgSlides.length; i++) {
		imgSlides[i].style.display = "none";
	}
	  
	imgSlides[slideIndex - 1].style.display = "block";
}
