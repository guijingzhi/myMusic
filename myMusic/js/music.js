var musicArr=[
	{	
		id:1,
		name:"存在",
		singer:"汪峰",
		src:"music/汪峰 - 存在.mp3",
		img:"images/wf.jpg"
	},
	{	
		id:2,
		name:"我是真的爱上你",
		singer:"王杰",
		src:"music/王杰 - 我是真的爱上你.mp3",
		img:"images/zjl.jpg"
	},
	{	
		id:3,
		name:"故乡",
		singer:"许巍",
		src:"music/许巍 - 故乡.mp3",
		img:"images/baby.jpg"
	},
	{	
		id:4,
		name:"夜空中最亮的星",
		singer:"低调组合",
		src:"music/低调组合-夜空中最亮的星.mp3",
		img:"images/zys.jpg"
	},
	{	
		id:5,
		name:"小镇姑娘",
		singer:"羽田",
		src:"music/羽田-小镇姑娘.mp3",
		img:"images/cyx.jpg"
	},
	{	
		id:6,
		name:"悟空",
		singer:"嗑着瓜子的猫",
		src:"music/嗑着瓜子的猫-悟空.mp3",
		img:"images/xzq.jpg"
	}
];
$(function(){
	//	动态创建歌单
	for(var i=0;i<musicArr.length;i++){
		$("#sec").append("<article id='art'><p class='art_p'>"+musicArr[i].id+"</p><dl class='musicDl'><dt><p>"+musicArr[i].name+"</p><p>"+musicArr[i].singer+"</p></dt><dd><i class='icon'>&#xe607;</i></dd></dl></article>");
	}
	
	$("#sec article").live("click",function(){
		indexs=$(this).index();
		$("#ad").attr("src",musicArr[indexs].src);
		$(".li1 img").attr("src",musicArr[indexs].img);
		$(".play").html("&#xe606;");
		$(".footUl_p").html(musicArr[indexs].name);
		times=setInterval("myTime()",10);
		myWidth=0;
	});
	$(".play").click(function(){
	if($("#ad").attr("src")!=""&&$("#ad")[0].paused){
			$("#ad")[0].play();
			$(".play").html("&#xe606;");
			
		}else{
			$("#ad")[0].pause();
			$(".play").html("&#xe600;");
		}
	});
	$(".nextMusic").click(function(){
		nextMusic();
	});
	
	
});
	var indexs;
	var times;
	function myTime(){
		var mucTime=$("#ad")[0].duration;
		var time=$("#ad")[0].currentTime;
		var myWidth=(time/mucTime)*100+"%";
		$(".divTime")[0].style="width:"+myWidth;
		
	}
	//下一曲
	function nextMusic(){
		$("#ad").attr("src",musicArr[indexs+1].src);
		$(".footUl_p").html(musicArr[indexs+1].name);
	}
	