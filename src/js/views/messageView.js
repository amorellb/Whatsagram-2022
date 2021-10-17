class MessageView {
  _parentElement = document.querySelector('.message-container');
  _textInput = document.querySelector('.text-input');
  _sendButton = document.querySelector('.send-icon');

  renderMessage() {
    this._sendButton.addEventListener('click', e => {
      this._parentElement.insertAdjacentHTML(
        'beforeend',
        `${this._textInput.value}`
      );
      this._textInput.value = '';
    });
  }
}

export default new MessageView();
