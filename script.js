const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list');
const itemCountSpan = document.getElementById('item-count');
const uncheckedCountSpan = document.getElementById('unchecked-count');

function newTodo() {
  alert("New TODO button clicked!");
  let item = document.createElement('li');
  item.setAttribute('class', 'todo-container');
  let node = document.createTextNode("test");
  item.appendChild(node);

  let element = document.querySelector('.todo-list');
  element.appendChild(item);
}
