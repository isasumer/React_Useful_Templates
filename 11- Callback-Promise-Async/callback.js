const todos = [
  { title: "todo1", desc: "arab temizliği" },
  { title: "todo2", desc: "araba yıkama" },
  { title: "todo3", desc: "balkon temizliği" },
];

let todoListEl = document.getElementById("todoList");

function todoList() {
  let todoItems = "";
  setTimeout(() => {
    todos.map((item) => {
      todoItems += `<li>
      <b>${item.title}</b>
      <p>${item.desc}</p>
      </li>
      `;
    });
    todoListEl.innerHTML = todoItems;
  }, 1000);
}

function newTodo(todo, callback) {
  setTimeout(() => {
    todos.push(todo);
    callback();
  }, 2000);
}
newTodo({ title: "todo4", desc: "eşini yemeğe çıkar" }, todoList);

todoList();
