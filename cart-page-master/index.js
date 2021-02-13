const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

const navLeft = menu.getBoundingClientRect().left;

hamburger.addEventListener("click", () => {
  if (navLeft < 0) {
    menu.classList.toggle("show");
  }
});


ClickedDot = (count) => {
  SwitchActiveDot(count);
  shoe3D = document.getElementById('3d-dom');
  shoe_img = document.getElementById("shoe-img")
  show_figure = document.getElementById("show-figure")
  
  if(count === 1){
   //SWITCH TO 3D
    shoe3D.classList.remove("off")
    shoe_img.classList.add   ("off")
    show_figure.add("off")
    
  }  else {
    //SWITCH TO IMAGE

    shoe3D.classList.add("off")
    shoe_img.classList.remove ("off")
    show_figure.classList.remove ("off")
  }
}

SwitchActiveDot = (count) => {
  if(count === 1){

    document.getElementById("dot-1").classList.remove("active");
    document.getElementById("dot-2").classList.add("active");
  }else{
    document.getElementById("dot-1").classList.add("active");
    document.getElementById("dot-2").classList.remove("active");

  }

}

gsap.from(".logo", { opacity: 0, duration: 1, delay: 0.5, y: -10 });
gsap.from(".hamburger", { opacity: 0, duration: 1, delay: 0.5, y: -10 });
gsap.from(".cart", { opacity: 0, duration: 1, delay: 1, x: -10 });
gsap.from(".shoe-figure", { opacity: 0, duration: 1, delay: 1.5, x: -100 });
gsap.from(".shoe-img", { opacity: 0, duration: 1, delay: 2, y: -50 });
gsap.from(".dots", { opacity: 0, duration: 1, delay: 2.2, y: 50 });
gsap.from(".shoe-info", { opacity: 0, duration: 1, delay: 2.5, y: -50 });
gsap.from(".size", { opacity: 0, duration: 1, delay: 3, x: -100 });
gsap.from(".count", { opacity: 0, duration: 1, delay: 3, x: 100 });
gsap.from(".price-title", { opacity: 0, duration: 1, delay: 3.5, y: 50 });
gsap.from(".price-button", { opacity: 0, duration: 1, delay: 3.5, y: -50 });
gsap.from(".nav-item", {
  opacity: 0,
  duration: 1,
  delay: 1.2,
  y: 30,
  stagger: 0.2,
});
