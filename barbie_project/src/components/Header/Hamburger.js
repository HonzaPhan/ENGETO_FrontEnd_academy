import CustomComponent from "../Component.js";

class Hamburger extends CustomComponent{
  static selector = ".hamburger";

  constructor(element) {
    super(element)
    this._containerElement = document
    this._init();
  }

  _init() {
    this._bindEvent();
  }

  _bindEvent() {
    this.hamburgerBtn.addEventListener("click", () => {this._toggleBtn()});
  }

  _toggleBtn() {
    this.hamburgerBtn.classList.toggle("is-active");
    this.navBar.classList.toggle("show-nav");
  }

  get hamburgerBtn() {
    return this._containerElement.querySelector(".hamburger");
  }

  get navBar() {
    return this._containerElement.querySelector(".navbar__menu")
  }
}

export default Hamburger;
