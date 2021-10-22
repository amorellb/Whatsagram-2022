import * as buttons from './keyboardButtons.js';
import keyboardLetters from './views/keyboardLetters.js';
import keyboardEmojis from './views/keyboardEmojis.js';
import messageView from './views/messageView.js';

window.addEventListener('load', keyboardEmojis.renderIcon('emoji-icon'));

keyboardLetters.renderKeyboard(buttons.letterBtnValues);
keyboardLetters.writeLettersToInput();

keyboardLetters.switchKbSymbols(
  buttons.symbolBtnValues,
  buttons.letterBtnValues
);
keyboardEmojis.switchKbEmoji(buttons.emojiBtnValues, buttons.letterBtnValues);
messageView.renderMessage();

keyboardLetters.upperOndblclickShift();
keyboardLetters.upperOnclickShift();
