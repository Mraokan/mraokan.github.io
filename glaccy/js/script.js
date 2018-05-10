// buttons
var catalog = document.querySelector(".main-nav-menu li:first-of-type a");
var search = document.querySelector(".main-nav-user-search");
var login = document.querySelector(".main-nav-user-login");
var cart = document.querySelector(".main-nav-user-cart");
var request = document.querySelector(".contacts-btn");
var close = document.querySelector(".modal-close");
// slider buttons
var slider1 = document.querySelector("label[for=main-slider-controls-1]");
var slider2 = document.querySelector("label[for=main-slider-controls-2]");
var slider3 = document.querySelector("label[for=main-slider-controls-3]");
// modals
var menu = document.querySelector(".modal-menu");
var searchModal = document.querySelector(".modal-search");
var loginModal = document.querySelector(".modal-login");
var cartModal = document.querySelector(".modal-cart");
var requestModal = document.querySelector(".modal-request");
// slider
var body = document.querySelector("body");

// ----------------------- MENU --------------------------

catalog.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (menu.classList.contains("modal-show")) {
    menu.classList.remove("modal-show");
  } else {
    menu.classList.add("modal-show");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (menu.classList.contains("modal-show")) {
      menu.classList.remove("modal-show");
    }
  }
});

// ---------------------- SEARCH --------------------------

search.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (searchModal.classList.contains("modal-show")) {
    searchModal.classList.remove("modal-show");
  } else {
    searchModal.classList.add("modal-show");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (searchModal.classList.contains("modal-show")) {
      searchModal.classList.remove("modal-show");
    }
  }
});

// ------------------------------- LOGIN ---------------------------

login.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (loginModal.classList.contains("modal-flex-show")) {
    loginModal.classList.remove("modal-flex-show");
  } else {
    loginModal.classList.add("modal-flex-show");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (loginModal.classList.contains("modal-flex-show")) {
      loginModal.classList.remove("modal-flex-show");
    }
  }
});

// --------------------------CART------------------------

cart.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (cartModal.classList.contains("modal-show")) {
    cartModal.classList.remove("modal-show");
  } else {
    cartModal.classList.add("modal-show");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (cartModal.classList.contains("modal-show")) {
      cartModal.classList.remove("modal-show");
    }
  }
});

// -------------------------------SLIDER---------------------------------

slider1.addEventListener("click", function (evt) {
  if (body.classList.contains("background-2")) {
    body.classList.remove("background-2");
    body.classList.add("background-1");
  } else if (body.classList.contains("background-3")) {
    body.classList.remove("background-3");
    body.classList.add("background-1");
  }
});

slider2.addEventListener("click", function (evt) {
  if (body.classList.contains("background-1")) {
    body.classList.remove("background-1");
    body.classList.add("background-2");
  } else if (body.classList.contains("background-3")) {
    body.classList.remove("background-3");
    body.classList.add("background-2");
  }
});

slider3.addEventListener("click", function (evt) {
  if (body.classList.contains("background-2")) {
    body.classList.remove("background-2");
    body.classList.add("background-3");
  } else if (body.classList.contains("background-1")) {
    body.classList.remove("background-1");
    body.classList.add("background-3");
  }
});

// ----------------------------- REQUEST -----------------------------------

request.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (requestModal.classList.contains("modal-show")) {
    requestModal.classList.remove("modal-show");
  } else {
    requestModal.classList.add("modal-show");
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  requestModal.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (requestModal.classList.contains("modal-show")) {
      requestModal.classList.remove("modal-show");
    }
  }
});