import { feedbackMsgs } from '../data.js';

class MessageView {
  _msgSection = document.querySelector('.messages-container');
  _daySection = document.querySelector('.msg-date-container');
  _textInput = document.querySelector('.text-input');
  _sendButton = document.querySelector('.send-icon');
  _checkMark = '';
  _date = new Date();
  // prettier-ignore
  _months = [
    'Jan', 'Feb', 'Mar',
    'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep',
    'Oct', 'Nov', 'Dec']
  _milliseconds = [2000, 3000, 4000, 5000];

  _renderDay() {
    try {
      const msgDate = document.querySelector('.msg-date');
      if (msgDate) return;
      this._daySection.insertAdjacentHTML(
        'afterbegin',
        `<p class='msg-date'>${
          this._months[this._date.getMonth()]
        } ${this._date.getDate()} ${this._date.getFullYear()}</p>`
      );
    } catch (err) {
      console.error(err);
    }
  }

  renderMessage() {
    try {
      const ms = this._getRandomMilliseconds(0, 5);
      this._sendButton.addEventListener('click', () => {
        if (
          this._textInput.value === '' ||
          this._textInput.value === ' ' ||
          this._textInput.value === '\n'
        ) {
          this._textInput.value = '';
          return;
        }
        const textToSend = this._textInput.value.replaceAll('\n', '<br>');
        this._renderDay();
        const date = new Date();
        this._msgSection.insertAdjacentHTML(
          'beforeend',
          `<div><p class='msg'>${textToSend}</p><p class="msg-hour">${date.getHours()}:${
            date.getMinutes() <= 9 ? '0' + date.getMinutes() : date.getMinutes()
          } </p></div>`
        );
        this._renderCheckMark(ms);
        this._renderFeedback(ms);
        this._textInput.value = '';
        this._msgSection.scrollTop = this._msgSection.scrollHeight;
      });
    } catch (err) {
      console.error(err);
    }
  }

  _renderCheckMark(ms) {
    try {
      const msg = document.querySelectorAll('.msg-hour');
      const index = msg.length - 1;
      setTimeout(function () {
        msg[index].insertAdjacentHTML('beforeend', '✓');
      }, ms);
      setTimeout(function () {
        msg[index].insertAdjacentHTML('beforeend', '✓');
      }, this._ms);
    } catch (err) {
      console.error(err);
    }
  }

  _renderFeedback(ms) {
    try {
      const msgSection = document.querySelector('.messages-container');
      const feedbackMsg = feedbackMsgs[this._getRandomInt(0, 41)];
      const date = new Date();
      setTimeout(function () {
        msgSection.insertAdjacentHTML(
          'beforeend',
          `<div class='msg-fb-container'><p class='msg'>${feedbackMsg}</p><p class="msg-hour">${date.getHours()}:${
            date.getMinutes() <= 9 ? '0' + date.getMinutes() : date.getMinutes()
          } </p></div>`
        );
        msgSection.scrollTop = msgSection.scrollHeight;
      }, ms + 1000);
    } catch (err) {
      console.error(err);
    }
  }

  _getRandomMilliseconds(min, max) {
    const randomInt = this._getRandomInt(min, max);
    return this._milliseconds[randomInt];
  }

  _getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}

export default new MessageView();
