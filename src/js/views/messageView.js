import { answerMsgs } from '../data.js';

/**
 * A class that has all the properties and methods used to generate and render the messages being sent.
 */
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
  _milliseconds = [
    1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000,
  ];

  /**
   * A private method to render the date up in the message area.
   */
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

  /**
   * A method to render the messages written into the input to the message area. It also renders the hour that the
   * message was sent, the check marks as a simulator of a real chat app, and random answers, given
   * the milliseconds of delay.
   */
  renderMessage() {
    try {
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
          `<div class='msg-sent'><p class='msg'>${textToSend}</p><p class="msg-hour">${date.getHours()}:${
            date.getMinutes() <= 9 ? '0' + date.getMinutes() : date.getMinutes()
          } </p></div>`
        );
        // Rendering check marks
        this._renderCheckMark(this._milliseconds[this._getRandomInt(0, 5)]);
        // Rendering random answers
        this._renderAnswer(this._milliseconds[this._getRandomInt(4, 11)]);
        this._textInput.value = '';
        this._msgSection.scrollTop = this._msgSection.scrollHeight;
      });
    } catch (err) {
      console.error(err);
    }
  }

  /**
   * A private method used to render the check marks at the end of the sent message
   * @param {Integer} ms An integer as the milliseconds of delay that will take to show the check marks.
   */
  _renderCheckMark(ms) {
    try {
      const msg = document.querySelectorAll('.msg-hour');
      const index = msg.length - 1;
      setTimeout(function () {
        msg[index].insertAdjacentHTML('beforeend', '✓');
      }, ms - 1000);
      setTimeout(function () {
        msg[index].insertAdjacentHTML('beforeend', '✓');
      }, ms);
    } catch (err) {
      console.error(err);
    }
  }

  /**
   * A private method used to render the simulated answers. Them will be as the user messages,
   * but without the check marks.
   * @param {Integer} ms An integer as the milliseconds of delay that will take to show the answers.
   */
  _renderAnswer(ms) {
    try {
      const msgSection = document.querySelector('.messages-container');
      const answerMsg = answerMsgs[this._getRandomInt(0, 40)];
      const date = new Date();
      setTimeout(function () {
        msgSection.insertAdjacentHTML(
          'beforeend',
          `<div class='msg-answer'><p class='msg'>${answerMsg}</p><p class="msg-hour">${date.getHours()}:${
            date.getMinutes() <= 9 ? '0' + date.getMinutes() : date.getMinutes()
          } </p></div>`
        );
        msgSection.scrollTop = msgSection.scrollHeight;
      }, ms + 1000);
    } catch (err) {
      console.error(err);
    }
  }

  /**
   * A private method to take a random value between a min and a max values.
   * @param {Integer} min An integer representing the minimum value of the range.
   * @param {Integer} max An integer representing the maximum value of the range.
   * @returns Returns an integer that will be a value between the min and the max numbers.
   */
  _getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}

export default new MessageView();
