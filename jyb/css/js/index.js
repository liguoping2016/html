window.onload=function(){
	// function $(e){
	// 	return  document.querySelector(e);
	// }
	// function $s(e){
	// 	return document.querySelector(e);
	// }
	var xiala=document.querySelector('.xiala');
	var xia_ul=document.querySelector('.xiala ul');
	if(xiala){
	xiala.onmouseover=function(){
		xia_ul.style.display='block';
	}
	xia_ul.onmouseover=function(){
		xia_ul.style.display='block';
	}
	xia_ul.onmouseout=function(){
		xia_ul.style.display='none';
	}
	}

}
