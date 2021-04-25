const button = document.querySelector('.button');
const input = document.querySelector('.input');
const duplicateField = document.querySelector('#duplicateField');

input.addEventListener('keyup', () => {
  duplicateField.textContent = input.value;
})

button.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(input.value);
  duplicateField.textContent = '';
  input.value = '';
})