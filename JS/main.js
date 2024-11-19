import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: "3000",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const countdown = () => {
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  let hours = parseInt(hoursEl.textContent);
  let minutes = parseInt(minutesEl.textContent);
  let seconds = parseInt(secondsEl.textContent);

  const interval = setInterval(() => {
    if (seconds > 0) {
      seconds--;
    } else if (minutes > 0) {
      seconds = 59;
      minutes--;
    } else if (hours > 0) {
      seconds = 59;
      minutes = 59;
      hours--;
    } else {
      clearInterval(interval);
      alert("Kun mahsuloti vaqti tugadi!");
    }

    hoursEl.textContent = hours.toString().padStart(2, "0");
    minutesEl.textContent = minutes.toString().padStart(2, "0");
    secondsEl.textContent = seconds.toString().padStart(2, "0");
  }, 1000);
};

countdown();

///////////////////

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const navTwo = document.querySelector(".nav-two");
  let lastScrollTop = 0;

  window.addEventListener("scroll", () => {
    const currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
      header.classList.add("hidden");
    } else {
      header.classList.remove("hidden");
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });
});
//////////////////////////////////////////

let elementClass = document.querySelector(".products");

let APIPRODUCT = "http://localhost:5000/products";

fetchProducts();

async function fetchProducts() {
  let apiRes = await fetch(APIPRODUCT);
  let apiJson = await apiRes.json();
  let products = apiJson.data;

  products.forEach(async (item) => {
    let newEl = await createProduct(item);
    elementClass.appendChild(newEl);
  });
}

async function createProduct(data) {
  console.log(data.image);
  let card = document.createElement("div");
  card.classList.add("product-royxat");
  card.innerHTML = `       <a href="/pages/product-details.html?id=${data.id}"> 
        <div class="imgcard">
          <img class="img-photo" src="${data.image}" alt="">
          <div class="club-img">
            <img src="./images/love-svgrepo-com.svg" alt="" class="iconka">
            <img src="./images/statistics-svgrepo-com.svg" alt="" class="iconka">
          </div>
        
        </div>
        <div class="texts">
          <p class="name-product">${data.name}</p>
          <p class="price">${data.price} so'm</p>
          <p class="muddatli-tolov">${parseInt(data.price / 12)} so'm x 12oy</p>
          <div class="btnlar-sotuv">
            <button class="korzinka-btn"><img src="./images/basket-svgrepo-com.svg" alt=""></button>
            <button class="muddatli-btn">Muddatli to'lov</button>
        
          </div>
        </div>
      </a>

  `;
  return card;
}
