import Controller from "./modules/Controller.js";
import Model from "./modules/Model.js";
import View from "./modules/View.js";

const app = Controller(Model(), View());
// console.log(app.model.addTodo("Hallo Todo"));
// console.log(app.model.getTodos());
