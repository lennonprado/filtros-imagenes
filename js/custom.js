

	var x = null;
	var ctx = null;
	var image1 = null;
	var imageData = null;

	var slider = new Slider('#ex1', {
		formatter: function(value) {
			return 'Current value: ' + value;
		}
	});


	function subir(){
		x=document.getElementById('fileUp-input');
		ctx = document.getElementById("magicHere").getContext("2d");
		image1 = new Image();
		image1.src=x.files[0].name;
		image1.onload = function(){
			ctx.drawImage(image1,0,0);
			imageData = ctx.getImageData(0,0,image1.width,image1.height);
			ctx.putImageData(imageData,0,0);
		}
		$('#magicHere').show();
		$('.file-input-content').hide();
	}


	function brighness(){
		for(var x=0; x<image1.width; x++){
			for(var y=0; y<image1.height; y++){
				var R = getRed(imageData,x,y);
				var G = getGreen(imageData,x,y);
				var B = getBlue(imageData,x,y);
				setRed(imageData,x,y,R+10);
				setGreen(imageData,x,y,G+10);
				setBlue(imageData,x,y,B+10);
			}
		ctx.putImageData(imageData,0,0);
		}
	}

	function negative(){
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

	function grey(){
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


	function sepia(){
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



	function binarization() {
        quantity = $('#ex1').val();
        var data = imageData;
        console.log(quantity);
        for(var x=0; x<image1.width; x++){
            for(var y=0; y<image1.height; y++){
            	//red channel
                if(getRed(data,x,y)>quantity)
                    setRed(data,x,y,255);
				else
	                setRed(data,x,y,0);
				// green channel
				if(getGreen(data,x,y)>quantity)
                    setGreen(data,x,y,255);
				else
                    setGreen(data,x,y,0);
				// blue channel
				if(getBlue(data,x,y)>quantity)
                    setBlue(data,x,y,255);
				else
	                setBlue(data,x,y,0);
            }
        }
        ctx.putImageData(data,0,0);
    }

    function smoothing(){
        for(var x=0; x<image1.width; x++){
            for(var y=0; y<image1.height; y++){
				// around
				cantR = 0;
                cantG = 0;
                cantB = 0;
				sum = 0;
				for(j=x-1;j<=x+1;j++) {
                    for (k = y - 1; k <= y + 1; k++) {
                    	if((j>0) && (k>0)) {
                            cantR = cantR + getRed(imageData, j, k);
                            cantG = cantG + getGreen(imageData, j, k);
                            cantB = cantB + getBlue(imageData, j, k);
                            sum++;
                        }
                    }
                }
                setRed(imageData,x,y,cantR/sum);
                setGreen(imageData,x,y,cantG/sum);
                setBlue(imageData,x,y,cantB/sum);
            }
        }
        ctx.putImageData(imageData,0,0);
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