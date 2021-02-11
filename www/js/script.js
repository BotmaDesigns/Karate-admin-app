function myFunction() {
    var x = document.getElementById("menu");
    if (x.className === "menu") {
        x.className += " showMenu";
    } else {
        x.className = "menu";
    }
}

function takePhoto(){
	navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
	destinationType: Camera.DestinationType.DATA_URL
 }); 

function onSuccess(imageData) {
	var image = document.getElementById('myImage');
	image.src = "data:image/jpeg;base64," + imageData;
}

function onFail(message) {
	alert('Failed because: ' + message);
}
}

function cameraTakePicture() { 
   navigator.camera.getPicture(onSuccess, onFail, {  
      quality: 50, 
      destinationType: Camera.DestinationType.DATA_URL 
   });  
   
   function onSuccess(imageData) { 
      var image = document.getElementById('myImage'); 
      image.src = "data:image/jpeg;base64," + imageData; 
   }  
   
   function onFail(message) { 
      alert('Failed because: ' + message); 
   } 
}
