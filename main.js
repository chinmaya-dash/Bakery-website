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



let currentSlide = 0;

function changeSlide(n) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    currentSlide = (currentSlide + n + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}
window.changeSlide=changeSlide;




// review mapping data
const testimonialsData = [
  {
    id: 1,
    name: "chinmaya dash",
    rating: 4, 
    review: "This is a great place and a must-try for biscuits and cakes. The ambiance is cozy, and the staff is friendly.",
    img: "path/to/image1.jpg", 
  },
  {
    id: 2,
    name: "John Doe",
    rating: 5,
    review: "I had an amazing experience at this place. The food was delicious, and the service was impeccable.",
    img: "path/to/image2.jpg",
  },
  {
    id: 3,
    name: "Jane Smith",
    rating: 3,
    review: "The atmosphere was pleasant, but the food quality could be improved. It's an average experience overall.",
    img: "path/to/image3.jpg",
  },
  {
    id: 4,
    name: "Sam Johnson",
    rating: 4,
    review: "Visited with friends and enjoyed every moment. The staff was accommodating, and the menu had a variety of options.",
    img: "path/to/image4.jpg",
  },
  {
    id: 5,
    name: "Emily White",
    rating: 2,
    review: "Not satisfied with the products. The taste was below expectations, and the prices were on the higher side.",
    img: "path/to/image5.jpg",
  },
  {
    id: 6,
    name: "Alex Green",
    rating: 5,
    review: "Had a wonderful time at this place. The food was top-notch, and the atmosphere was perfect for a relaxing evening.",
    img: "path/to/image6.jpg",
  }
];



const reviewdiv = document.querySelector(".slides");
const viewreview = testimonialsData.map((item, index) => {
    return `
    <div class="slide">
    <div class="testimonial">
      <div class="revcontainer">
        <div class="showrSlide fade">
          <div class="cot">
            <div class="profilepic">
              <img src="${item.img}" alt="invalid">
            </div>
            <div class="flexb_star">
              ${Array.from({ length: item.rating }, (_, index) => (
                `<span key=${index} class="material-icons star">star</span>`
              )).join('')}
            </div>
          </div>
          <p id="name">${item.name}</p>
          <p>${item.review}</p>
        </div>
      </div>
    </div>
  </div>
`
});

reviewdiv.innerHTML = viewreview.join("");
