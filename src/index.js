import throttle from 'lodash.throttle';

const STORAGE_KEY = 'massage';

const formRef = document.querySelector('.js-form');
const textareaRef = document.querySelector('.js-form textarea');

formRef.addEventListener('submit', onFormSubmit);
textareaRef.addEventListener('input', throttle(onTextareaInput, 300));

populateTextarea();

function onFormSubmit(e) {
  e.preventDefault();

  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onTextareaInput(e) {
  const value = e.target.value;
  localStorage.setItem(STORAGE_KEY, value);
}

function populateTextarea() {
  const saveMassage = localStorage.getItem(STORAGE_KEY);

  if (saveMassage) {
    textareaRef.value = saveMassage;
  }
}
