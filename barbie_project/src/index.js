import ImageLoader from "./components/BarbieAndKen/ImageLoader.js";
import Hamburger from "./components/Header/Hamburger.js";
import Initializer from "./components/helpers/Initializer.js";

class App {
  static Run() {
    this.initElement();
  }

  static initElement() {
    this._components.forEach((component) => {
      Initializer._initComponent(component);
    });
  }

  static get _components() {
    return [Hamburger, ImageLoader];
  }
}

document.addEventListener("DOMContentLoaded", () => {
  App.Run();
});