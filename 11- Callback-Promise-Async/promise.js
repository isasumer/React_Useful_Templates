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
  }, 0);
}

function newTodo(todo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      todos.push(todo);
      const e = false;
      if (!e) {
        resolve(todos);
      } else {
        reject("hatalı");
      }
    }, 1000);
  });
}
newTodo({ title: "todo4", desc: "eşini yemeğe çıkar" }).then((response) => {
  console.log(response);
  todoList();
});
