import KeyboardView from './keyboardView.js';

class KeyboardLetters extends KeyboardView {
  _parentElement = document.querySelector('.keyboard-container');
  _textInput = document.querySelector('.text-input');
  _flagOnce = false;
  _flagTwice = false;

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

  writeLettersToInput() {
    this._textInput.value = '';
    this._parentElement.addEventListener('click', e => {
      const kbButtons = document.querySelectorAll('.btn');
      const btn = e.target.closest('.btn');

      if (
        !btn ||
        btn.classList.contains('symbols') ||
        btn.classList.contains('letters')
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
      } else if (btn.classList.contains('shift')) {
        //TODO: 1 click 1 upper, 2 clicks all upper
        console.log(btn);
        this._renderUppercaseLetters(kbButtons);
        // if (
        //   this._isShiftOnceClicked() &&
        //   this._isShiftTwiceClicked() &&
        //   this._checkCaseLetters(kbButtons) === 'upper'
        // )
        //   this._renderLowercaseLetters(kbButtons);
      } else {
        this._textInput.value += `${btn.textContent}`;
        // if (this._isShiftOnceClicked() && !this._isShiftTwiceClicked()) {
        //   this._renderLowercaseLetters(kbButtons);
        // }
      }
    });
  }

  _checkCaseLetters(buttons) {
    let letterCase = '';
    buttons.forEach(btn => {
      if (
        btn.classList.contains('letter') &&
        btn.textContent == btn.textContent.toUpperCase()
      ) {
        console.log('uppercase letters');
        letterCase = 'upper';
      }
      if (
        btn.classList.contains('letter') &&
        btn.textContent == btn.textContent.toLowerCase()
      ) {
        console.log('lowercase letters');
        letterCase = 'lower';
      }
    });
    console.log(letterCase);
    return letterCase;
  }

  //TODO: check if shift button is once clicked
  _isShiftOnceClicked() {
    let flagOnce = false;
    this._parentElement.addEventListener('click', e => {
      const btn = e.target.closest('.btn');
      if (btn.classList.contains('shift')) {
        if (btn.getAttribute('onclick') === 'true') {
          btn.setAttribute('onclick', null);
          flagOnce = false;
        } else {
          btn.setAttribute('onclick', 'true');
          flagOnce = true;
        }
      }
    });
    console.log('flagOnce: ' + flagOnce);
    return flagOnce;
  }

  //TODO: check if shift button is twice clicked
  _isShiftTwiceClicked() {
    let flagTwice = false;
    this._parentElement.addEventListener('dblclick', e => {
      const btn = e.target.closest('.btn');
      if (btn.classList.contains('shift')) {
        if (btn.getAttribute('ondblclick') === 'true') {
          btn.setAttribute('ondblclick', null);
          flagTwice = false;
        } else {
          btn.setAttribute('ondblclick', 'true');
          flagTwice = true;
        }
      }
    });
    console.log('flagTwice: ' + flagTwice);
    return flagTwice;
  }

  // TODO: To make shift static, put both functions in one with an if statement like: btn.textContent === btn.textContent.toUpperCase()
  _renderUppercaseLetters(buttons) {
    buttons.forEach(btn => {
      if (btn.classList.contains('letter'))
        this._generateKbMarkup(
          (btn.textContent = btn.textContent.toUpperCase())
        );
      console.log('upperRendered');
    });
  }

  _renderLowercaseLetters(buttons) {
    buttons.forEach(btn => {
      if (btn.classList.contains('letter'))
        this._generateKbMarkup(
          (btn.textContent = btn.textContent.toLowerCase())
        );
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
