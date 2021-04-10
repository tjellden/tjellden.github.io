//-------------------
// Get viewPort size
//-------------------
function viewPortSize() {
	var returnValue = {width:630,height:460};
	if (document.body && document.body.offsetWidth) {
		returnValue.width = document.body.offsetWidth;
		returnValue.height = document.body.offsetHeight;
	}
	if (document.compatMode=='CSS1Compat' &&
		document.documentElement &&
		document.documentElement.offsetWidth ) {
		returnValue.width = document.documentElement.offsetWidth;
		returnValue.height = document.documentElement.offsetHeight;
	}
	if (window.innerWidth && window.innerHeight) {
		returnValue.width = window.innerWidth;
		returnValue.height = window.innerHeight;
	}
	
	returnValue.scale = (returnValue.width<returnValue.height)?returnValue.width:returnValue.height;
	
	return returnValue;
}

//--------------------
// Read local storage
//--------------------
function readLocalStorage(id) {
	// Local storage https://www.w3schools.com/html/html5_webstorage.asp
	console.log("typeof(Storage)=",typeof(Storage));
	// Read
	if (localStorage.lastname) {
		console.log("test:", localStorage.getItem("lastname"));
	   localStorage.removeItem("lastname");
	} else {
	   // Store
	   localStorage.setItem("lastname", "Smith");
	}

}

//------------------
// Read image files
//------------------
function readImageFiles( url, doneFunc) {
	let reader = new FileReader();
	reader.onload = function (e) {
		var imgUrl=e.target.result;
		img = document.createElement("img");
		img.src =  imgUrl;
		doneFunc(img);
	};//end onload()
	let textFileAsBlob = new Blob([url], {type: 'image/jpg'});
	reader.readAsBinaryString(textFileAsBlob);
}

