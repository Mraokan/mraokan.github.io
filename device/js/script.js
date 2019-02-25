var slider1 = document.querySelector(".slider__item--first");
var slider2 = document.querySelector(".slider__item--second");
var slider3 = document.querySelector(".slider__item--third");
var sliderControl1 = document.querySelector(".controls__first");
var sliderControl2 = document.querySelector(".controls__second");
var sliderControl3 = document.querySelector(".controls__third");

var services1 = document.querySelector(".services__delivery");
var services2 = document.querySelector(".services__warranty");
var services3 = document.querySelector(".services__credit");
var servicesControl1 = document.querySelector(".services__button--delivery");
var servicesControl2 = document.querySelector(".services__button--warranty");
var servicesControl3 = document.querySelector(".services__button--credit");

var map = document.querySelector(".info__map");
var mapPopup = document.querySelector(".map-popup");
var mapClose = document.querySelector(".map-popup__close");

var writeUs = document.querySelector(".info__write-us");
var writeUsPopup = document.querySelector(".write-us");
var writeUsClose = document.querySelector(".write-us__close");

sliderControl1.addEventListener("click", function (evt) {
  if (slider2.classList.contains("block-show")) {
    slider2.classList.remove("block-show");
    sliderControl2.classList.remove("controls--active");
  } else if (slider3.classList.contains("block-show")) {
    slider3.classList.remove("block-show");
    sliderControl3.classList.remove("controls--active");
  };

  slider1.classList.add("block-show");
  sliderControl1.classList.add("controls--active");
});

sliderControl2.addEventListener("click", function (evt) {
  if (slider1.classList.contains("block-show")) {
    slider1.classList.remove("block-show");
    sliderControl1.classList.remove("controls--active");
  } else if (slider3.classList.contains("block-show")) {
    slider3.classList.remove("block-show");
    sliderControl3.classList.remove("controls--active");
  };

  slider2.classList.add("block-show");
  sliderControl2.classList.add("controls--active");
});

sliderControl3.addEventListener("click", function (evt) {
  if (slider1.classList.contains("block-show")) {
    slider1.classList.remove("block-show");
    sliderControl1.classList.remove("controls--active");
  } else if (slider2.classList.contains("block-show")) {
    slider2.classList.remove("block-show");
    sliderControl2.classList.remove("controls--active");
  };

  slider3.classList.add("block-show");
  sliderControl3.classList.add("controls--active");
});

servicesControl1.addEventListener("click", function (evt) {
  if (services2.classList.contains("block-show")) {
    services2.classList.remove("block-show");
    servicesControl2.classList.remove("services__button--active");
  } else if (services3.classList.contains("block-show")) {
    services3.classList.remove("block-show");
    servicesControl3.classList.remove("services__button--active");
  };

  services1.classList.add("block-show");
  servicesControl1.classList.add("services__button--active");
});

servicesControl2.addEventListener("click", function (evt) {
  if (services1.classList.contains("block-show")) {
    services1.classList.remove("block-show");
    servicesControl1.classList.remove("services__button--active");
  } else if (services3.classList.contains("block-show")) {
    services3.classList.remove("block-show");
    servicesControl3.classList.remove("services__button--active");
  };

  services2.classList.add("block-show");
  servicesControl2.classList.add("services__button--active");
});

servicesControl3.addEventListener("click", function (evt) {
  if (services1.classList.contains("block-show")) {
    services1.classList.remove("block-show");
    servicesControl1.classList.remove("services__button--active");
  } else if (services2.classList.contains("block-show")) {
    services2.classList.remove("block-show");
    servicesControl2.classList.remove("services__button--active");
  };

  services3.classList.add("block-show");
  servicesControl3.classList.add("services__button--active");
});

map.addEventListener("click", function (evt) {
  evt.preventDefault();

  mapPopup.classList.add("block-show");
});

mapPopup.addEventListener("click", function (evt) {
  mapPopup.classList.remove("block-show");
});

mapClose.addEventListener("click", function(evt) {
  evt.preventDefault();

  mapPopup.classList.remove("block-show");
});

writeUs.addEventListener("click", function (evt) {
  evt.preventDefault();

  writeUsPopup.classList.add("block-show");
});

writeUsClose.addEventListener("click", function(evt) {
  evt.preventDefault();

  writeUsPopup.classList.remove("block-show");
});
