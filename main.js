const bakeryItems = [
  {
    id: "1",
    img: "./src/croissant.jpg",
    title: "Croissant",
    description: "A flaky and buttery French pastry.",
    price: 345, // Changed from "$2.50" to 345
    rate: 4.5,
    reviews: 56,
  },
  {
    id: "2",
    img: "./src/baguette.jpg",
    title: "Baguette",
    description: "A classic French bread with a crispy crust.",
    price: 345, // Changed from "$3.00" to 345
    rate: 4.0,
    reviews: 42,
  },
  {
    id: "3",
    img: "./src/cupcake.jpg",
    title: "Cupcake",
    description: "Delicious cupcakes in various flavors.",
    price: 345, // Changed from "$2.00" to 345
    rate: 4.8,
    reviews: 65,
  },
  {
    id: "4",
    img: "./src/doughnot.jpg",
    title: "Doughnut",
    description: "Soft and sweet doughnuts with various toppings.",
    price: 345, // Changed from "$1.50" to 345
    rate: 4.2,
    reviews: 38,
  },
  {
    id: "5",
    img: "./src/applepie.jpg",
    title: "Apple Pie",
    description: "Classic apple pie with a buttery crust.",
    price: 345, // Changed from "$4.50" to 345
    rate: 4.7,
    reviews: 50,
  },
  {
    id: "6",
    img: "./src/cinnamon-roll.jpg",
    title: "Cinnamon Roll",
    description: "Warm and gooey cinnamon rolls with icing.",
    price: 345, // Changed from "$2.75" to 345
    rate: 4.6,
    reviews: 60,
  },
  {
    id: "7",
    img: "./src/danish-pastry.jpg",
    title: "Danish Pastry",
    description: "Layers of flaky pastry with sweet fillings.",
    price: 345, // Changed from "$3.25" to 345
    rate: 4.4,
    reviews: 48,
  },
  {
    id: "8",
    img: "./src/chocolate-cake.jpg",
    title: "Chocolate Cake",
    description: "Rich and moist chocolate cake for chocolate lovers.",
    price: 345, // Changed from "$5.00" to 345
    rate: 4.9,
    reviews: 70,
  },
  {
    id: "9",
    img: "./src/sourdough-bread.jpg",
    title: "Sourdough Bread",
    description: "Artisanal sourdough bread with a chewy crust.",
    price: 345, // Changed from "$3.50" to 345
    rate: 4.3,
    reviews: 55,
  },
  {
    id: "10",
    img: "./src/blueberry-muffin.jpg",
    title: "Blueberry Muffin",
    description: "Moist and fruity muffins with blueberries.",
    price: 345, // Changed from "$2.25" to 345
    rate: 4.7,
    reviews: 52,
  },
  {
    id: "11",
    img: "./src/pie.jpg",
    title: "Banana Pie",
    description: "Moist and fruity muffins with blueberries.",
    price: 345, // Changed from "$2.25" to 345
    rate: 4.7,
    reviews: 52,
  },
  {
    id: "12",
    img: "./src/Red-Velvet-Cake.jpg",
    title: "Blueberry Muffin",
    description: "Moist and fruity muffins with blueberries.",
    price: 345, // Changed from "$2.25" to 345
    rate: 4.7,
    reviews: 52,
  },
];


let cart = [];
// console.log("Script loaded");
const closebtn = document.querySelector("#close");
const openbtn = document.querySelector(".opencart");
const cartdisplay = document.querySelector(".viewcart_div");


const bitems = bakeryItems;
// console.log(bitems);

const cardct = document.querySelector(".cards");
const display = bitems.map((item, index) => {
  return `
    <div class="card">
<div class="img">
<img class="reviewimage" src="${item.img}" alt="">
</div>
<p>${item.rate}<span>(${item.reviews})</span></p>
<p>${item.title}</p>
<p></p>
<p><i class="uil uil-rupee-sign"></i> ${item.price}</p>
<div class="btn">
<button onclick="addToCart(${index})" id="btn" >Add to cart</button>
</div>
</div>
`
})

cardct.innerHTML = display.join("");



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
  if (slideIndex > slides.length) { slideIndex = 1 }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
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
window.changeSlide = changeSlide;




// review mapping data
const testimonialsData = [
  {
    id: 1,
    name: "jane pit",
    rating: 4,
    review: "This is a great place and a must-try for biscuits and cakes. The ambiance is cozy, and the staff is friendly.",
    img: "./src/jane.jpg",
  },
  {
    id: 2,
    name: "John Doe",
    rating: 5,
    review: "I had an amazing experience at this place. The food was delicious, and the service was impeccable.",
    img: "./src/johndoe.jpg",
  },
  {
    id: 3,
    name: "Jane Smith",
    rating: 3,
    review: "The atmosphere was pleasant, but the food quality could be improved. It's an average experience overall.",
    img: "./src/janesmith.jpg",
  },
  {
    id: 4,
    name: "Sam Johnson",
    rating: 4,
    review: "Visited with friends and enjoyed every moment. The staff was accommodating, and the menu had a variety of options.",
    img: "./src/sam.jpg",
  },
  {
    id: 5,
    name: "Emily White",
    rating: 2,
    review: "Not satisfied with the products. The taste was below expectations, and the prices were on the higher side.",
    img: "./src/emily.jpg",
  },
  {
    id: 6,
    name: "Alex Green",
    rating: 5,
    review: "Had a wonderful time at this place. The food was top-notch, and the atmosphere was perfect for a relaxing evening.",
    img: "./src/alex.jpg",
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
              <img class="reimg" src="${item.img}" alt="invalid">
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

// contact page
const inputs = document.querySelectorall(".contact-input");

inputs.forEach((ipt) => {
  ipt.addEventlistner("focus", () => {
    ipt.parentnode.classList.add("focous");
    ipt.parentnode.classList.add("not-empty");
  });
  ipt.addEventlistner("blur", () => {
    ipt.parentnode.classList.remove("focous");
  })
});



// Function to handle the "Add to Cart" button click

function addToCart(index) {
  // console.log(index);
  const selectedItem = bakeryItems[index];
  // Add the selectedItem to the cart array
  cart.push(selectedItem);
  updatenum()
  // console.log(cart);
  // Update the cart display
  updateCartDisplay();
}


// Function to update the cart display
function updateCartDisplay() {
  const cardShopping = document.querySelector(".itemwraper");
  const totalPriceElement = document.querySelector("#totalPrice");

  // Calculate the total price
  const total = cart.reduce((sum, item) => sum + item.price, 0);
console.log(total);
  const shop = cart.map((item, index) => {
    return `
    <div class="itemcov">
      <div class="itemlit">
        <p>${item.title}</p>
        <p><i class="uil uil-rupee-sign"></i> ${item.price}</p>
      </div>
      <div class="btnctn">
        <button class="removeit" data-index="${index}">remove</button>
      </div>
    </div>
    `;
  });

  cardShopping.innerHTML = shop.join("");
  // Update the total price display
  totalPriceElement.innerHTML = `<i class="uil uil-rupee-sign"></i> ${total}`;


  // Add click event listener to the "remove" buttons
  const removeButtons = document.querySelectorAll(".removeit");
  removeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const indexToRemove = parseInt(button.dataset.index, 10);
      removeFromCart(indexToRemove);
    });
  });
}

// Function to remove item from the cart
function removeFromCart(index) {
  // Remove the item from the cart array based on the index
  cart.splice(index, 1);
  updateDataIndexAttributes();
  updatenum()
  // Update the cart display
  updateCartDisplay();
}

function updateDataIndexAttributes() {
  const removeButtons = document.querySelectorAll(".removeit");
  removeButtons.forEach((button, index) => {
    button.dataset.index = index;
  });
}

function open_c() {
  cartdisplay.style.display = "block";
}
function close_c() {
  cartdisplay.style.display = "none";
}

function updatenum() {
  const cartno =document.querySelector(".num");
  cartno.innerText=cart.length;
}


const totalPriceElement = document.querySelector("#totalPrice");
totalPriceElement.innerHTML = `<i class="uil uil-rupee-sign"></i> 0`;