class MessageView {
  _parentElement = document.querySelector('.message-container');
  _daySection = document.querySelector('.msg-date-container');
  _textInput = document.querySelector('.text-input');
  _sendButton = document.querySelector('.send-icon');
  _date = new Date();

  renderDay() {
    this._daySection.insertAdjacentHTML(
      'afterbegin',
      `<p class='msg-date'>${this._date.getDate()}/${this._date.getMonth()}/${this._date.getFullYear()}</p>`
    );
  }

  renderMessage() {
    this._sendButton.addEventListener('click', e => {
      const date = new Date();
      this._parentElement.insertAdjacentHTML(
        'beforeend',
        `<p class='msg'>${
          this._textInput.value
        } ${date.getHours()}:${date.getMinutes()}</p>`
      );
      this._textInput.value = '';
    });
  }
}

export default new MessageView();
