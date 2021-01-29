let contentone =   document.querySelector('.content-1'),
contenttwo=  document.querySelector('.content-2'),
btn1=  document.querySelector('#about_btn_1'),
btn2=  document.querySelector('#about_btn_2'),
fixedVideo=  document.querySelector('.fixed_video_section'),
youtubeVideo=  document.querySelector('.youtube_video'),
btn3=  document.querySelector('#about_btn_3'),
scrollTop=  document.querySelector('.scroll_top');


btn1.addEventListener('click',()=>{
    contentone.style.display="block";
    contenttwo.style.display="none";
    btn1.style.background='#3763eb';
    btn1.style.color='#fff';
    btn2.style.background='';
    btn2.style.color='';
    btn3.style.background='';
    btn3.style.color='';
})

btn2.addEventListener('click',()=>{
    contentone.style.display="none";
    contenttwo.style.display="block";
    btn1.style.background='';
    btn1.style.color='';
    btn2.style.background='#3763eb';
    btn2.style.color='#fff';
    btn3.style.background='';
    btn3.style.color='';
})

btn3.addEventListener('click',()=>{
    contentone.style.display="block";
    contenttwo.style.display="none";
    btn1.style.background='';
    btn1.style.color='';
    btn2.style.background='';
    btn2.style.color='';
    btn3.style.background='#3763eb';
    btn3.style.color='#fff';
})

contentone.style.display="block";
contenttwo.style.display="none";
btn1.style.background='#3763eb';
btn1.style.color='#fff';



function videoShow(){
    fixedVideo.style.display='block';
    youtubeVideo.setAttribute('src','https://www.youtube.com/embed/Voci0Z1OX_E')
}

function videoExit(){
    fixedVideo.style.display='';
    youtubeVideo.removeAttribute('src')
}

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    console.log(scroll);
   if(scroll>=300){
    scrollTop.classList.add('show_scroll');
    document.querySelector('.header_section').classList.add('fixed_css');
   }else{
    scrollTop.classList.remove('show_scroll');
    document.querySelector('.header_section').classList.remove('fixed_css');
   }
});

// Add active class to the current button (highlight it)
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName('btns');
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

function showMenu(){
    document.querySelector('.header_menu_responsive').style.display='block';
}
function exitMenu(){
    document.querySelector('.header_menu_responsive').style.display='';
}

document.querySelector('.header_menu_responsive').addEventListener('click',()=>{
    document.querySelector('.header_menu_responsive').style.display='';
})