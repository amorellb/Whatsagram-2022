import KeyboardView from './KeyboardView.js';

class KeyboardLetters extends KeyboardView {
  _parentElement = document.querySelector('.keyboard-container');
  _textInput = document.querySelector('.text-input');
  _isUpper = false;
  _isUpperDbl = false;

  writeLettersToInput() {
    this._textInput.value = '';
    this._parentElement.addEventListener('click', e => {
      e.stopPropagation();
      const btn = e.target.closest('.btn');

      if (
        !btn ||
        btn.classList.contains('symbols') ||
        btn.classList.contains('letters') ||
        btn.classList.contains('shift')
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
        this._textInput.value += '\n';
      } else {
        this._textInput.value += `${btn.textContent}`;
      }
    });
  }

  switchKbSymbols(symbols, letters) {
    this._parentElement.addEventListener('click', e => {
      e.stopPropagation();
      const btn = e.target.closest('.btn');
      if (!btn) return;
      if (btn.classList.contains('symbols')) {
        this._parentElement.innerHTML = '';
        btn.classList.replace('symbols', 'letters');
        this.renderKeyboard(symbols);
      } else if (btn.classList.contains('letters')) {
        this._parentElement.innerHTML = '';
        btn.classList.replace('letters', 'symbols');
        this.renderKeyboard(letters);
      }
    });
  }

  upperOndblclickShift() {
    this._parentElement.addEventListener('dblclick', e => {
      e.stopPropagation();
      const btn = e.target.closest('.btn');
      if (!btn) return;
      // shift dbl clicked while dbl clicked uppercase false, render uppercase
      if (btn.classList.contains('shift') && !this._isUpperDbl) {
        this._isUpper = true;
        this._isUpperDbl = true;
        this._renderUppercaseLetters();
        console.log('isUpper: ' + this._isUpper);
        console.log('isUpperDbl: ' + this._isUpperDbl);
      }
    });
  }

  upperOnclickShift() {
    this._parentElement.addEventListener('click', e => {
      e.stopPropagation();
      const btn = e.target.closest('.btn');
      if (!btn) return;
      // shift clicked while uppercase false, render uppercase
      if (btn.classList.contains('shift') && !this._isUpper) {
        this._isUpper = true;
        this._renderUppercaseLetters();
        console.log('isUpper: ' + this._isUpper);
        // shift clicked while uppercase and dbl clicked uppercase true, render lowercase
      } else if (
        btn.classList.contains('shift') &&
        (this._isUpper || this._isUpperDbl)
      ) {
        this._isUpper = false;
        this._isUpperDbl = false;
        this._renderLowercaseLetters();
        console.log('isUpper: ' + this._isUpper);
        console.log('isUpperDbl: ' + this._isUpperDbl);
      }
      // a letter clicked while uppercase true and dbl clicked uppercase false, render lowercase
      if (
        btn.classList.contains('letter') &&
        this._isUpper &&
        !this._isUpperDbl
      ) {
        this._isUpper = false;
        this._renderLowercaseLetters();
        console.log('isUpper: ' + this._isUpper);
      }
    });
  }

  _renderUppercaseLetters() {
    this._parentElement.childNodes.forEach(btn => {
      if (btn.classList.contains('letter')) {
        this._generateKbMarkup(
          (btn.textContent = btn.textContent.toUpperCase())
        );
      }
    });
    console.log('upperRendered');
  }

  _renderLowercaseLetters() {
    this._parentElement.childNodes.forEach(btn => {
      if (btn.classList.contains('letter')) {
        this._generateKbMarkup(
          (btn.textContent = btn.textContent.toLowerCase())
        );
      }
    });
    console.log('lowerRendered');
  }

  _deleteLastWord(inputString) {
    const array = inputString.split(' ');
    const arrayWithoutSpaces = array.filter(word => word !== '');
    arrayWithoutSpaces.pop();
    return arrayWithoutSpaces.join(' ');
  }
}

export default new KeyboardLetters();
