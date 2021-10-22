import KeyboardView from './KeyboardView.js';

class KeyboardEmojis extends KeyboardView {
  _parentElement = document.querySelector('.keyboard-container');
  _iconContainer = document.querySelector('.icon-container');

  _generateEKbMarkup(btnValue) {
    if (!btnValue) return;
    return `<button class="btn emojis ${btnValue}">${btnValue}</button>`;
  }

  _generateIconMarkup(iconType) {
    if (!iconType) return;
    return `
    <img
      class="icon ${iconType}"
      src="src/img/${iconType}.png"
      alt="${iconType}"
    />`;
  }

  _renderEmojiKeyboard(values) {
    try {
      if (!values) return;
      values.forEach(btnValue => {
        this._parentElement.insertAdjacentHTML(
          'beforeend',
          this._generateEKbMarkup(btnValue)
        );
      });
    } catch (err) {
      console.error(err);
    }
  }

  renderIcon(icon) {
    if (!icon) return;
    this._iconContainer.innerHTML = this._generateIconMarkup(icon);
  }

  switchKbEmoji(emojis, letters) {
    try {
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
    } catch (err) {
      console.error(err);
    }
  }
}

export default new KeyboardEmojis();
