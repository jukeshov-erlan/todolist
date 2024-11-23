const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

function addDutie() {
  let inputValue = document.querySelector('.js-input').value;
  let inputDateValue = document.querySelector('.js-input-date').value;

  if (!inputValue || !inputDateValue) {
    alert('Please fill the fields');
    return;
  }

  const dutieObject = {name: inputValue, date: inputDateValue};
  todoList.push(dutieObject);

  localStorage.setItem('todoList', JSON.stringify(todoList));

  inputValue = document.querySelector('.js-input').value = '';
  inputDateValue = document.querySelector('.js-input-date').value = '';

  displayDutie();
}

function displayDutie() {
  let div = '';
  for (i = 0; i < todoList.length; i++) {
    const dutie = `
    <p class="dutie">${todoList[i].name}</p>
    <p class="dutie">${todoList[i].date}</p>
    <button class="dutie-button" onclick="deleteDutie();">Delete</button>`;
    div += dutie;
  }
  document.querySelector('.display-dutie').innerHTML = div;
}

function deleteDutie(index) {
  todoList.splice(index, 1);
  localStorage.setItem('todoList', JSON.stringify(todoList));
  displayDutie();
}

function keyDown(event) {
  if (event.key === 'Enter') {
    addDutie();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  displayDutie();
})
