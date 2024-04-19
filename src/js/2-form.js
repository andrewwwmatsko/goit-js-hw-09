const form = document.querySelector('.feedback-form');
const textarea = form.elements.message;
const email = form.elements.email;

const localKey = 'feedback-form-state';

try {
  email.value = JSON.parse(localStorage.getItem(localKey)).email ?? '';
  textarea.value = JSON.parse(localStorage.getItem(localKey)).message ?? '';
} catch (error) {
  console.log(error.stack);
}

form.addEventListener('input', e => {
  const obj = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };
  localStorage.setItem(localKey, JSON.stringify(obj));
});

form.addEventListener('submit', e => {
  e.preventDefault();

  if (!e.target.elements.email.value || !e.target.elements.message.value) {
    alert('All fields must be filled out.');
    return;
  }
  console.log('Submitted Form:', {
    email: e.target.elements.email.value.trim(),
    message: e.target.elements.message.value.trim(),
  });
  localStorage.removeItem(localKey);
  form.reset();
});
