import * as card from "./api/bakeryItems.js";

const bitems=card.bakeryItems;

const cardct = document.querySelector(".cards");
const display = bitems.map((item, index) => {
    return `
    <div class="card">
<div class="img">
<img src="${item.img}" alt="">
</div>
<p>${item.rate}<span>(${item.reviews})</span></p>
<p>${item.title}</p>
<p></p>
<p>${item.price}</p>
<div class="btn">
<button id="btn" >Add to cart</button>
</div>
</div>
`
})

cardct.innerHTML=display.join("");



//home page sliding section
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

$(document).ready(function () {
 
  $('ul.navbar-nav > li')
          .click(function (e) {
      $('ul.navbar-nav > li')
          .removeClass('active');
      $(this).addClass('active');
  });
});
//home page sliding section

//Review page sliding section

var slide_index = 1;
displaySlides(slide_index);

function nextSlide(n) {
    displaySlides(slide_index += n);
}

function currentSlide(n) {
    displaySlides(slide_index = n);
}

function displaySlides(n) {
    var i;
    var slides = document.getElementsByClassName("showrSlide");
    if (n > slides.length) { slide_index = 1 }
    if (n < 1) { slide_index = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slide_index - 1].style.display = "block";
}



//Review page sliding section