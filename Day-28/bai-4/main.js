var formEl = document.querySelector(".form");
var emailEls = document.querySelectorAll(".email");
var passwordEls = document.querySelectorAll(".password");
var nameEl = document.querySelector(".form-input .name");
var blurEmailEls = document.querySelectorAll(".blur-email");
var blurPasswords = document.querySelectorAll(".blur-password");
var blurNameEl = document.querySelector(".blur-name");

var btnEl = document.querySelector(".btn");
var btnHiddens = document.querySelectorAll(".btn-hidden");
var contentEl = document.querySelector(".content");
var btnLoginEl = document.querySelector(".btn-login");
console.log(btnLoginEl);
var formLoginEl = document.querySelector(".form-login");
console.log(formLoginEl);
var overlayLoginEl = document.querySelector(".overlay-login");
var closeLoginEl = document.querySelector(".close-login");
var btnActiveLogin = document.querySelector(".form__header .btn-login");
var btnActiveRegister = document.querySelector(".form__header .btn-register");
var formLoginClose = document.querySelector(".form__login");
var formRegisterClose = document.querySelector(".form-register");

console.log(btnActiveRegister);
// active đăng kí đăng nhập
btnActiveLogin.addEventListener("click", function (e) {
  e.preventDefault();
  btnActiveLogin.classList.add("active");
  btnActiveRegister.classList.remove("active");
  formRegisterClose.classList.add("close");
  formLoginClose.classList.remove("close");
  formRegisterClose.classList.remove("open");
});
btnActiveRegister.addEventListener("click", function (e) {
  e.preventDefault();
  btnActiveRegister.classList.add("active");
  btnActiveLogin.classList.remove("active");
  formLoginClose.classList.add("close");
  formRegisterClose.classList.add("open");
  formRegisterClose.classList.remove("close");
});
//  xử lí khi click vào đăng nhập
btnLoginEl.addEventListener("click", function () {
  formLoginEl.classList.add("open");
});
closeLoginEl.addEventListener("click", function () {
  formLoginEl.classList.remove("open");
});
// overlay
overlayLoginEl.addEventListener("click", function () {
  formLoginEl.classList.remove("open");
});
// khi có value thì blur phải mất đi
emailEls.forEach(function (emailEl, index) {
  emailEl.addEventListener("keyup", function () {
    if (emailEl.value !== "") {
      blurEmailEls[index].classList.remove("open");
    }
  });
});
passwordEls.forEach(function (passwordEl, index) {
  passwordEl.addEventListener("keyup", function () {
    if (passwordEl.value !== "") {
      blurPasswords[index].classList.remove("open");
    }
  });
});

nameEl.addEventListener("keyup", function () {
  if (nameEl.value !== "") {
    blurNameEl.classList.remove("open");
  }
});
// nếu có value thì không blur
var handlerBlur = function (
  inputEl,
  blurEmailEl,
  blurPassword,
  passwordEl,
  nameEl,
  blurNameEl
) {
  inputEl.addEventListener("blur", function () {
    if (inputEl.value === "") {
      blurEmailEl.classList.add("open");
      blurPassword.classList.add("open");
      inputEl.classList.add("border");
      passwordEl.classList.add("border");
      blurNameEl.classList.add("open");
      nameEl.classList.add("border");
    } else {
      blurEmailEl.classList.remove("open");
      blurPassword.classList.remove("open");
      inputEl.classList.remove("border");
      passwordEl.classList.remove("border");
      blurNameEl.classList.remove("open");
      nameEl.classList.remove("border");
    }
  });
};
emailEls.forEach(function (emailEl, index) {
  var blurEmailEl = blurEmailEls[index];
  var blurPassword = blurPasswords[index];
  var passwordEl = passwordEls[index];
  console.log(blurPassword);
  handlerBlur(
    emailEl,
    blurEmailEl,
    blurPassword,
    passwordEl,
    nameEl,
    blurNameEl
  );
  handlerBlur(
    passwordEl,
    blurEmailEl,
    blurPassword,
    passwordEl,
    nameEl,
    blurNameEl
  );
  handlerBlur(
    nameEl,
    blurEmailEl,
    blurPassword,
    passwordEl,
    nameEl,
    blurNameEl
  );
});

// lấy dữ liệu trong form
formEl.addEventListener("submit", function (e) {
  e.preventDefault();
  var emailValue = emailEl.value;
  var passwordValue = passwordEl.value;
  contentEl.innerHTML += `<h1>tài khoản : ${emailValue}</h1>`;
  contentEl.innerHTML += `<h1>mật khẩu : ${passwordValue}</h1>`;
});
// khi bấm vào hiện , sẽ hiện type = text , khi bấm ẩn type = password
btnHiddens.forEach(function (btnHidden, index) {
  var passwordEl = passwordEls[index];
  btnHidden.addEventListener("click", function (e) {
    e.preventDefault();
    emailEls[index].classList.remove("border");
    if (passwordEl.type === "password") {
      this.innerText = "ẨN";
      passwordEl.type = "text";
    } else if (passwordEl.type === "text") {
      passwordEl.type = "password";
      this.innerText = "Hiện";
    }
  });
});
