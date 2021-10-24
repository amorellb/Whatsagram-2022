class MessageView {
  _msgSection = document.querySelector('.messages-container');
  _daySection = document.querySelector('.msg-date-container');
  _textInput = document.querySelector('.text-input');
  _sendButton = document.querySelector('.send-icon');
  _date = new Date();
  // prettier-ignore
  _months = [
    'Jan', 'Feb', 'Mar',
    'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep',
    'Oct', 'Nov', 'Dec']

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
          }</p></div>`
        );
        this._textInput.value = '';
        this._msgSection.scrollTop = this._msgSection.scrollHeight;
      });
    } catch (err) {
      console.error(err);
    }
  }
}

export default new MessageView();
