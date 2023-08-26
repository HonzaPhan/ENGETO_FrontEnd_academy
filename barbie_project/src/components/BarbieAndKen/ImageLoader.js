import CustomComponent from "../Component.js";

class ImageLoader extends CustomComponent {
  static selector = ".column-photo"

  constructor(element) {
    super(element);
    this._containerElement = document
    this._init();
  }

  _init() {
    this._bindEvent();
  }

  _bindEvent() {
    this.photos.forEach((photo) => {
      photo.addEventListener("click", () => {
        this._updateImage(photo.src)
        this._updateTextImage(photo.alt)
      })
    })
  }

  _updateImage(actualImage) {
    this.expandedImage.src = actualImage
  }

  _updateTextImage(actualText) {
    this.expandImageText.innerHTML = actualText;
  }

  get photos() {
    return Array.from(this._containerElement.querySelectorAll(".column-photo"));
  }

  get expandedImage() {
    return this._containerElement.querySelector("#expandedImg");
  }

  get expandImageText() {
    return this._containerElement.querySelector("#imgText");
  }
}

export default ImageLoader;