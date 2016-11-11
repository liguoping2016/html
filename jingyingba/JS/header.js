
window.onload=function(){

	var city=document.querySelector('.city');
	var rotate=document.querySelector(".city p i");
	var cont=document.querySelector('.city-cont');
	var none=document.querySelector('.city span');

	if(city){

	
	city.onmouseover=function(){
		city.style.cursor='pointer';
	}
	city.onclick=function(){
		rotate.style.transform='rotateZ(135deg)';
		none.style.display='block';
		cont.style.display='block';
	}
	cont.onmouseover=function(){
		none.style.display='block';
		cont.style.display='block';
	}
	cont.onmouseout=function(){
		none.style.display='none';
		cont.style.display='none';
	}
}
// 轮播
	var btns = document.querySelectorAll(".banner_list li");
	var length=btns.length;
	var pics = document.querySelectorAll(".banner_con li");
	var time=null;
	if(length==3){
	//写东西
		console.log(btns)
		var length = btns.length;
		var index = 0;
		for(var i=0;i<length;i++){
			btns[i].index=i;
			pics[0].style.opacity="1";
			pics[i].style.transition="2s ease-out";
			btns[i].onmouseover=function(){
				clearInterval(time);
				for(var i=0;i<length;i++){
					btns[i].className="";
					pics[i].style.opacity="0";
				}
				index=this.index;
				btns[index].className="active";
				pics[index].style.opacity="1";			
			}
		}
	function nextbtns(){
		time=setInterval(function(){
			index++;
		if(index>btns.length-1){
			index=0;
		}
		for(var i = 0;i<btns.length;i++){
			btns[i].className="";
			pics[i].style.opacity="0";
		}
		console.log(Boolean(btns));
		btns[index].className="active";
		pics[index].style.opacity="1";
		},3000);
		
	}
	nextbtns();
}
	
// 合作机构滚动
	var prev=document.querySelector(".cooperation_cont_left");
	var next=document.querySelector(".cooperation_cont_right");
	var ul=document.querySelector(".cooperation_cont ul");
	var width=0;
	var timer=null;
	var li=document.querySelectorAll(".cooperation_cont ul li");
	var aa=0;
	if(prev){
	prev.onclick=function(){
		aa++;
		if(aa>=li.length/2){
			aa=0;
		}
		var width=167;
		ul.style.left=-width*aa+'px';		
	}
	next.onclick=function(){
		aa--;
		if(ul.offsetLeft>=0){
			ul.style.left=-width*li.length/2+ 'px'
			aa=li.length/2-1;
		}
		var width=167;
		ul.style.left=-width*aa+'px';			
	}
}
//回到顶部
	var upward=document.querySelector(".upward .upward_center");
	var upward_top=document.querySelector(".upward .upward_top")
	var upward_bottom=document.querySelector('.upward  .upward_bottom');
	if(upward){
	upward.onclick=function(){
			upward.parentNode.parentNode.scrollTop=0;
		}
	upward_top.onmouseover=function(){
		upward_bottom.style.display="block";
	}
	upward_top.onmouseout=function(){
		upward_bottom.style.display="none";
	}
}
}