import * as data from './data.js';
import keyboardLetters from './views/keyboardLetters.js';
import keyboardEmojis from './views/keyboardEmojis.js';
import messageView from './views/messageView.js';

window.addEventListener('load', keyboardEmojis.renderIcon('emoji-icon'));

keyboardLetters.renderKeyboard(data.letterBtnValues);
keyboardLetters.writeLettersToInput();

keyboardLetters.switchKbSymbols(data.symbolBtnValues, data.letterBtnValues);
keyboardEmojis.switchKbEmoji(data.emojiBtnValues, data.letterBtnValues);
messageView.renderMessage();

keyboardLetters.upperOndblclickShift();
keyboardLetters.upperOnclickShift();
