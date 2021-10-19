import { months } from '../model.js';

class MessageView {
  _parentElement = document.querySelector('.message-container');
  _daySection = document.querySelector('.msg-date-container');
  _textInput = document.querySelector('.text-input');
  _sendButton = document.querySelector('.send-icon');
  _date = new Date();

  _renderDay() {
    const msgDate = document.querySelector('.msg-date');
    if (msgDate) return;
    this._daySection.insertAdjacentHTML(
      'afterbegin',
      `<p class='msg-date'>${
        months[this._date.getMonth()]
      } ${this._date.getDate()} ${this._date.getFullYear()}</p>`
    );
  }

  // FIXME: the new lines are not rendered
  renderMessage() {
    this._sendButton.addEventListener('click', () => {
      this._renderDay();
      const date = new Date();
      this._parentElement.insertAdjacentHTML(
        'beforeend',
        `<p class='msg'>${
          this._textInput.value
        } <span class="msgHour">${date.getHours()}:${
          date.getMinutes() <= 9 ? '0' + date.getMinutes() : date.getMinutes()
        }</span></p>`
      );
      this._textInput.value = '';
    });
  }
}

export default new MessageView();
