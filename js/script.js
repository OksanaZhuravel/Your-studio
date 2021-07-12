let form = document.querySelector(".form");
let button = form.querySelector(".form__btn");
let youName = form.querySelector("[name=name]");
let email = form.querySelector("[name=email]");
let surname = form.querySelector("[name=surname]");
let message = form.querySelector("[name=message]");
let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

youName.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("Клик по ссылке name");
  button.classList.remove("form__btn--show");
});
email.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("Клик по ссылке email");
  if (storage) {
    email.value = storage;
    youName.focus();
  } else {
    email.focus();
  }
});
surname.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("Клик по ссылке surname");
  button.classList.remove("form__btn--show");
});

message.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("Клик по ссылке message");
  button.classList.remove("form__btn--show");
});

form.addEventListener("submit", function (evt) {
  if (!youName.value || !email.value) {
    evt.preventDefault();
    button.classList.add("form__btn--show");
    console.log("Нужно ввести имя и email");
    // alert("Нужно ввести имя и email");
    youName.focus();
  } else {
    if (isStorageSupport) {
      localStorage.setItem("email", email.value);
      button.classList.remove("form__btn--show");
    }
  }
});
