$(document).ready(function(){
	colorarry=["red","blue","yellow","green","brown","white","black","orange"]; 
	namearry=["Red","Blooey","Sunnie","Greenelle","Browney","White","Blacky","Oran"];
	alienarray =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
	var right=0;
	var wrong=0;
	var rt=0;
	var wg=0;	 
	namecount=0;
	count=-1;
	$(".level").show();
	/*var myLoader = html5Preloader();
	myLoader.addFiles('audio/buttonclick.mp3','audio/correct.mp3','audio/wrong.mp3','audio/gameover.mp3','audio/red1.mp3'
	,'audio/red2.mp3','audio/red3.mp3','audio/blue1.mp3','audio/blue2.mp3','audio/blue3.mp3','audio/yellow1.mp3','audio/yellow2.mp3','audio/yellow3.mp3','audio/green1.mp3','audio/green2.mp3','audio/green3.mp3','audio/brown1.mp3','audio/brown2.mp3','audio/brown3.mp3', 'audio/white1.mp3','audio/white2.mp3','audio/white3.mp3','audio/black1.mp3','audio/black2.mp3','audio/black3.mp3','audio/orange1.mp3','audio/orange2.mp3','audio/orange3.mp3','images/black.png','images/black1.png','images/black2.png','images/black3.png','images/black4.png','images/black5.png','images/black6.png','images/black7.png','images/black8.png','images/black9.png','images/black10.png','images/black11.png','images/black12.png','images/black13.png','images/black14.png','images/black15.png','images/black16.png','images/blue.png','images/blue1.png','images/blue2.png','images/blue3.png','images/blue4.png','images/blue5.png','images/blue6.png','images/blue7.png','images/blue8.png','images/blue9.png','images/blue10.png','images/blue11.png','images/blue12.png','images/blue13.png','images/blue14.png','images/blue15.png','images/blue16.png','images/brown.png','images/brown1.png','images/brown2.png','images/brown3.png','images/brown4.png','images/brown5.png','images/brown6.png','images/brown7.png','images/brown8.png','images/brown9.png','images/brown10.png','images/brown11.png','images/brown12.png','images/brown13.png','images/brown14.png','images/brown15.png','images/brown16.png','images/green.png','images/green1.png','images/green2.png','images/green3.png','images/green4.png','images/green5.png','images/green6.png','images/green7.png','images/green8.png','images/green9.png','images/green10.png','images/green11.png','images/green12.png','images/green13.png','images/green14.png','images/green15.png','images/green16.png','images/orange.png','images/orange1.png','images/orange2.png','images/orange3.png','images/orange4.png','images/orange5.png','images/orange6.png','images/orange7.png','images/orange8.png','images/orange9.png','images/orange10.png','images/orange11.png','images/orange12.png','images/orange13.png','images/orange14.png','images/orange15.png','images/orange16.png','images/red.png','images/red1.png','images/red2.png','images/red3.png','images/red4.png','images/red5.png','images/red6.png','images/red7.png','images/red8.png','images/red9.png','images/red10.png','images/red11.png','images/red12.png','images/red13.png','images/red14.png','images/red15.png','images/red16.png','images/white.png','images/white1.png','images/white2.png','images/white3.png','images/white4.png','images/white5.png','images/white6.png','images/white7.png','images/white8.png','images/white9.png','images/white10.png','images/white11.png','images/white12.png','images/white13.png','images/white14.png','images/white15.png','images/white16.png','images/yellow.png','images/yellow1.png','images/yellow2.png','images/yellow3.png','images/yellow4.png','images/yellow5.png','images/yellow6.png','images/yellow7.png','images/yellow8.png','images/yellow9.png','images/yellow10.png','images/yellow11.png','images/yellow12.png','images/yellow13.png','images/yellow14.png','images/yellow15.png','images/yellow16.png','images/blackbasket.png','images/bluebasket.png','images/brownbasket.png','images/greenbasket.png','images/orangebasket.png','images/blackbasket.png','images/redbasket.png','images/whitebasket.png','images/yellowbasket.png','images/black_alien.png','images/blue_alien.png','images/brown_alien.png','images/green_alien.png','images/orange_alien.png','images/red_alien.png','images/white_alien.png','images/yellow_alien.png');
	myLoader.on('finish', function(){
		$("#loading").hide();
		$(".level").show();
	});*/

	$("div#a1, div#a2").mouseenter(function(){ 
		$(this).css("background-size","100%");
	});
	$("div#a1, div#a2").mouseleave(function(){ 
		$(this).css("background-size","80%");
	});
	$("div#page1").hide();
	$("div#page2").hide();
	$("div#page3").hide();
	$("div#page4").hide();
	$("#home,#foot,#horizontal").hide();
	$("article.level").click(function(){
		  var level=$(this).attr('id');
		  $("#home").show();
		  $("#btnclick").trigger('play');
		  if(level=="level1"){
			  count=-1;
			  namecount=0;
		    }
		else{
			 count=3;
			 namecount=4;
		    }
		 $("#question").attr('src',"audio/"+colorarry[count+1]+"1.mp3");
		 $("#question").trigger('play');
		 $("#s1").html("This is "+ namearry[namecount]+"! When it is time to clean the nursery,"+ namearry[namecount]+" is in charge of the 	"+colorarry[count+1]+" toys. Can you help him put his toys away?").css("color",colorarry[count+1]);
		 $("#imge1").attr('src',"images/"+colorarry[count+1]+"_alien.png");
		 $("#music img").click(function(){
		 	   $("#question").attr('src',"audio/"+colorarry[count+1]+"1.mp3");
		 	   $("#question").trigger('play');
		 });
		 $("#imge1").css("left","0px").css("bottom","0px");
		 $("div#a1").css("background-image","url('images/"+colorarry[count+1]+".png')");
		 $("div#b").css("background-image","url('images/"+colorarry[count+1]+"basket.png')");
			 $("div#page1").fadeIn();
			 $("#b,#img2").hide();
			 $("div#page3").hide();
			 $("div#startpage").hide();
			 $("div#page4").hide();
			 // $("footer#footer div").hide();
	});
	$("div#a1").click(function(){
		count++;
		obj=0;
		correct=0; 
		error=0;
		$("#question").trigger('pause');
		$("#btnclick").trigger('play');
		$("footer span#co").html(0);
		$("footer span#wr").html(0);
		$("div#startpage").hide();
		$("div#page4").hide();
		$("div#page3").hide();
		$("div#a1").fadeOut();
		$("#imge1").animate({left:'322px',bottom:'150px'},1000,function(){
			$("#s1").hide();
			$("#img2 div img").removeAttr('style'); 
			$("#b,#img2").fadeIn();
			$("#s1").html("Click On the "+ colorarry[count]+" articles.").css("color",colorarry[count]);
			$("#s1").fadeIn(1000);
			$("#question").attr('src',"audio/"+colorarry[count]+"2.mp3");
			$("#question").trigger('play');
			$("#foot").show();
			$("#horizontal").show();
			$("#music img").click(function(){
				$("#question").attr('src',"audio/"+colorarry[count]+"2.mp3");
		 		$("#question").trigger('play');
		 	});
		});
		imagesarray =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
		console.log(imagesarray);
		imagesarray.sort(function() {return 0.5-Math.random()});
		console.log(imagesarray);
		if(count<=3){
			for(i=0;i<imagesarray.length;i++){
				if(i<=4){
					$("img#r"+i).attr('src',"images/red"+imagesarray[i]+".png");
					$("img#b"+i).attr('src',"images/blue"+imagesarray[i]+".png");
					$("img#g"+i).attr('src',"images/green"+imagesarray[i]+".png");
					$("img#y"+i).attr('src',"images/yellow"+imagesarray[i]+".png");
					console.log(imagesarray[i]);
				}
			}
		}
		else{
			for(i=0;i<imagesarray.length;i++){
				if(i<=4){
					$("img#r"+i).removeAttr('class').attr('class',colorarry[count]).attr('src',"images/"+colorarry[count]+imagesarray[i]+".png");
				}
				if(i<3){
					var count1=count+1;
					var count2=count+2;
					var count3=count+3;
					if(count1>7){
						count1=-(colorarry.length-count1);
					}
					if(count2>7){
						count2=-(colorarry.length-count2);
					}
					if(count3>7){
						count3=-(colorarry.length-count3);
					}
					$("img#b"+i).removeAttr('class').attr('class',colorarry[count1]).attr('src',"images/"+colorarry[count1]+imagesarray[i]+".png");
					$("img#g"+i).removeAttr('class').attr('class',colorarry[count2]).attr('src',"images/"+colorarry[count2]+imagesarray[i]+".png");
					$("img#y"+i).removeAttr('class').attr('class',colorarry[count3]).attr('src',"images/"+colorarry[count3]+imagesarray[i]+".png");
				}
				else{
					$("img#b"+i).removeAttr('class').attr('class',"red").attr('src',"images/"+colorarry[count-1]+imagesarray[i]+".png");
					$("img#g"+i).removeAttr('class').attr('class',"blue").attr('src',"images/"+colorarry[count-2]+imagesarray[i]+".png");
					$("img#y"+i).removeAttr('class').attr('class',"green").attr('src',"images/"+colorarry[count-3]+imagesarray[i]+".png");
				}
				console.log(imagesarray[i]);
			}
		}
		
	});
	$("a div#home").click(function(){
		$("#btnclick").trigger('play');
	});
	$('article#img2 img').click(function(){
		$("#question").trigger('stop');
		$(".time").TimeCircles({time:{Days: {show: false},Hours: {show: false}}}).start();
		color=$(this).attr('class');
		$("img#imge1").removeAttr('class');
		if(color==colorarry[count]){
			   	rt++;
				$("#correctclick").trigger('play');
				console.log(obj);
				obj++;
				right++;
				$("footer span#co").html(right);
				var transition=$(this);
				transition.eq(0).css("position","absolute");
				transition.hide();
				$("img#imge1").attr('class','bounce animated');
				transition.animate({top:'10px',left:'720px',},"fast",function(){
						transition.show();
						transition.attr('class','rotateIn animated');
				}); 
				transition.animate({top:'220px'},1000,function(){
						$("div img#c2").removeAttr('class');
				});
				alienarray.sort(function() {return 0.5-Math.random()});
				$("#question").attr('src',"audio/"+colorarry[count]+"3.mp3");
				transition.hide(0,function(){
					if(obj>=4){
						$("section#img3").hide();
						$("#characters").css("opacity","0");
						$("img.fig").css("opacity","0");
						$("div#page2").hide();
						$("div#page1").hide();
						$("div#startpage").hide();
						$("#s1 b").html(" ");
						$("#question").trigger('play');
						$("#s1 b").html("It is time for "+namearry[namecount]+" to head home. Click on the other "+colorarry[count]+" Blooples 							so that they can join him.").css("color",colorarry[count]);
						$("#music img").click(function(){
							$("#question").attr('src',"audio/"+colorarry[count]+"3.mp3");
							$("#question").trigger('play');
		 				});
						//alienarray.sort(function() {return 0.5-Math.random()});
						$("div#page3").fadeIn(500,function(){
								$("#characters img").hide();
								$("#page3 #img3 img#l0").attr('src',"images/"+colorarry[count]+"_alien.png");
							  	$("section#img3 div#l1,div#l2,div#l3,div#l4").css("border-bottom-color",colorarry[count]).css("text-align","center");
								$("section#img3").show();
								if(count<=3){
										for(j=0;j<alienarray.length-12;j++){
												$("img#al"+alienarray[j]).attr('src',"images/red_alien.png").attr('class','red');
										 }
										for(j=alienarray.length-12;j<alienarray.length-8;j++){
												$("img#al"+alienarray[j]).attr('src',"images/blue_alien.png").attr('class','blue');
										 }
										for(j=alienarray.length-8;j<alienarray.length-4;j++){
												$("img#al"+alienarray[j]).attr('src',"images/green_alien.png").attr('class','green');
										 	}
										for(j=alienarray.length-4;j<alienarray.length;j++){
												$("img#al"+alienarray[j]).attr('src',"images/yellow_alien.png").attr('class','yellow');
										 	}
								 }
							 else{
									var co1=count+1;
									var co2=count+2;
									var co3=count+3;
									if(co1>7){
									 	co1=-(colorarry.length-co1);
									 }
									if(co2>7){
									 	co2=-(colorarry.length-co2);
									 }
									if(co3>7){
									 	co3=-(colorarry.length-co3);
									 }
									for(j=0;j<alienarray.length-12;j++){
						$("img#al"+alienarray[j]).attr('src',"images/"+colorarry[count]+"_alien.png").attr('class',colorarry[count]);
									 }
									for(j=alienarray.length-12;j<alienarray.length-10;j++){
						$("img#al"+alienarray[j]).attr('src',"images/"+colorarry[co1]+"_alien.png").attr('class',colorarry[co1]);
									 }
									for(j=alienarray.length-10;j<alienarray.length-8;j++){
						$("img#al"+alienarray[j]).attr('src',"images/"+colorarry[co2]+"_alien.png").attr('class',colorarry[co2]);
									 }
									for(j=alienarray.length-8;j<alienarray.length-6;j++){
						$("img#al"+alienarray[j]).attr('src',"images/"+colorarry[co3]+"_alien.png").attr('class',colorarry[co3]);
									 }
									for(j=alienarray.length-6;j<alienarray.length-4;j++){
						$("img#al"+alienarray[j]).attr('src',"images/"+colorarry[count-1]+"_alien.png").attr('class',colorarry[count-1]);
									 }
									for(j=alienarray.length-4;j<alienarray.length-2;j++){
						$("img#al"+alienarray[j]).attr('src',"images/"+colorarry[count-2]+"_alien.png").attr('class',colorarry[count-2]);
									 }
									for(j=alienarray.length-2;j<alienarray.length;j++){
						$("img#al"+alienarray[j]).attr('src',"images/"+colorarry[count-3]+"_alien.png").attr('class',colorarry[count-3]);
									 }
								 }
					console.log(alienarray[i]);
		            console.log("end");
					right=0;
					wrong=0;
					$("footer span#co").html(0);
					$("footer span#wr").html(0);
					$("footer#footer div").hide;
					$("#characters").css("opacity","1");
					$("#characters img").css("opacity","1");
					$("#characters img").show();
					}); 
				}
			});
		}
		else{
				$("#wrongclick").trigger('play');
				wrong++;
				wg++;
				$("footer span#wr").html(wrong);
		    }
	});
							  	 
	$('section#characters img').click(function(){
			$("#question").trigger('pause');
			color=$(this).attr('class');
			$("img#l0").removeAttr('class');
			if(color==colorarry[count]){
		   			rt++;
			        $("#correctclick").trigger('play');
			        correct++;
			        $(this).hide(function(){
						 if(correct==4){
							namecount++;
							if(count==3 || count==7){
									var accuracy=Math.round((rt/(rt+wg))*100);
								  	$("#gameover").trigger('play');
								  	$("script#load").removeAttr('src');
								  	alert('Level Completed\nAccuracy:'+accuracy+'%');
								  	document.location="index.html";
								  	$(".time").TimeCircles().destroy();
							}
							else{
								    correct=0;
								  	error=0;
								  	$("footer span#co").html(0);
									$("footer span#wr").html(0);
									$("#home").show();
									$("#foot,#horizontal").hide();
									$("#page3").fadeOut('slow',function(){
											$("#b,#img2").hide();
								 			$("#s1").html("This is "+ namearry[namecount]+"! When it is time to clean the nursery,"+ namearry[namecount]+" is in charge of the "+colorarry[count+1]+" toys. Can you help him put his toys away?").css("color",colorarry[count+1]);
								 			$("#question").attr('src',"audio/"+colorarry[count+1]+"1.mp3");
		 									$("#question").trigger('play');
		 									$("#music img").click(function(){
												$("#question").attr('src',"audio/"+colorarry[count+1]+"1.mp3");
												$("#question").trigger('play');
		 									});
								 			$("#imge1").attr('src',"images/"+colorarry[count+1]+"_alien.png");
								 			$("#imge1").css("left","0px").css("bottom","0px");
								 			$("div#a1").css("background-image","url('images/"+colorarry[count+1]+".png')");
								 			$("div#b").css("background-image","url('images/"+colorarry[count+1]+"basket.png')");
								 			$("div#page3").hide();
								 			$("div#page1,#a1").fadeIn(function(){
								 				$("#characters img").attr('src'," ").removeAttr('class');
								 			});
								 	});
								} 
								  	 	}    
								  	     });
								  	$("img#l0").attr('class','bounce animated');
						if(correct<=4){
								   var set=$(this).attr('src');
								   console.log(set);
								   $("img#l"+correct).attr('src',set);
				                   $("img#l"+correct).css("opacity","1");
								   $("footer span#co").html(correct);
								  }
							     }
						  else{
						  		$("#wrongclick").trigger('play');
								error++;
								wg++;
								$("footer span#wr").html(error);

							  }
		});
});
	
 
 
 
 
