const swiper = new Swiper(".keyvisual_wrap", {
  navigation: {
    nextEl: ".keyvisual_arrows-next",
    prevEl: ".keyvisual_arrows-prev",
  },
  pagination: {
    el: ".keyvisual_pagination",
    type: "bullets",
  },
  autoplay: {
    delay: 10000,
  },
  loop: true,
  speed: 1000,
});
const swiper2 = new Swiper(".custom_slide", {
  slidesPerView: 5,
  loop: true,
  centeredSlides: true,
  spaceBetween: 65,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
});

const askContents = document.querySelectorAll(".ask_content");
askContents.forEach((askContent) => {
  askContent.addEventListener("click", () => {
    askContent.classList.toggle("active");
  });
});
