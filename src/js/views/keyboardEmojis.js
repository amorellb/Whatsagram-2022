import KeyboardView from './keyboardView.js';

class KeyboardEmojis extends KeyboardView {
  _parentElement = document.querySelector('.keyboard-container');
  _iconContainer = document.querySelector('.icon-container');

  _generateEKbMarkup(btnValue) {
    return `<button class="btn ${btnValue}">${btnValue}</button>`;
  }

  _generateIconMarkup(iconType) {
    return `
    <img
      class="icon ${iconType}"
      src="src/img/${iconType}.png"
      alt="${iconType}"
    />`;
  }

  _renderEmojiKeyboard(values) {
    values.forEach(btnValue => {
      this._parentElement.insertAdjacentHTML(
        'beforeend',
        this._generateEKbMarkup(btnValue)
      );
    });
  }

  renderIcon(icon) {
    this._iconContainer.innerHTML = this._generateIconMarkup(icon);
  }

  switchKbEmoji(emojis, letters) {
    this._iconContainer.addEventListener('click', e => {
      const icon = e.target.closest('.icon');
      this.renderIcon(
        icon.classList.contains('emoji-icon') ? 'keyboard-icon' : 'emoji-icon'
      );
      this._parentElement.innerHTML = '';
      if (icon.classList.contains('emoji-icon')) {
        this._renderEmojiKeyboard(emojis);
      } else {
        this.renderKeyboard(letters);
      }
    });
  }
}

export default new KeyboardEmojis();
