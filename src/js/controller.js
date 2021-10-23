import * as model from './model.js';
import keyboardLetters from './views/keyboardLetters.js';
import keyboardEmojis from './views/keyboardEmojis.js';
import messageView from './views/messageView.js';

window.addEventListener('load', keyboardEmojis.renderIcon('emoji-icon'));

keyboardLetters.renderKeyboard(model.letterBtnValues);
keyboardLetters.writeLettersToInput();

keyboardLetters.switchKbSymbols(model.symbolBtnValues, model.letterBtnValues);
keyboardEmojis.switchKbEmoji(model.emojiBtnValues, model.letterBtnValues);
messageView.renderMessage();

keyboardLetters.upperOndblclickShift();
keyboardLetters.upperOnclickShift();
