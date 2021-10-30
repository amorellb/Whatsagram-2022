/**
 * A class to generate the keyboard markup and render it. Its methods are inherited by other classes.
 */
export default class KeyboardView {
  /**
   * A private method to generate the buttons that will be rendered as a keyboard. Depending on the button value,
   * it will return an HTML element or another.
   * @param {String} btnValue A string that represents the button value.
   * @returns A HTML button element.
   */
  _generateKbMarkup(btnValue) {
    if (!btnValue) return;
    switch (btnValue) {
      case 'shift':
        return `<button class="btn shift">⇧</button>`;
      case 'delete':
        return `<button class="btn delete">⇦</button>`;
      case 'symbols':
        return `<button class="btn symbols">?123</button>`;
      case 'letters':
        return `<button class="btn letters">ABC</button>`;
      case 'comma':
        return `<button class="btn comma">,</button>`;
      case 'space':
        return `<button class="btn space"></button>`;
      case 'point':
        return `<button class="btn point">.</button>`;
      case 'C':
        return `<button class="btn C">C</button>`;
      case 'CE':
        return `<button class="btn CE">CE</button>`;
      case 'del':
        return `<button class="btn del">⇨</button>`;
      case 'enter':
        return `<button class="btn enter">⏎</button>`;
      default:
        return `<button class="btn letter ${btnValue}">${btnValue}</button>`;
    }
  }

  /**
   * A method that renders the keyboard buttons.
   * @param {Array} values An array that contains all the keyboard button values.
   */
  renderKeyboard(values) {
    try {
      if (!values) return;
      values.forEach(btnValue => {
        this._parentElement.insertAdjacentHTML(
          'beforeend',
          this._generateKbMarkup(btnValue)
        );
      });
    } catch (err) {
      console.error(err);
    }
  }
}
