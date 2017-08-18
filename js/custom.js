	
function chequeoImg(){
  var i=document.getElementById('fileUp-input');
  if(window.FileReader){
  }
}


function subir(){
  var x=document.getElementById('fileUp-input');
  var txt = "";
	if ('files' in x) {
		if (x.files.length == 0) {
			txt = "Select one or more files.";
		} else {
			for (var i = 0; i < x.files.length; i++) {
				txt += "<br><strong>" + (i+1) + ". file</strong><br>";
				var file = x.files[i];
				if ('name' in file) {
					txt += "name: " + file.name + "<br>";
				}
				if ('size' in file) {
					txt += "size: " + file.size + " bytes <br>";
				}
			}
		}
	}
	alert(txt);
}
	function aplicarfiltros(){
		var ctx = document.getElementById("magicHere").getContext("2d");
		var image1 = new Image();
		image1.crossOrigin="Anonymous";
		image1.src="https://pbs.twimg.com/profile_images/491778038510936064/jGJRuUvN_400x400.jpeg";
		image1.onload = function(){						
			ctx.drawImage(image1,0,0);
			var imageData = ctx.getImageData(0,0,image1.width,image1.height);
			console.log(image1.width,image1.height);
			//imageData = sepia(imageData);			
			ctx.putImageData(imageData,0,0);
		}
	}

	function sepia(imageData){
		var maxWidth = imageData.width;
		var maxHeight = imageData.height;
		for(var x=0; x<maxWidth; x++){
			for(var y=0; y<maxHeight; y++){				
				var R = getRed(imageData,x,y);
				var G = getGreen(imageData,x,y);
				var B = getBlue(imageData,x,y);
				//var tr = (0.393 * R) + (0.769 * G) + (0.189 * B);
				//var tg = (0.349 * R) + (0.686 * G) + (0.168 * B);
				//var tb = (0.272 * R) + (0.534 * G) + (0.131 * B);
				setRed(imageData,x,y,R);
				setGreen(imageData,x,y,G);
				setBlue(imageData,x,y,B);
			}
		}
		return imageData;
	}

	function getRed(imageData,x,y){
		var index = (x + y * imageData.width) * 4;
		return imageData.data[index+0];
	}
	function setRed(imageData,x,y,valor){
		var index = (x + y * imageData.width) * 4;
		imageData.data[index+0]=valor;
	}
	function getGreen(imageData,x,y){
		var index = (x + y * imageData.width) * 4;
		return imageData.data[index+1];
	}
	function setGreen(imageData,x,y,valor){
		var index = (x + y * imageData.width) * 4;
		imageData.data[index+1]=valor;
	}
	function getBlue(imageData,x,y){
		var index = (x + y * imageData.width) * 4;
		return imageData.data[index+2];
	}
	function setBlue(imageData,x,y,valor){
		var index = (x + y * imageData.width) * 4;
		imageData.data[index+2]=valor;
	}