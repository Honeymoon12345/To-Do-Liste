export default function Controller(model, view) {
  const onTodoChange = (todos) => {
    view.renderTodos(todos);
  };
  onTodoChange(model.getTodos());

  //handle add Todo
  const _handleAddTodo = (todoText) => {
    model.addTodo(todoText);
  };

  //handle remove Todo
  const _handleRemoveTodo = (id) => {
    model.removeTodo(id);
  };
  //handle edit todo
  const _handleEditTodo = (id, text) => {
    model.editTodo(id, text);
  };
  //handle toggle todo
  const _handleToggleTodo = (id) => {
    model.toggleTodo(id);
  };
  view.bindAddTodo(_handleAddTodo);
  view.bindDeleteTodo(_handleRemoveTodo);
  view.bindToggleTodo(_handleToggleTodo);
  view.bindEditTodo(_handleEditTodo);
  model.bindTodoChanged(onTodoChange);

  return {};
}
