const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

const loadFormState = () => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    formData = JSON.parse(savedData);
    form.elements.email.value = formData.email || '';
    form.elements.message.value = formData.message || '';
  }
};

const saveFormState = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

const handleInput = event => {
  formData[event.target.name] = event.target.value.trim();
  saveFormState();
};

const handleSubmit = event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Заповніть усі поля форми!');
    return;
  }

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
  form.reset();
};

form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);

loadFormState();
