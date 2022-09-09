import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');

const USER_KEY = 'feedback-form-state';

let formData = {};

formRef.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(event) {
  formData[event.target.name] = event.target.value;

  localStorage.setItem(USER_KEY, JSON.stringify(formData));
}

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  formRef.reset();
  localStorage.removeItem(USER_KEY);
  console.log(formData);
  formData = {};
}

function restoreFormData() {
  const message = localStorage.getItem(USER_KEY);

  if (message) {
    formData = JSON.parse(message);
    formRef.email.value = formData.email || '';
    formRef.message.value = formData.message || '';
  }
}

restoreFormData();