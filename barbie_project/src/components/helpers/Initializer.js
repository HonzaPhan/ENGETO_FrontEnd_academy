class Initializer {
    static _enumerator(selector, callbackFn) {
        const elements = Array.from(document.querySelectorAll(selector));
        elements.forEach((el) => callbackFn(el));
    }
    static _initComponent(Component) {
        this._enumerator(Component.selector, (el) => new Component(el));
    }
}

export default Initializer;