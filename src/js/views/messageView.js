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
        this._renderCheckMark();
        this._textInput.value = '';
        this._msgSection.scrollTop = this._msgSection.scrollHeight;
      });
    } catch (err) {
      console.error(err);
    }
  }

  _renderCheckMark() {
    try {
      const msg = document.querySelectorAll('.msg-hour');
      const index = msg.length - 1;
      setTimeout(function () {
        msg[index].insertAdjacentHTML('beforeend', '✓');
      }, 1000);
      setTimeout(function () {
        msg[index].insertAdjacentHTML('beforeend', '✓');
      }, this._milliseconds[this._getRandomInt(0, 5)]);
    } catch (err) {
      console.error(err);
    }
  }

  _getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}

export default new MessageView();
