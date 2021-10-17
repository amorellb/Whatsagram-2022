export default class KeyboardView {
  renderKeyboard(values) {
    values.forEach(btnValue => {
      this._parentElement.insertAdjacentHTML(
        'beforeend',
        this._generateKbMarkup(btnValue)
      );
    });
  }
}
