const swiper = new Swiper(".keyvisual_wrap", {});
const swiper2 = new Swiper(".custom_slide", {
  slidesPerView: 5,
  loop: true,
  centeredSlides: true,
  spaceBetween: 67,
  autoplay: {
    delay: 1000,
  },
});

const askContents = document.querySelectorAll(".ask_content");
askContents.forEach((askContent) => {
  askContent.addEventListener("click", () => {
    askContent.classList.toggle("active");
  });
});
