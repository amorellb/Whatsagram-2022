import KeyboardView from './KeyboardView.js';

/**
 * A class that has all the properties and methods used by the letters keyboard.
 */
class KeyboardLetters extends KeyboardView {
  _parentElement = document.querySelector('.keyboard-container');
  _textInput = document.querySelector('.text-input');
  _isUpper = false;
  _isUpperDbl = false;

  /**
   * A method that will write the value of every letter from the buttons to the input element or do an action.
   * It will listen to a click event on the keyboard buttons and check if it is an especial button or a letter
   * and do an action that will be wite the letter to the input, delete, write a space or put a brake line.
   */
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
          this._textInput.focus();
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
          this._textInput.focus();
          this._textInput.value += '\n';
        } else {
          // Set the focus on the input when clicking any letter or symbol button
          this._textInput.focus();
          this._textInput.value += `${btn.textContent}`;
        }
      });
    } catch (err) {
      console.error(err);
    }
  }

  /**
   * A method to switch between the letters keyboard and the symbols keyboard. To do this, it will check for the button
   * class, then change it and finally render the certain keyboard in each case.
   * @param {Array} symbols An array containing all the symbols of the symbol keyboard.
   * @param {Array} letters An array containing all the letters of the letters keyboard.
   */
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

  /**
   * A method to change the letters case from lower to uppercase when the shift button is twice clicked and rendering
   * the uppercase letters permanently. It listens for a double click event on the shift button.
   * It works as a caps-lock button.
   */
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

  /**
   * A method to change the letters case from lower to uppercase and vice versa, depending on its state. If the letters
   * are in lower case, it will change them to upper case, and if they are in uppercase, it will switch to lowercase.
   * This function listens to a click event on the shift button.
   * It performs as a shift button.
   */
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
          // shift clicked while uppercase and dbl-clicked uppercase true, render lowercase
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
        // a letter clicked while uppercase true and dbl-clicked uppercase false, render lowercase
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

  /**
   * A private method to change the shift button icon to a caps-lock button icon.
   */
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

  /**
   * A private method to change the caps-lock button icon to a shift button icon.
   */
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

  /**
   * A private method to render the uppercase letters. It changes the button values to uppercase only if the buttons
   * contain the class letter.
   */
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

  /**
   * A private method to render the lowercase letters. It changes the button values to lowercase only if the buttons
   * contain the class letter.
   */
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

  /**
   * A private method used to delete the last word written into the input. It is used when the CE button is clicked.
   * @param {String} inputString
   * @returns
   */
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
