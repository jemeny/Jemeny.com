
		var i = 0;
		Slide();
		
		function Slide(){
			var a; 
			var s = document.getElementsByClassName("Image");
			for(a = 0; a < s.length; a++){
				document.getElementsByClassName("Image")[a].style.display = "none";
			}
			i ++;
			if(i > s.length){i = 1}
			document.getElementsByClassName("Image")[i-1].style.display = "block";
			setTimeout(Slide, 4000);
		}
	      
