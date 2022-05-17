const slidercontainer = document.querySelector(".slider-container");
const leftslide = document.querySelector(".left-slide");
const rightslide = document.querySelector(".right-slide");
const upbtn = document.querySelector(".up-button");
const downbtn = document.querySelector(".down-button");
const slideLenght = rightslide.querySelectorAll("div").length;

let currentActive = 0 ; 

leftslide.style.top = `${-300}vh` ;


upbtn.addEventListener("click",()=>changeSlide("up"));
downbtn.addEventListener("click",()=>changeSlide("down"));



const changeSlide = (direction)=>{

   
   const height = slidercontainer.clientHeight;
   
   if(direction==="up"){
      currentActive++;
      if(currentActive > slideLenght -1){
         currentActive = 0;
      }
   }else if(direction==="down"){
      currentActive--;
      if(currentActive < 0){
         currentActive = slideLenght -1 ;
      }
   }


    rightslide.style.transform = `translateY(-${currentActive * height}px)`
    leftslide.style.transform = `translateY(${currentActive * height}px)`

}


