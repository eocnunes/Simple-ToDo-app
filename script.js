const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
  TODO_EDIT: 'todo-edit'
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  let task = prompt("Enter a new task:");
  if (task) makeTodo(task);

  countItem(itemCountSpan);
  countUnchecked(uncheckedCountSpan);
}

function makeTodo(text) {

  let item = document.createElement('li');
  item.setAttribute('class', classNames.TODO_ITEM);

  let check = document.createElement('INPUT');
  check.setAttribute('type', 'checkbox');
  check.setAttribute('id', 'click');
  check.setAttribute('class', classNames.TODO_CHECKBOX);
  check.addEventListener("click", function(){
    countUnchecked(uncheckedCountSpan);
  })
  item.appendChild(check);

  let node = document.createElement('span');
  node.setAttribute('class', classNames.TODO_TEXT);
  node.innerHTML = text;
  item.appendChild(node);

  let del = document.createElement('INPUT');
  del.setAttribute('type', 'button');
  del.setAttribute('class', classNames.TODO_DELETE);
  del.addEventListener("click", function() {
    list.removeChild(item);
    countItem(itemCountSpan);
    countUnchecked(uncheckedCountSpan);
  })
  item.appendChild(del);

  list.appendChild(item);
}

function countItem(count) {
  count.innerHTML = String(document.querySelectorAll('input[type="checkbox"]').length);
}

function countUnchecked(count) {
  count.innerHTML = String(document.querySelectorAll('input[type="checkbox"]:not(:checked)').length);
}

/*
> Edit button
let edit = document.createElement('INPUT');
edit.setAttribute('type', 'button');
edit.setAttribute('class', classNames.TODO_EDIT);
edit.addEventListener("click", function() {
  let regSpan = /<span.+?\<\/span\>/;
  let value = regSpan.exec(item.innerHTML);
  let newTask = prompt("Edit you task:", value.toString().replace(/<\/?span>/g,''));
  item.innerHTML.replace(/<span.+?\<\/span\>/g, `<span>${newTask}</span>`);
})
item.appendChild(edit);
*/
