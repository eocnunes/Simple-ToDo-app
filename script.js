const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.querySelector('.todo-list');
const itemCountSpan = document.querySelector('.item-count');
const uncheckedCountSpan = document.querySelector('.unchecked-count');

function newTodo() {
  let item = document.createElement('li');
  item.setAttribute('class', classNames.TODO_ITEM);

  let check = document.createElement("INPUT");
  check.setAttribute('type', 'checkbox');
  check.setAttribute('class', classNames.TODO_CHECKBOX);
  // check.onclick = function () {
  //   itemCount = Number(itemCountSpan.innerHTML);
  //   itemCount--;
  //   itemCountSpan.innerHTML = String(itemCount);
  // }
  item.appendChild(check);

  let node = document.createTextNode(prompt("Enter a new task:"));
  item.appendChild(node);

  let del = document.createElement("INPUT");
  del.setAttribute('type', 'button');
  del.setAttribute('class', classNames.TODO_DELETE);
  del.onclick = function () { list.removeChild(item); }
  item.appendChild(del);

  list.appendChild(item);

  
}
