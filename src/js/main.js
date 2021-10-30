import * as data from './data.js';
import keyboardLetters from './views/keyboardLetters.js';
import keyboardEmojis from './views/keyboardEmojis.js';
import messageView from './views/messageView.js';

// Rendering the emoji icon button when the page loads
window.addEventListener('load', keyboardEmojis.renderIcon('emoji-icon'));

// Rendering the keyboard with letters
keyboardLetters.renderKeyboard(data.letterBtnValues);
// Writing the letters from the buttons to the input area
keyboardLetters.writeLettersToInput();

// Switch from letters keyboard to symbols or emojis and vice versa
keyboardLetters.switchKbSymbols(data.symbolBtnValues, data.letterBtnValues);
keyboardEmojis.switchKbEmoji(data.emojiBtnValues, data.letterBtnValues);

// Switching uppercase and lowercase
keyboardLetters.upperOndblclickShift();
keyboardLetters.upperOnclickShift();

// Render the messages into the message area
messageView.renderMessage();
