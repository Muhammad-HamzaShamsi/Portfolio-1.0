let ham = document.getElementById("ham");
let main = document.getElementById("main");
let x = 0;
ham.addEventListener("click",function(){
let nav = document.getElementById("sidenav");
   if(x==0){
      
    nav.classList.remove("sidenav-width");
   nav.className += " none";
   main.classList.remove("m");
   main.className += " wd";
  
   x++;
   console.log(x);
    }else{
        main.classList.remove("wd");
        main.className += " m";
        nav.classList.remove("none");
        nav.className += " sidenav-width";
      x--;
      console.log(x); 
    }
});
var i = 0;
var txt = 'I am a Font-End Web Developer';
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewritter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }else{
    typeWriter();    
  }
  
}
window.setInterval(typeWriter() , 1000);


