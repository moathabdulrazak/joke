import { JokesController } from "./Controllers/JokesController.js";

class App {
  // valuesController = new ValuesController();
  jokesController = new JokesController();
}

window["app"] = new App();
