import * as model from './model.js';
import keyboardLetters from './views/keyboardLetters.js';
import keyboardEmojis from './views/keyboardEmojis.js';
import messageView from './views/messageView.js';

window.addEventListener('load', keyboardEmojis.renderIcon('emoji-icon'));

keyboardLetters.renderKeyboard(model.letterBtnValues);
keyboardLetters.writeLettersToInput();

const switchKbEmoji = function () {
  keyboardEmojis._iconContainer.addEventListener('click', e => {
    const icon = e.target.closest('.icon');
    keyboardEmojis.renderIcon(
      icon.classList.contains('emoji-icon') ? 'keyboard-icon' : 'emoji-icon'
    );
    keyboardEmojis._parentElement.innerHTML = '';
    if (icon.classList.contains('emoji-icon')) {
      keyboardEmojis.renderEmojiKeyboard(model.emojiBtnValues);
    } else {
      keyboardLetters.renderKeyboard(model.letterBtnValues);
    }
  });
};

const switchKbSymbols = function () {
  const keyboard = document.querySelector('.keyboard-container');
  keyboard.addEventListener('click', e => {
    const btn = e.target.closest('.btn');
    if (btn.classList.contains('symbols')) {
      keyboard.innerHTML = '';
      btn.classList.replace('symbols', 'letters');
      keyboardLetters.renderKeyboard(model.symbolBtnValues);
    } else if (btn.classList.contains('letters')) {
      keyboard.innerHTML = '';
      btn.classList.replace('letters', 'symbols');
      keyboardLetters.renderKeyboard(model.letterBtnValues);
    }
  });
};

switchKbSymbols();
switchKbEmoji();
messageView.renderMessage();
