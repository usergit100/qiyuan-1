
			// 首先获取相关DOM
			var box =document.getElementById('box');
			var img =document.getElementById('img1');
			var left =document.getElementById('left');
			var right =document.getElementById('right');

			// 构造图片和文字数组
			var arr_img = ['img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg' ];
			var arr_text =['网文新风','超神宠兽店','史上第一密探','我已妖格担保','盛世遮天',];
			// 图片轮播
			var currentIndex =1;
			function slide(){
				img.src = arr_img[currentIndex];
				text.innerText =arr_text[currentIndex]
				currentIndex =++currentIndex%5;

			}
			// 使用setInterval完成轮播
			var pause =setInterval(slide,2000);
			// 鼠标悬停时，停止轮播
	        // 使用clearInterval来完成
	        box.addEventListener('mouseover',function(){
	        	clearInterval(pause);

	        });
	        // 鼠标离开后，继续轮播
	        box.addEventListener('mouseout',function(){
	           pause =setInterval(slide,2000);	
	        })
	        // 手动切换图片
	        left.addEventListener('click',function(){
	        	currentIndex = --currentIndex%5;
	        	if(currentIndex < 0){
	        		currentIndex +=5;
	        	}
	        	img.src = arr_img[currentIndex];
		        text.innerText = arr_text[currentIndex];
	        })
	        right.addEventListener('click',function(){
	        	currentIndex =++currentIndex%5;
	        	img.src = arr_img[currentIndex];
				text.innerText = arr_text[currentIndex];
	        })
