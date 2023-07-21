export default function Model() {
  let _onToDoChange = () => {};
  let _todos = JSON.parse(localStorage.getItem("todos")) || [];
  const pushTodos = (todos) => {
    _onToDoChange(_todos);
    localStorage.setItem("todos", JSON.stringify(_todos));
  };

  const getTodos = () => _todos;

  const addTodo = (text) => {
    const todo = {
      id: _todos.length > 0 ? _todos[_todos.length - 1].id + 1 : 1,
      text,
      completed: false,
    };
    _todos.push(todo);
    //_onToDoChange(_todos);
    pushTodos(_todos);
  };

  const removeTodo = (id) => {
    _todos = _todos.filter((todo) => todo.id !== id);
    //_onToDoChange(_todos); -> ersetzt durch pushTodos(_todos);
    pushTodos(_todos);
  };

  const editTodo = (id, text) => {
    _todos = _todos.map((todo) => {
      if (todo.id !== id) return todo;
      return { ...todo, text };
    });
    pushTodos(_todos);
  };

  const toggleTodo = (id) => {
    console.log(id, typeof id);
    _todos = _todos.map((todo) => {
      if (todo.id !== id) return todo;
      return { ...todo, completed: !todo.completed };
    });
    pushTodos(_todos);
  };

  const bindTodoChanged = (callback) => {
    _onToDoChange = callback;
  };

  return {
    addTodo,
    removeTodo,
    editTodo,
    toggleTodo,
    getTodos,
    bindTodoChanged,
  };
}
