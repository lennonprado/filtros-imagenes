// Without JQuery
var slider = new Slider('#ex1', {
	formatter: function(value) {
		return 'Current value: ' + value;
	}
});


function chequeoImg(){
  var i=document.getElementById('fileUp-input');
  if(window.FileReader){
  }
}


function subir(){
  	var x=document.getElementById('fileUp-input');
		var ctx = document.getElementById("magicHere").getContext("2d");
		var image1 = new Image();
		image1.src=x.files[0].name;
		image1.onload = function(){
			ctx.drawImage(image1,0,0);
			var imageData = ctx.getImageData(0,0,image1.width,image1.height);
			ctx.putImageData(imageData,0,0);
		}
		document.getElementById('magicHere').style.display = 'block';
		document.getElementById('fileUp-input').style.display = 'none';
}


function brighness(){
		var x=document.getElementById('fileUp-input');
		var ctx = document.getElementById("magicHere").getContext("2d");
		var image1 = new Image();
		image1.src=x.files[0].name;
		image1.onload = function(){
			ctx.drawImage(image1,0,0);
			var imageData = ctx.getImageData(0,0,image1.width,image1.height);
			for(var x=0; x<image1.width; x++){
				for(var y=0; y<image1.height; y++){
					var R = getRed(imageData,x,y);
					var G = getGreen(imageData,x,y);
					var B = getBlue(imageData,x,y);
					setRed(imageData,x,y,R+80);
					setGreen(imageData,x,y,G+80);
					setBlue(imageData,x,y,B+80);
				}
			}
			ctx.putImageData(imageData,0,0);
		}
	}

function negative(){
	var x=document.getElementById('fileUp-input');
	var ctx = document.getElementById("magicHere").getContext("2d");
	var image1 = new Image();
	image1.src=x.files[0].name;
	image1.onload = function(){
		ctx.drawImage(image1,0,0);
		var imageData = ctx.getImageData(0,0,image1.width,image1.height);
		for(var x=0; x<image1.width; x++){
			for(var y=0; y<image1.height; y++){
				var R = getRed(imageData,x,y);
				var G = getGreen(imageData,x,y);
				var B = getBlue(imageData,x,y);
				setRed(imageData,x,y,255-R);
				setGreen(imageData,x,y,255-G);
				setBlue(imageData,x,y,255-B);
			}
		}
		ctx.putImageData(imageData,0,0);
	}
}

function grey(){
		var x=document.getElementById('fileUp-input');
		var ctx = document.getElementById("magicHere").getContext("2d");
		var image1 = new Image();
		image1.src=x.files[0].name;
		image1.onload = function(){
			ctx.drawImage(image1,0,0);
			var imageData = ctx.getImageData(0,0,image1.width,image1.height);
			for(var x=0; x<image1.width; x++){
				for(var y=0; y<image1.height; y++){
					var R = getRed(imageData,x,y);
					var G = getGreen(imageData,x,y);
					var B = getBlue(imageData,x,y);
					var todos = (R+G+B)/3;
					setRed(imageData,x,y,todos);
					setGreen(imageData,x,y,todos);
					setBlue(imageData,x,y,todos);
				}
			}
			ctx.putImageData(imageData,0,0);
		}
	}


	function sepia(){
		var x=document.getElementById('fileUp-input');
		var ctx = document.getElementById("magicHere").getContext("2d");
		var image1 = new Image();
		image1.src=x.files[0].name;
		image1.onload = function(){
			ctx.drawImage(image1,0,0);
			var imageData = ctx.getImageData(0,0,image1.width,image1.height);
			for(var x=0; x<image1.width; x++){
				for(var y=0; y<image1.height; y++){
					var R = getRed(imageData,x,y);
					var G = getGreen(imageData,x,y);
					var B = getBlue(imageData,x,y);
					var tr = (0.393 * R) + (0.769 * G) + (0.189 * B);
					var tg = (0.349 * R) + (0.686 * G) + (0.168 * B);
					var tb = (0.272 * R) + (0.534 * G) + (0.131 * B);
					setRed(imageData,x,y,tr);
					setGreen(imageData,x,y,tg);
					setBlue(imageData,x,y,tb);
				}
			}
			ctx.putImageData(imageData,0,0);
		}
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
