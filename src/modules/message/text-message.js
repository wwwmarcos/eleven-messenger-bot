class TextMessage {
  constructor(recipientId, text){
    this.recipient = {
      id: recipientId
    }
    this.message = {
      text: text
    }
  }
}

export default TextMessage