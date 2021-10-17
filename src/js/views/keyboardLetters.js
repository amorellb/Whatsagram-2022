import KeyboardView from './keyboardView.js';

class KeyboardLetters extends KeyboardView {
  _parentElement = document.querySelector('.keyboard-container');
  _textInput = document.querySelector('.text-input');

  _generateKbMarkup(btnValue) {
    switch (btnValue) {
      case 'shift':
        return `<button class="btn shift">⬆️</button>`;
      case 'delete':
        return `<button class="btn delete">⬅️</button>`;
      case 'symbols':
        return `<button class="btn symbols">?123</button>`;
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
        return `<button class="btn ${btnValue}">${btnValue}</button>`;
    }
  }

  writeLettersToInput() {
    this._textInput.value = '';
    this._parentElement.addEventListener('click', e => {
      const btn = e.target.closest('.btn');
      if (
        !btn ||
        btn.classList.contains('shift') ||
        btn.classList.contains('symbols')
      )
        return;
      if (btn.classList.contains('space')) {
        this._textInput.value += ' ';
      } else if (btn.classList.contains('C')) {
        this._textInput.value = '';
      } else if (btn.classList.contains('CE')) {
        this._textInput.value = this._deleteLastWord(this._textInput.value);
      } else if (btn.classList.contains('delete')) {
        this._textInput.value = this._textInput.value.slice(0, -1);
      } else if (btn.classList.contains('del')) {
        this._textInput.value = this._textInput.value.slice(
          1,
          this._textInput.value.length
        );
      } else if (btn.classList.contains('enter')) {
        this._textInput.value += ' ';
      } else {
        this._textInput.value += `${btn.textContent}`;
      }
    });
  }

  _deleteLastWord(inputString) {
    const array = inputString.split(' ');
    const arrayWithoutSpaces = array.filter(word => word !== '');
    arrayWithoutSpaces.pop();
    return arrayWithoutSpaces.join(' ');
  }
}

export default new KeyboardLetters();
