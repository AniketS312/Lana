// Scroller JS
new fullpage("#fullpage", {
  //options here
  anchors: [
    "section-1",
    "section-2",
    "section-3",
    "section-4",
    "section-5",
    "section-6",
  ],
  autoScrolling: true,
  scrollHorizontally: true,
  menu: ".nav",
  scrollingSpeed: 1000,
});

// Swiper JS initializetion
var swiper = new Swiper(".swiper-container", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  autoplay: {
    delay: 5000,
  },
  loop: true,
});

// Section 6 input form

const inputs = document.querySelectorAll("input").forEach((item) =>
  item.addEventListener("click", () => {
    item.setAttribute("value", " ");
  })
);
console.log(inputs);

const submitButton = document.querySelector("#submit");

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  submitButton.value = "Thank you!";
});

// Close mobile menu
const mobileItems = document.querySelectorAll("#item");
const mobileMenu = document.getElementById("mobile-menu");

mobileItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    mobileMenu.style.top = "-100%";
  });
});

// Open mobile menu - borrowed mobileMenu from above
const openButton = document.getElementById("open-menu");
openButton.addEventListener("click", function () {
  mobileMenu.style.top = "0";
  console.log("click");
});
