export default class KeyboardView {
  _generateKbMarkup(btnValue) {
    switch (btnValue) {
      case 'shift':
        return `<button class="btn shift">⬆️</button>`;
      case 'delete':
        return `<button class="btn delete">⬅️</button>`;
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
        return `<button class="btn del">➡️</button>`;
      case 'enter':
        return `<button class="btn enter">↩️</button>`;
      default:
        return `<button class="btn letter ${btnValue}">${btnValue}</button>`;
    }
  }

  renderKeyboard(values) {
    values.forEach(btnValue => {
      this._parentElement.insertAdjacentHTML(
        'beforeend',
        this._generateKbMarkup(btnValue)
      );
    });
  }
}
