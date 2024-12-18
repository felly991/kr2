export default class Component {
  constructor() {
    if (new.target === Component) {
      throw new Error("Cannot instantiate Abstract Class directly");
    }
    this._element = null;
  }

  getTemplate() {
    throw new Error("Abstract method not implemented: getTemplate");
  }

  getElement() {
    if (!this._element) {
      this._element = this.createElement(this.getTemplate());
    }
    return this._element;
  }

  createElement(template) {
    const newElement = document.createElement("div");
    newElement.innerHTML = template;
    return newElement.firstElementChild;
  }

  removeElement() {
    this._element = null;
  }
}
