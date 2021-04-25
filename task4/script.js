const link = document.querySelector('.link');

function changeHref() {
  link.textContent = prompt();
}

link.addEventListener('click', e => {
  e.preventDefault();
  changeHref();
});