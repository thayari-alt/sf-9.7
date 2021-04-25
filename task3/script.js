const lights = Array.from(document.querySelectorAll('.trafficLight'));

lights.forEach(element => {
  element.addEventListener('click', changeColor);
});

function changeColor() {
  if (lights[0].classList.contains('colored')) {
    addColor(lights[1]);
  } else if (lights[1].classList.contains('colored')) {
    addColor(lights[2]);
  } else if (lights[2].classList.contains('colored') || !document.querySelector('.colored')) {
    addColor(lights[0]);
  }
}

function addColor(element) {
  element.classList.add('colored');
  removeColor(lights.filter(elem => elem != element));
}

function removeColor(elements) {
  elements.forEach(el => el.classList.remove('colored'));
}