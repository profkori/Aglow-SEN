/*Name this external file gallery.js*/

function upDate(previewPic){
    document.getElementById('image').style.backgroundImage = "url("+previewPic.src+")";
    document.getElementById('image').innerHTML = previewPic.alt;
	}

	function unDo(){
    document.getElementById('image').style.backgroundImage = "url()";
    document.getElementById('image').style.backgroundColor = "#8e68ff";
    document.getElementById('image').innerHTML = "Hover over an image below "; 
	}