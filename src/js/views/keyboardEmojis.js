import KeyboardView from './keyboardView.js';

class KeyboardEmojis extends KeyboardView {
  _parentElement = document.querySelector('.keyboard-container');
  _iconContainer = document.querySelector('.icon-container');

  _generateEKbMarkup(btnValue) {
    return `<button class="btn ${btnValue}">${btnValue}</button>`;
  }

  renderEmojiKeyboard(values) {
    values.forEach(btnValue => {
      this._parentElement.insertAdjacentHTML(
        'beforeend',
        this._generateEKbMarkup(btnValue)
      );
    });
  }

  _generateIconMarkup(iconType) {
    return `
    <img
      class="icon ${iconType}"
      src="src/img/${iconType}.png"
      alt="${iconType}"
    />`;
  }

  renderIcon(icon) {
    this._iconContainer.innerHTML = this._generateIconMarkup(icon);
  }
}

export default new KeyboardEmojis();
