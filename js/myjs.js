let parenticonNav=document.querySelectorAll(".a-icon")
let iconcheakall=document.querySelectorAll(".ione")
let iconcloseall=document.querySelectorAll(".itwo")
let menuham=document.querySelector(".mybtn")
let sunmenu=document.querySelectorAll(".zirmenu")
let myiconlist=document.querySelector(".iconlist")
let allitwo=document.querySelectorAll(".itwo")
let testttmy=document.querySelector(".testtt")
let closebtn=document.querySelector(".close-btn")
let divwidthmy=document.querySelector(".divwhidth")
let spanClose=document.querySelector(".spanclose")
let containerFluidmargin=document.querySelector(".containerFluid-margin")
let mylistbaz=document.querySelector(".listbaz")
let right=document.querySelector(".samterite")
let ulMobile=document.querySelector(".myulmobile")
let lichildone=document.querySelector(".lichild-1")
let ulto=document.querySelector(".mobilTow-help")
let elemansli=document.querySelectorAll(".elemanli")
//console.log(elemansli)
let elementtwoo=document.querySelectorAll(".lichild-2")
let myoverflowmy=document.querySelector(".myoverflow")
let alllichild=document.querySelectorAll(".lichild")
 let hul=document.querySelector(".ukul") 
//let myhelp=document.querySelector(".help")
let  myelemaposibotton=document.querySelector(".eleman-posi-botton")

let mylogotamin=document.querySelector(".logo-tamin-js")

let mynavvv=document.querySelector(".mynav")
let mywidthheader=document.querySelector(".width-header")
let elemanposiBotton=document.querySelector(".eleman-posi-botton")

let containerFluidmy=document.querySelector(".containerFluid")

let myoverlaymy=document.querySelector(".myoverlay")


parenticonNav.forEach(function(item){
	
	
	
item.addEventListener("click",function(){
	var mynext = item.nextElementSibling;
	
		mynext.classList.remove("menu-subb")
parenticonNav.forEach(function(items){
	
	
  var mynext = items.nextElementSibling;	
		
 console.log(mynext)

		
	if(!items.children[1].classList.contains("d-none")){  //s
	items.children[1].classList.add("d-none")	
	items.children[0].classList.remove("d-none")
	items.classList.remove("isicon")	
					mynext.classList.remove("underlinav")
		mynext.classList.add("opacity-0")
	console.log("ifff")

	} 
	
	else{
		items.classList.add("isicon")
	
		console.log("else")
	}
	

		
})




let one=item.children[0]
let two=item.children[1]


if(item.classList.contains("isicon")){
	

one.classList.add("d-none")	
two.classList.remove("d-none")	

item.classList.remove("isicon")

		mynext.classList.add("underlinav")
		mynext.classList.remove("opacity-0")
		
	
	
}
else{
	
one.classList.remove("d-none")	
two.classList.add("d-none")	

item.classList.add("isicon")	

					mynext.classList.remove("underlinav")
		mynext.classList.add("opacity-0")
		
	
	
	
}	
		
	
})


})	




menuham.addEventListener("click",function(){



	
ulMobile.classList.remove("opacity-0")	
ulMobile.style.transition = "all 0.3s linear"




myoverflowmy.style.overflow="hidden"  


menuham.classList.toggle("help")


if(menuham.classList.contains("help")){
	
 containerFluidmargin.classList.add("containerFluid");	
 right.classList.add("divright")
 right.style.transition = "all 1s linear";
 mylistbaz.classList.add("d-none")
	spanClose.classList.remove("d-none")
myelemaposibotton.style.zIndex = "999"
myoverlaymy.classList.add("overlay")
	
}

else{
	
 containerFluidmargin.classList.remove("containerFluid");		
 right.classList.remove("divright")	
 right.style.transition = "all 1s linear";
 containerFluidmargin.style.transition = "all 0.3s linear";
 mylistbaz.classList.remove("d-none")	
spanClose.classList.add("d-none")	

myelemaposibotton.style.zIndex = "0"
myoverlaymy.classList.remove("overlay")
	
	
}

	
})


	elemansli.forEach(function(itemli){
	
itemli.addEventListener("click",function(event){


	
	
	
	let aa=jQuery(itemli).children().length

	let ulBad=itemli.childNodes[2];
	//console.log(ulBad)
	if(event.target.className != "back"){
		
	console.log("if")
	
	ulBad.style.marginRight="0"
	}
	else
	{
		ulBad.style.marginRight="-250px"
		console.log("else")

	}
	let bb=ulBad.firstElementChild
	

	bb.addEventListener("click",function(){

		
ulBad.style.marginRight="-250px"

	//console.log(bb);
	})
	
	

	
})	
	
})




menuham.addEventListener("click",function(){
	
if(menuham.classList.contains("help")){
	
myelemaposibotton.classList.add("posi-botton")	
mywidthheader.classList.remove("justify-content-between")
mywidthheader.classList.add("logo-tamin")	
	


}	else{
	
	
elemanposiBotton.classList.remove("posi-botton")	
mywidthheader.classList.remove("logo-tamin")
mywidthheader.classList.add("justify-content-between")	
	
}
	
	
	
	
})

menuham.addEventListener("click",function(){
	
	//menuham.classList.toggle("help-x")
	
	if(!menuham.classList.contains("help")){
		
ulMobile.classList.add("opacity-0")

	
	}
	

	
//containerFluidmy.removeAttribute("marginRight")	
	
//testttmy.classList.add("d-none")
})
	menuham.addEventListener("click",function(){
		
	if(menuham.classList.contains("help")){
		
		myoverflowmy.classList.add("myoverflow-f")		
	}	
	else{
	myoverflowmy.classList.remove("myoverflow-f")		
		
	}	
		

	})