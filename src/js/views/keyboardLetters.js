import KeyboardView from './KeyboardView.js';

class KeyboardLetters extends KeyboardView {
  _parentElement = document.querySelector('.keyboard-container');
  _textInput = document.querySelector('.text-input');
  _isUpper = false;
  _isUpperDbl = false;

  writeLettersToInput() {
    try {
      this._textInput.value = '';
      this._parentElement.addEventListener('click', e => {
        e.stopPropagation();
        const btn = e.target.closest('.btn');

        if (
          !btn ||
          btn.classList.contains('symbols') ||
          btn.classList.contains('letters') ||
          btn.classList.contains('shift') ||
          btn.classList.contains('capsLock')
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
          // Put the focus on the input when clicking any letter or symbol button
          this._textInput.focus();
          this._textInput.value += `${btn.textContent}`;
        }
      });
    } catch (err) {
      console.error(err);
    }
  }

  switchKbSymbols(symbols, letters) {
    try {
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
    } catch (err) {
      console.error(err);
    }
  }

  upperOndblclickShift() {
    try {
      this._parentElement.addEventListener('dblclick', e => {
        e.stopPropagation();
        const btn = e.target.closest('.btn');
        if (!btn) return;
        // shift dbl clicked while dbl clicked uppercase false, render uppercase
        if (btn.classList.contains('shift') && !this._isUpperDbl) {
          this._isUpper = true;
          this._isUpperDbl = true;
          this._renderUppercaseLetters();
          this._renderCapsLock();
        }
      });
    } catch (err) {
      console.error(err);
    }
  }

  upperOnclickShift() {
    try {
      this._parentElement.addEventListener('click', e => {
        e.stopPropagation();
        const btn = e.target.closest('.btn');
        if (!btn) return;
        // shift clicked while uppercase false, render uppercase
        if (btn.classList.contains('shift') && !this._isUpper) {
          this._isUpper = true;
          this._renderUppercaseLetters();
          // shift clicked while uppercase and dbl clicked uppercase true, render lowercase
        } else if (
          (btn.classList.contains('shift') ||
            btn.classList.contains('capsLock')) &&
          (this._isUpper || this._isUpperDbl)
        ) {
          this._isUpper = false;
          this._isUpperDbl = false;
          this._renderLowercaseLetters();
          this._renderShift();
        }
        // a letter clicked while uppercase true and dbl clicked uppercase false, render lowercase
        if (
          btn.classList.contains('letter') &&
          this._isUpper &&
          !this._isUpperDbl
        ) {
          this._isUpper = false;
          this._renderLowercaseLetters();
        }
      });
    } catch (err) {
      console.error(err);
    }
  }

  _renderCapsLock() {
    try {
      this._parentElement.childNodes.forEach(btn => {
        if (btn.classList.contains('shift')) {
          btn.classList.replace('shift', 'capsLock');
          btn.textContent = '⇪';
        }
      });
    } catch (err) {
      console.error(err);
    }
  }

  _renderShift() {
    try {
      this._parentElement.childNodes.forEach(btn => {
        if (btn.classList.contains('capsLock')) {
          btn.classList.replace('capsLock', 'shift');
          btn.textContent = '⇧';
        }
      });
    } catch (err) {
      console.error(err);
    }
  }

  _renderUppercaseLetters() {
    try {
      this._parentElement.childNodes.forEach(btn => {
        if (btn.classList.contains('letter')) {
          this._generateKbMarkup(
            (btn.textContent = btn.textContent.toUpperCase())
          );
        }
      });
    } catch (err) {
      console.error(err);
    }
  }

  _renderLowercaseLetters() {
    try {
      this._parentElement.childNodes.forEach(btn => {
        if (btn.classList.contains('letter')) {
          this._generateKbMarkup(
            (btn.textContent = btn.textContent.toLowerCase())
          );
        }
      });
    } catch (err) {
      console.error(err);
    }
  }

  _deleteLastWord(inputString) {
    try {
      const array = inputString.split(' ');
      const arrayWithoutSpaces = array.filter(word => word !== '');
      arrayWithoutSpaces.pop();
      return arrayWithoutSpaces.join(' ');
    } catch (err) {
      console.error(err);
    }
  }
}

export default new KeyboardLetters();
