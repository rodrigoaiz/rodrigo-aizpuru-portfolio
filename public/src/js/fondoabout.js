window.onload = function(){
  let foto = document.getElementById('foto');
  let about = document.getElementById('about');
  about.addEventListener('mousemove', function(e) {
    let pageX = e.clientX - window.innerWidth/2;
    let pageY = e.clientY - window.innerHeight/2;
    foto.style.transform = 'translateX(-' + (100 + pageX/25) + '%) translateY(-' + (100 + pageY/25) + '%)';
	});
}

/*
window.onload = function(){
	var wrapper = document.querySelector('#wrapper'),
			layerOne = document.querySelector('#layer-1'),
			layerTwo = document.querySelector('#layer-2'),
			layerThree = document.querySelector('#layer-3'),
			layerFour = document.querySelector('#layer-4');

	wrapper.addEventListener('mousemove',function(e){
		var pageX = e.clientX - window.innerWidth/2,
                pageY = e.clientY - window.innerHeight/2;
  	layerOne.style.transform = 'translateX(-' + (50 + pageX/200) + '%) translateY(-' + (50 + pageY/200) + '%)';
  	layerTwo.style.transform = 'translateX(-' + (50 + pageX/1000) + '%) translateY(-' + (50 + pageY/1000) +  '%)';
  	layerThree.style.transform = 'translateX(-' + (50 + pageX/200) + '%) translateY(-' + (50 + pageY/200) +  '%)';
  	layerFour.style.transform = 'translateX(-' + (50 + pageX/25) + '%) translateY(-' + (50 + pageY/25) + '%)';
	});
}

// Basado/https://codepen.io/Craaftx/pen/yQGpwa
 */
