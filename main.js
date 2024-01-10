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
<button id="btn">Add to cart</button>
</div>
`
})

cardct.innerHTML=display.join("");




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