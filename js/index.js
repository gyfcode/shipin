		window.onload=function(){

		let database=[
			{
				id:"1",
				name:"520沙画",
				src:"videos/520沙画.mp4",
				icon:"img/1.jpg",
				bigimg:"bigimg/big1.jpg",
				author:"zanwu",
				zhuanji:"fff",
				smallImg:"img/sh.jpg",
				bigImg:"img/威仔2.jpg",
				
			},
			{
				id:"2",
				name:"爱情公寓主题曲",
				src:"videos/爱情公寓主题曲.mp4",
				icon:"img/1.jpg",
				bigimg:"bigimg/big1.jpg",
				author:"张敬轩",
				zhuanji:"fff",
				smallImg:"img/aqgy.jpg",
				bigImg:"img/张敬轩2.jpg",
				
			},
			{
				id:"3",
				name:"感动瞬间",
				src:"videos/感动瞬间.mp4",
				icon:"img/1.jpg",
				bigimg:"bigimg/big1.jpg",
				author:"汪苏泷",
				zhuanji:"fff",
				smallImg:"img/gdsj.jpg",
				bigImg:"img/汪苏泷2.jpg",
				
			},
			{
				id:"4",
				name:"花千骨 不可说",
				src:"videos/花千骨 不可说.mp4",
				icon:"img/1.jpg",
				bigimg:"bigimg/big1.jpg",
				author:"庄心妍",
				zhuanji:"fff",
				smallImg:"img/hqg.jpg",
				bigImg:"img/庄心妍2.jpg",
				
			},
			{
				id:"5",
				name:"画画",
				src:"videos/画画.mp4",
				icon:"img/1.jpg",
				bigimg:"bigimg/big1.jpg",
				author:"庄心妍",
				zhuanji:"fff",
				smallImg:"img/hh.jpg",
				bigImg:"img/庄心妍2.jpg",
				
			},
			{
				id:"6",
				name:"励志片",
				src:"videos/励志片.mp4",
				icon:"img/1.jpg",
				bigimg:"bigimg/big1.jpg",
				author:"庄心妍",
				zhuanji:"fff",
				smallImg:"img/lz.jpg",
				bigImg:"img/庄心妍2.jpg",
				
			},
			{
				id:"7",
				name:"三生三世片头曲",
				src:"videos/三生三世片头曲 凉凉.mp4",
				icon:"img/1.jpg",
				bigimg:"bigimg/big1.jpg",
				author:"庄心妍",
				zhuanji:"fff",
				smallImg:"img/ll.jpg",
				bigImg:"img/庄心妍2.jpg",
				
			},
			{
				id:"8",
				name:"俞敏洪演讲",
				src:"videos/俞敏洪演讲.mp4",
				icon:"img/1.jpg",
				bigimg:"bigimg/big1.jpg",
				author:"庄心妍",
				zhuanji:"fff",
				smallImg:"img/ymh.jpg",
				bigImg:"img/庄心妍2.jpg",
				
			},
			{
				id:"9",
				name:"张卫健演讲",
				src:"videos/张卫健演讲.mp4",
				icon:"img/1.jpg",
				bigimg:"bigimg/big1.jpg",
				author:"庄心妍",
				zhuanji:"fff",
				smallImg:"img/zwj.jpg",
				bigImg:"img/庄心妍2.jpg",
				
			},
		]

		var box_lists=document.querySelector('.box-lists');
		database.forEach(function(obj,index){
			box_lists.innerHTML+=`
				<li id=${obj.id}>
						<div class="zeZhao">
							<div class="jia">+</div>
							<div class="lists_icon1"></div>
							<div class="lists_icon2"></div>
							<div class="lists_icon3"></div>
						</div>
						<div class="jia"></div>
						<span class="smallImg"><img src="${obj.smallImg}"/></span>
						<span >${obj.name}</span>

				</li>
			`
			$(".cilistsbox")[0].innerHTML+=`<li  id=${obj.id} class='top-left1'>${obj.name}</li>`
								
								
		})

		$("#downloadmp3").click(function(){
			
			var href=$('video').attr('src');//   music/吻得太逼真.mp3
			var name=href.slice(href.lastIndexOf('/')+1);
			$(this).attr({href:href,download:name})//$(this) 是a标签
			$(".downLoadimg").animate({marginTop:"400px"},1000,function(){
				$(this).css({marginTop:"-200px"})
			})

		})
		
		
		//歌词效果
		$(".cilists").click(function(){
			$(this).find(".cilistsbox").fadeToggle(500);
			$(".loved").find(".cilistsbox").fadeOut(500);
		})
		$(".loved").hover(function(){
			$(this).find(".cilistsbox").fadeIn(500);
			$(".cilists").find(".cilistsbox").fadeOut(500);
			$(".loved .cilistsbox")[0].innerHTML='';
			var lovedArr=JSON.parse(localStorage.lovednow)
				
			for(var j=0;j<lovedArr.length;j++){
				$(".loved .cilistsbox")[0].innerHTML+=`<li id=${lovedArr[j].id}>${lovedArr[j].name}</li>`;

			}
		},function(){
			$(this).find(".cilistsbox").fadeOut(500);
			$(".cilists").find(".cilistsbox").fadeOut(500)
		})

		$(".loved .cilistsbox").on("click","li",function(){
			var id=$(this).attr("id")
			database.forEach(function(obj,index){
				if(obj.id==id){

					$('video').attr({src:obj.src}).get(0).play()
				}
			})		
		})
		$(".cilists .cilistsbox").on("click","li",function(){
			var id=$(this).attr("id")
			database.forEach(function(obj,index){
				if(obj.id==id){

					$('video').attr({src:obj.src}).get(0).play()
				}
			})		
		})
		//最近播放的歌曲 之本地存储
		var listnow=localStorage.musics?JSON.parse(localStorage.musics):[];//[{},{}]	

		//左侧列表点击播放
		$('.body-box-lists').on('click','li',function(){
			
			$('.Time span').eq(0).html("");
			$('.Time span').eq(2).html("");
			$('.pause img').attr({src:'images/pause.png'})
			$('.body-box-lists li').removeClass('active');
			$(this).addClass('active')
			var id=$(this).attr('id');

			database.forEach(function(obj,index){
				if(obj.id==id){
					$('video').attr({src:obj.src}).get(0).play()
					$(".headerImg img").attr({src:obj.smallImg})
					$(".bigphone img").attr("src",obj.bigImg)	
					//最近播放的歌曲 之本地存储
					
					if(check(listnow,obj)){
						// console.log(listnow)
						// console.log(obj)
						listnow.push(obj);
						localStorage.musics=JSON.stringify(listnow);
					}
	 				
	 				
	 				

					setTimeout(function(){
						//获取当前播放时间以及总时间   //当歌曲播放时执行的函数
						$('video').get(0).ontimeupdate=function(){

							var allTIme=$('video')[0].duration;
							var currentTime=$('video')[0].currentTime;
							$('.Time span').eq(0).text(getTime(currentTime));
							$('.Time span').eq(2).text(getTime(allTIme));
							var bili=currentTime/allTIme;
							$('.progress .progressing').css('width',$('.progress').width()*bili)
							$('.progress .dian').css('left',$('.progress').width()*bili)
							geci(obj,$('video').get(0))

						}

						//点击进度条 改变当前播放时间
						$('.progress').click(function(e){
							var bili2=e.offsetX/$('.progress').width();
							$('.progress .progressing').css('width',$('.progress').width()*bili2)
							$('.progress .dian').css('left',$('.progress').width()*bili2);
							$('video')[0].currentTime=$('video')[0].duration*bili2

							// geci(obj,$('video').get(0))
						})

						

						var volume=$('video')[0].volume;
						//点击音量进度条 改变当前音量
						$('.soundprogress .soundprogressing').css('left',$('.soundprogress').width()*volume)
						$('.soundprogressbox').click(function(e){
							$('.soundbox img').attr('src','images/sound.png');
							var bili3=e.offsetX/$('.soundprogress').width();
							$('.soundprogress .soundprogressing').css('left',$('.soundprogress').width()*bili3)
							
							$('video')[0].volume=1*bili3
						})

					},0)
					


				}
			})
		})

		//改变音量
		
		$('.soundbox img').click(function(){
			var volume=$('video')[0].volume;
			console.log(volume)
			if($(this).attr('src')=='images/sound.png'){
				$(this).attr('src','images/volume.png');
				$(this).attr('volume',volume);
				$('video')[0].volume=0;
			}else{
				$(this).attr('src','images/sound.png');
				$('video')[0].volume=$(this).attr('volume');
			}
		})




		//左侧列表点击 事件委派
		$('.body-box-lists').on('click','li',function(){
			$('.pause img').attr({src:'images/pause.png'})
			$('.body-box-lists li').removeClass('active');
			$(this).addClass('active')
			var id=$(this).attr('id');

			database.forEach(function(obj,index){
				if(obj.id==id){

					$('video').attr({src:obj.src}).get(0).play()
					$('.currentTitle li').html('').html(obj.name)
					// console.log($('video').attr('src'))
					setTimeout(function(){
						//获取当前播放时间以及总时间
						$('video').get(0).ontimeupdate=function(){

							var allTIme=$('video')[0].duration;
							var currentTime=$('video')[0].currentTime;
							$('.Time span').eq(0).text(getTime(currentTime));
							$('.Time span').eq(2).text(getTime(allTIme));
							var bili=currentTime/allTIme;
							$('.progress .progressing').css('width',$('.progress').width()*bili)
							$('.progress .dian').css('left',$('.progress').width()*bili)
							geci(obj,$('video').get(0))

						}

						//点击进度条 改变当前播放时间
						$('.progress').click(function(e){
							var bili2=e.offsetX/$('.progress').width();
							$('.progress .progressing').css('width',$('.progress').width()*bili2)
							$('.progress .dian').css('left',$('.progress').width()*bili2);
							$('video')[0].currentTime=$('video')[0].duration*bili2
						})

						
					


						//点击音量进度条 改变当前音量
						$('.soundprogress .soundprogressing').css('left',$('.soundprogress').width()*volume)
						$('.soundprogressbox').click(function(e){
							$('.soundbox img').attr('src','images/sound.png');
							var bili3=e.offsetX/$('.soundprogress').width();
							$('.soundprogress .soundprogressing').css('left',$('.soundprogress').width()*bili3)
							
							$('video')[0].volume=1*bili3
						})

					},0)
					


				}
			})
		})
		//遮罩
		$(".body-box-lists li .zeZhao").hover(function(){
			$(this).css({opacity:1})
		},function(){
			$(this).css({opacity:0})
		})
		//暂停与播放
		$('.pause img').click(function(){
			if($('.pause img').attr('src')=='images/pause.png'){
				$('.pause img').attr({src:'images/start.png'})
				$('video').get(0).pause()
			}else{
				$('.pause img').attr({src:'images/pause.png'})
				$('video').get(0).play()
			}
		})

		
		//上一首
		$('.prev').click(function(){
			var id=$('.active').attr('id');
			
			var nowIndex;
			database.forEach(function(obj,index){			
				if(obj.id==id){					
					if(index==0){
						nowIndex=0;
						
					}else{
						nowIndex=index-1;						
					}
					var srcs=database[nowIndex].src
					$(".bigphone img").attr("src",obj.bigImg)
					$(".headerImg img").attr({src:obj.smallImg})
					$('video').attr({src:srcs}).get(0).play();
					$('.body-box-lists li').removeClass('active').eq(nowIndex).addClass('active');
				}
			})
			


		})


		//下一首
		$('.next').click(function(){
			var id=$('.active').attr('id');
			
			var nowIndex;
			database.forEach(function(obj,index){			
				if(obj.id==id){					
					if(index>=database.length-1){
						nowIndex=database.length-1;
						
					}else{
						nowIndex=index+1;						
					}
					var srcs=database[nowIndex].src
					$(".bigphone img").attr("src",obj.bigImg)
					$(".headerImg img").attr({src:obj.smallImg})
					$('video').attr({src:srcs}).get(0).play();
					$('.body-box-lists li').removeClass('active').eq(nowIndex).addClass('active');
				}
			})
		})


		


    
	 	//转化时分秒函数
		
		function getTime(time){
			var m=parseInt(time/60)<=9?'0'+parseInt(time/60):parseInt(time/60);
			var s=parseInt(time-m*60)<=9?'0'+parseInt(time-m*60):parseInt(time-m*60);
			return m+':'+s;
		}
		// 去重
		function check(arr,obj){
			for (var i = 0; i < arr.length; i++) {
				if(arr[i]==obj){
					return false;
				}
			}
			return true;
		}
	 	//选项卡
	 	$(".body-left-btn li").click(function(){
	 		var index=$(this).index();
	 		$(".body-box ul").fadeOut().eq(index).fadeIn();
	 		if($(this).attr('class')=='clock top_nav'){
	 			var str='';
	 			var musicsArr=JSON.parse(localStorage.musics)
	 				
	 				for(var j=0;j<musicsArr.length;j++){
	 					str+=`<li id=${musicsArr[j].id}>${musicsArr[j].name}</li>`;	
	 					
	 				}
	 				var header='<p><img src="images/39.png" alt="">&nbsp;<span>最近播放</span></p>'
	 				var content=header+str
	 				$(".clockBox").html(content)

	 		}

	 	})
	 	//换肤
	 	// var colors=0;
	 	// $(".btn2").click(function(){
	 	// 	colors++
	 	// 	if(colors>2){
	 	// 		colors=1;
	 	// 	}
	 	// 	if(colors==1){
	 	// 		$(".top").css({background:"rgba(22, 16, 39,.6)"})
		 // 		$(".body").css({background:" url(images/3.jpg) no-repeat center center",backgroundSize:'contain'});
		 // 		$(".controller").css({background: "rgba(22, 16, 39,.4)"})
	 	// 	}else if(colors==2){
	 	// 		$(".top").css({background:" rgba(222, 182, 12,.5)"})
		 // 		$(".body").css({background:" url(images/1.jpg) no-repeat center center",backgroundSize:'cover'});
		 // 		$(".controller").css({background: "rgba(222, 182, 12,.5)"})
	 	// 	}
	 		

	 	// })

	 	//播放列表显现
	 	$(".order").eq(0).click(function(){
	 		$(".order ul").fadeToggle(500)	
	 	})
	 	//单曲播放
	 	$(".order ul li").eq(0).click(function(){
	 		$('video')[0].loop=false;
	 		$(".order").css({background:" url(images/33.png) no-repeat center center/30px 30px"});
	 	})
	 	//循环播放
	 	$(".order ul li").eq(1).click(function(){
	 		$('video')[0].loop="loop"
	 		$(".order").css({background:" url(images/order.png) no-repeat center center/30px 30px"});
	 	})
	 	//顺序播放

	 	$(".order ul li").eq(2).click(function(){
	 		var id=$(".active").attr("id")
	 		$(".order").css({background:" url(images/35.png) no-repeat center center/30px 30px"});
	 		$("video")[0].onended=function(){//onended 事件在视频/音频（video/video）播放结束时触发
	 			 if(id==database.length){
	 			 		return;
	 			 }
	 			 var num=parseInt(id);//id 是字母串
	 			$('.body-box-lists li').removeClass('active').eq(num).addClass('active');
	 			$("video")[0].src=database[id].src; 
	 			$("video")[0].play();
	 		}
	 	})
	 	//列表循环
		$(".order ul li").eq(3).click(function(){
	 		var id=parseInt($(".active").attr("id"))
	 		$(".order").css({background:" url(images/36.png) no-repeat center center/30px 30px"});
	 		$("video")[0].onended=function(){//onended 事件在视频/音频（video/video）播放结束时触发
	 			 if(id==database.length){
	 			 		id=0;
	 			 }
	 			var num=parseInt(id);
	 			$('.body-box-lists li').removeClass('active').eq(id).addClass('active');
	 			$("video")[0].src=database[id].src; 
	 			$("video")[0].play();
	 		}
	 	})

		

		//喜欢 星星
		var num=0;
		// loved 之本地存储
		var lovednow=localStorage.loved?JSON.parse(localStorage.loved):[];
		$(".box-lists").on("click",".lists_icon1",function(e){
			var ev=e||window.event;
			if(ev.cancelBubble){
				ev.cancelBubble=true;
			}else{
				ev.stopPropagation();
			}
			 num++;
			 if(num>=2){
			 	num=0
			 }
			if(num==0){//nolove
				$(this).css("background","url('images/0.png') no-repeat center center/25px 25px");
				var id=parseInt($(this).parents('li').attr('id'));
				//loved 之本地存储
				
				lovednow.forEach(function(obj,index){
					if(obj.id==id){
						lovednow.splice(index,1);
						console.log(lovednow)
						localStorage.lovednow=JSON.stringify(lovednow);
						
					}
	 			})
			}
			
			if(num==1){//loved
				$(this).css("background","url('images/1.png') no-repeat center center/25px 25px");
				var id=$(this).parents('li').attr('id');
				//loved 之本地存储
				database.forEach(function(obj,index){
					if(obj.id==id){
						if(check(lovednow,obj)){
							
							lovednow.push(obj);
							localStorage.lovednow=JSON.stringify(lovednow);
						}
					}
	 			})
				

			}

			 
		})
		//  收藏之本地存储
		var collect=localStorage.collect?JSON.parse(localStorage.collect):[];
		$(".box-lists").on("click",".jia",function(e){
			var ev=e||window.event;
			if(ev.cancelBubble){
				ev.cancelBubble=true;
			}else{
				ev.stopPropagation();
			}
			var id=$(this).parents('li').attr('id');
				console.log(id)
				database.forEach(function(obj,index){
					if(obj.id==id){
						if(check(collect,obj)){
							
							collect.push(obj);
							localStorage.collect=JSON.stringify(collect);
						}
					}
	 			})
		})

		$(".star").click(function(){
			var collectArr=JSON.parse(localStorage.collect)
			var str=""
			for(var j=0;j<collectArr.length;j++){
				 str+=`<li id=${collectArr[j].id}>${collectArr[j].name}</li>`;
			}
			var header="<p> &nbsp; &nbsp;<span>></span> &nbsp;<span>收藏列表</span></p>"
			var content=header+str
			$(".starBox").html(content)	
		})


		//点击消失 logo 出现
		$(".top-btn.btn4").click(function(){
			$(".body").fadeOut(500)
			$(".logo").fadeIn(500)
		})
		$(".logo").click(function(){
			$(".body").fadeIn(500)
			$(this).fadeOut(500)
		})
		//点击消失
		$(".top-btn.btn5").click(function(){
			$(".body").fadeOut(500)
		})
		
	}