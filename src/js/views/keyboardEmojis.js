import KeyboardView from './KeyboardView.js';

/**
 * A class that contains the all properties and methods for the emojis keyboard
 */
class KeyboardEmojis extends KeyboardView {
  _parentElement = document.querySelector('.keyboard-container');
  _iconContainer = document.querySelector('.icon-container');

  /**
   * A private method to generate the button elements that will contain the emojis.
   * @param {String} btnValue A string representing the vale of the button.
   * @returns A string of the button tag with the classes btn, emojis and the button value.
   */
  _generateEKbMarkup(btnValue) {
    if (!btnValue) return;
    return `<button class="btn emojis ${btnValue}">${btnValue}</button>`;
  }

  /**
   * A private method to generate the image element that will contain the emoji or keyboard icon.
   * @param {String} iconType A string that represents the name of the icon. It could be, emoji-icon or keyboard-icon.
   * @returns A string of the img tag with the classes icon and iconType. The src and alt will depend on the iconType.
   */
  _generateIconMarkup(iconType) {
    if (!iconType) return;
    return `
    <img
      class="icon ${iconType}"
      src="src/img/${iconType}.png"
      alt="${iconType}"
    />`;
  }

  /**
   * A private method to render all the buttons within the keyboard area.
   * @param {Array} values An array containing all the emoji values.
   */
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

  /**
   * A method to render the icon used as a button to switch between the letters keyboard and the emojis keyboard.
   * @param {String} icon A string telling which icon to render. It could be emoji-icon or keyboard-icon.
   */
  renderIcon(icon) {
    if (!icon) return;
    this._iconContainer.innerHTML = this._generateIconMarkup(icon);
  }

  /**
   * A method to switch between the letters keyboard and the emojis keyboard. It will render one or the other depending
   * on the parameters passed.
   * @param {Array} emojis An array containing all the emoji values.
   * @param {Array} letters An array containing all the letters values.
   */
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
