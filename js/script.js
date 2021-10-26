var swiper = new Swiper(".swiper-container", {
  freeMode: false,
  slidesPerView: "auto",
  grabCursor: true,
});
var tl = gsap.timeline();
tl.from("header .logo", 1, {
  y: -1000,
  opacity: 0,
});
tl.from("header ul li a", 1, {
  y: -1000,
  opacity: 0,
  stagger: 0.2,
});
tl.from(".elmt", 1, {
  y: 500,
  opacity: 0,
  stagger: 0.1,
});
tl.from(".swiper-slide", 1, {
  y: 800,
  opacity: 0,
  stagger: 0.2,
});
