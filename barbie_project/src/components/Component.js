class CustomComponent {
    constructor(el) {
        if (!(el instanceof HTMLElement)) {
            throw new Error('el is not an Element');
        }
        this._containerElement = el;
    }
}
export default CustomComponent;
