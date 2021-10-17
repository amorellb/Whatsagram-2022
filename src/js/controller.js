import * as model from './model.js';
import keyboardLetters from './views/keyboardLetters.js';
import keyboardEmojis from './views/keyboardEmojis.js';
import messageView from './views/messageView.js';

window.addEventListener('load', keyboardEmojis.renderIcon('emoji-icon'));
window.addEventListener('load', messageView.renderDay());

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

switchKbEmoji();
messageView.renderMessage();
