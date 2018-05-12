var popup = document.querySelector(".modal-login");
var link = document.querySelector(".login-link");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var storage = localStorage.getItem("login");
var mapPopup = document.querySelector(".modal-map");
var mapLink = document.querySelector(".contacts .map-btn");
var mapClose = document.querySelector(".modal-map .modal-close");
// --------------- modal-login --------------- //
link.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
    } else {
        popup.classList.add("modal-show");
    }
    if (storage) {
        login.value = storage;
        password.focus();
    } else {
        login.focus();
    }
});
close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});
form.addEventListener("submit", function (evt) {
    if (!login.value || !password.value) {
        evt.preventDefault();
        popup.classList.add("modal-error");
    } else {
        localStorage.setItem("login", login.value);
    }
});
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
        }
    }
});
// --------------- modal-map --------------- //
mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
});
mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
});
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (mapPopup.classList.contains("modal-show")) {
            mapPopup.classList.remove("modal-show");
        }
    }
});