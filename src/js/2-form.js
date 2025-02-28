const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

// 🔹 Функція збереження стану у локальне сховище
const saveFormState = () => {
  const formData = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

// 🔹 Функція відновлення даних із сховища
const loadFormState = () => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    const { email, message } = JSON.parse(savedData);
    form.elements.email.value = email || '';
    form.elements.message.value = message || '';
  }
};

// 🔹 Функція обробки події submit
const handleSubmit = event => {
  event.preventDefault();

  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  if (!email || !message) {
    alert('Заповніть усі поля форми!');
    return;
  }

  console.log({ email, message });

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
};

// 🔹 Вішаємо слухачі подій
form.addEventListener('input', saveFormState);
form.addEventListener('submit', handleSubmit);

// 🔹 Відновлюємо дані при завантаженні сторінки
loadFormState();
