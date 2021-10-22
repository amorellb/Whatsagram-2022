class MessageView {
  _parentElement = document.querySelector('.messages-container');
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
    const msgDate = document.querySelector('.msg-date');
    if (msgDate) return;
    this._daySection.insertAdjacentHTML(
      'afterbegin',
      `<p class='msg-date'>${
        this._months[this._date.getMonth()]
      } ${this._date.getDate()} ${this._date.getFullYear()}</p>`
    );
  }

  renderMessage() {
    this._sendButton.addEventListener('click', () => {
      const textToSend = this._textInput.value.replaceAll('\n', '<br>');
      this._renderDay();
      const date = new Date();
      this._parentElement.insertAdjacentHTML(
        'beforeend',
        `<div><p class='msg'>${textToSend}</p><p class="msg-hour">${date.getHours()}:${
          date.getMinutes() <= 9 ? '0' + date.getMinutes() : date.getMinutes()
        }</p></div>`
      );
      this._textInput.value = '';
    });
  }
}

export default new MessageView();
