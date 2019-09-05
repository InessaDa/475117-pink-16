var formBtn = document.querySelector('.form__button');
var req = document.querySelector('.form__modal--required');
var success = document.querySelector ('.form__modal--sended');
var closeReq = req.querySelector ('.form__modal--reqired-button');
var closeSuccess = success.querySelector('.form__modal--sended-button');
var reqSurname = document.querySelector('.form__personal-info--text-input[name="surname"');
var reqName = document.querySelector('.form__personal-info--text-input[name="name"]');
var reqMail = document.querySelector('.form__connect-info--text-input[type=email]');


  formBtn.addEventListener("click", function(_event) {
    event.preventDefault();
    if(!reqSurname.value || !reqName.value || !reqMail.value) {
    req.classList.remove('form__modal--close');
    } else {
      success.classList.remove('form__modal--close');
    }
  });


closeSuccess.addEventListener("click", function(_event) {
  success.classList.add('form__modal--close');
});

closeReq.addEventListener("click", function(_event) {
  req.classList.add('form__modal--close');
})

